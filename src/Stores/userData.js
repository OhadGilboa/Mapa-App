import { observable, action } from "mobx";
import axios from "axios";
const userRoute = "http://localhost:4200";

export class UserData {
  @observable user = {
    facebookId: "",
    first_name: "",
    last_name: "",
    email: "---",
    picture: "",
    gender: "---",
    age: "---",
    user_status: "active",
    mode: "",
    latitude: 0,
    longitude: 0
  };

  @action async addPosition() {
    if (navigator.geolocation) {
      await navigator.geolocation.getCurrentPosition(async position => {
        this.user.latitude = await position.coords.latitude;
        this.user.longitude = await position.coords.longitude;
      }, this.options);
    }
  }

  @action getUserActive = async () => {
    let user = await axios.get(`${userRoute}/user/${this.user.email}`);
    return user;
  };

  @action loggingIn = (first_name, last_name, email, picture, facebookId) => {
    this.user.first_name = first_name;
    this.user.last_name = last_name;
    this.user.email = email;
    this.user.picture = picture;
    this.user.facebookId = facebookId;
  };


  @action updateUserProfile = async (column, value) => {
    this.user[column] = value;
    await axios.put(`${userRoute}/user`, {
      column,
      value,
      facebookId: `${this.user.facebookId}`
    });
    console.log(this.user.facebookId);
    console.log(column);
    console.log(value);
  };

  @action addUserToDataBase = async () => {
    this.addPosition();
    let user = await axios.get(`${userRoute}/user/${this.user.facebookId}`);
    if (!user.data[0]) {
      console.log(user);
      await axios.post(`${userRoute}/user`, {
        facebookId: this.user.facebookId,
        email: this.user.email,
        first_name: this.user.first_name,
        last_name: this.user.last_name,
        pitch: "",
        age: -1,
        user_status: "",
        user_gender: "",
        picture: this.user.picture,
        latitude: this.user.latitude,
        longitude: this.user.longitude,
        mode: ""
      });
    } else {
      console.log(user.data[0]);
      this.user.email = user.data[0].email
      this.user.pitch = user.data[0].pitch;
      this.user.age = user.data[0].age;
      this.user.user_status = user.data[0].user_status;
      this.user.gender = user.data[0].gender;
      this.user.mode = user.data[0].mode;
    }
  };
}

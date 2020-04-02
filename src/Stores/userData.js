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
    longitude: 0,
    distance: [],
    range: 2,
    silence: false
  };

  @action addPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.user.latitude = position.coords.latitude;
        this.user.longitude = position.coords.longitude;
      }, this.options);
    }
  }

  getPosition = function (options) {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  }

  @action getUserActive = async () => {
    let user = await axios.get(`${userRoute}/user/${this.user.email}`);
    return user;
  };

  @action loggingIn = async (first_name, last_name, email, picture, facebookId) => {
    this.user.first_name = first_name;
    this.user.last_name = last_name;
    this.user.email = email;
    this.user.picture = picture;
    this.user.facebookId = facebookId;
    const position = await this.getPosition()
    this.user.latitude = position.coords.latitude;
    this.user.longitude = position.coords.longitude;
    await this.addUserToDataBase()
    await this.getLocationsList()
  };


  @action updateUserProfile = async (column, value) => {
    this.user[column] = value;
    await axios.put(`${userRoute}/user`, {
      column,
      value,
      facebookId: `${this.user.facebookId}`
    });
  };


  @action updateUserBoolean = async (column, value) => {
    this.user[column] = value;
    await axios.put(`${userRoute}/boolean`, {
      column,
      value,
      facebookId: `${this.user.facebookId}`
    });
  };

  @action addUserToDataBase = async () => {
    let user = await axios.get(`${userRoute}/user/${this.user.facebookId}`);
    if (!user.data[0]) {
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
        mode: "",
        range: 2,
        silence: false,
      });
    } else {
      this.user.email = user.data[0].email
      this.user.pitch = user.data[0].pitch;
      this.user.age = user.data[0].age;
      this.user.user_status = user.data[0].user_status;
      this.user.gender = user.data[0].gender;
      this.user.mode = user.data[0].mode;
      this.user.range = user.data[0].range;
      this.user.silence = user.data[0].silence;
      await this.updateLocationToDB();
    }
  };

  @action updateLocationToDB = async () => {
    await axios.put(`${userRoute}/user2`, {
      column1: "latitude",
      value1: this.user.latitude,
      column2: "longitude",
      value2: this.user.longitude,
      facebookId: `${this.user.facebookId}`
    });
  }

  @action getLocationsList = async () => {
    const dis = await axios.get(`${userRoute}/distance/${this.user.facebookId}`)
    this.setDistance(dis)
  }

  @action setRange = range => {
    this.user.range = range
    this.updateUserProfile("range", this.user.range)

  }
  @action setMode = mode => {
    this.user.mode = mode
    console.log(this.user.mode)
    this.updateUserProfile("mode", this.user.mode)
  }
  @action setSilence = silence => {
    this.user.silence = silence
    this.updateUserBoolean("silence", this.user.silence)
  }

  @action setDistance = distance => {
    this.user.distance = distance
  }

}

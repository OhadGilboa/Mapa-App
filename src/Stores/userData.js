import { observable, action } from "mobx";
import axios from "axios";
const userRoute = "http://localhost:4200";

export class UserData {
  @observable user = {
    first_name: "",
    last_name: "",
    email: "---",
    picture: "",
    gender: "---",
    age: "---",
    user_status: "active",
    mode: ""
  };


    @action addPosition() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async function(position){
                const response = position.coords.latitude + ", " + position.coords.longitude;
                
                console.log(response);
            }, this.options);
        }
    }

  @action getUserActive = async () => {
    let user = await axios.get(`${userRoute}/user/${this.user.email}`);
    return user
  }

  @action loggingIn = (first_name, last_name, email, picture) => {
    this.user.first_name = first_name
    this.user.last_name = last_name
    this.user.email = email
    this.user.picture = picture
  };

  @action updateUserProfile= async (column, value) => {
    this.user[column] = value  
    let user = await axios.get(`${userRoute}/user/${this.user.email}`);
    await axios.put(`${userRoute}/user`, {
        column: column,
        value: value,
        userId: `${user.userId}`
    });
  };

  @action addUserToDataBase = async () => {
    let user = await axios.get(`${userRoute}/user/${this.user.email}`);
    if (!user.data[0]) {
      await axios.put(`${userRoute}/user`, {
        email: this.user.email,
        first_name: this.user.first_name,
        last_name: this.user.last_name,
        pitch: "",
        age: 0,
        user_status: "",
        user_gender: "",
        picture: this.user.picture,
        latitude: 0,
        longitude: 0,
        mode: ""
      });
    } else {
      //maybe update the user status?!
    }
  };
}          
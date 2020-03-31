import { observable, action } from 'mobx'
import axios from 'axios'
const userRoute = "http://localhost:4200"


export class UserData {
    @observable user = {
        first_name: "",
        last_name: "",
        email: "",
        picture: ""
    }

    @action loggingIn = (first_name, last_name, email, picture) => {
        const user = { first_name, last_name, email, picture }
        this.user = user
    }

    @action addPosition() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async function(position){
                const response = position.coords.latitude + ", " + position.coords.longitude;
                
                console.log(response);
            }, this.options);
        }
    }



    @action addUserToDataBase = async () => {
        let user = await axios.get(`${userRoute}/user/${this.user.email}`)
        if (!user.data[0]) {
            await axios.post(`${userRoute}/user`, {
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
            })
        }
        else {
            //maybe update the user status?!
        }
    }



}
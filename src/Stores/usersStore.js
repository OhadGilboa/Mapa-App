import { observable, computed, action } from 'mobx'
import axios from 'axios'
const userRoute = "http://localhost:4200"

export class UsersStore {

    @observable users = []

    @computed get numOfUsers() {
        return this.users.length;
    }



    optionsForGeolocation = {
        maximumAge: 10000,
        timeout: 5000,
        enableHighAccuracy: true
    }

    @action getUsers = async () => {
        let users = await axios.get(`${userRoute}/users`)
        this.users = users.data
    }


}
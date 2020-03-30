import { observable, computed, action } from 'mobx'

export class UsersStore {
    @observable userId
    @observable email
    @observable first_name
    @observable last_name
    @observable pitch = ""
    @observable user_password
    @observable user_status
    @observable gender
    @observable picture
    @observable latitude
    @observable longitude
    @observable mode
    @observable usersInRange = []


    constructor(userId, email, first_name, last_name, user_password, user_status, gender, picture, latitude, longitude, mode) {
        this.userId = userId
        this.email = email
        this.first_name = first_name
        this.last_name = last_name
        this.user_password = user_password
        this.user_status = user_status
        this.gender = gender
        this.picture = picture
        this.latitude = latitude
        this.longitude = longitude
        this.mode = mode
    }


    @action updateEmail = (newEmail) => { this.email = newEmail }
    @action updateFirstName = (newFirstName) => { this.first_name = newFirstName }
    @action updateLastName = (newLastName) => { this.last_name = newLastName }
    @action updateStatus = (newStatus) => { this.user_status = newStatus }
    @action updatePicture = (newPicture) => { this.picture = newPicture }
    @action setLatitude = (newLatitude) => { this.latitude = newLatitude }
    @action setLongitude = (newLongitude) => { this.longitude = newLongitude }
    @action updateMode = (newMode) => { this.mode = newMode }
    @action updateUsersInRange= (users) => {
        this.usersInRange=users  
    }

    @computed get getUserId() { return this.userId }
    @computed get getEmail() { return this.email }
    @computed get getFirstName() { return this.first_name }
    @computed get getLastName() { return this.last_name }
    @computed get getStatus() { return this.user_status }
    @computed get getUserPicture() { return this.picture }
    @computed get getLatitude() { return this.latitude }
    @computed get getLongitude() { return this.longitude }
    @computed get getUserMode() { return this.mode }
}
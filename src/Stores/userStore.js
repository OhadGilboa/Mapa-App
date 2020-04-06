import { observable } from "mobx";

export class userStore{
    @observable userId;
    @observable facebookId;
    @observable first_name;
    @observable last_name;
    @observable email;
    @observable picture;
    @observable gender;
    @observable age;
    @observable user_status;
    @observable mode;
    @observable latitude;
    @observable longitude;
    @observable range;

    constructor(user){
        this.userId = user.userId
        this.facebookId = user.facebookId
        this.first_name = user.first_name
        this.last_name = user.last_name
        this.email = user.email
        this.picture = user.picture
        this.gender = user.gender
        this.age = user.age
        this.mode = user.mode
        this.latitude = user.latitude
        this.longitude = user.longitude
        this.range = user.range
        this.distance = user.distance
    }
}

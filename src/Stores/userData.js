import { observable, action} from 'mobx'


export class UserData {
    @observable user

    @action addUser = (name, email, picture) => {
        const user = { name, email, picture }
        this.user = user

    }
}
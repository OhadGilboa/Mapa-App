
import { observable } from 'mobx'

export class User {
    @observable name
    @observable email
    @observable imageURL
    constructor(id, name, email, imageURL) {
        this.id = id
        this.name = name
        this.email = email
        this.imageURL = imageURL
    }
}
import { observable, action, computed } from "mobx";
import axios from "axios";
import { userStore } from "./userStore";
// const userRoute = "http://localhost:4200";
const userRoute = "";

export class UserData {
  @observable user = {
    userId: 0,
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
    range: 2,
    silence: false,
    distance: [],
    conversations: [],
    showChat: false,
    indexForRange: -1,
    modeSelected: "all"
  };

  @observable messages = []
  @observable users = []
  @observable interval;
  @observable userIdToChat

  @action addPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.user.latitude = position.coords.latitude;
        this.user.longitude = position.coords.longitude;
      });
    }
  }

  @action getUsers = async () => {
    let users = await axios.get(`${userRoute}/users`)
    this.users = users.data.map(u => new userStore(u))
  }

  @action getUserId = async () => {
    let userId = await axios.get(`${userRoute}/userId`)
    this.users.userId = userId.data
  }

  getPosition = function (options) {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  }


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
    await this.getUsers()
    await this.getConversations()
    await this.getLocationsList()
    await this.addingDistanceToUsers()
    this.setIndexForRange()
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
      this.user.userId = await this.getUserId()
    } else {
      this.user.userId = user.data[0].userId
      this.user.email = user.data[0].email
      this.user.pitch = user.data[0].pitch;
      this.user.age = user.data[0].age;
      this.user.user_status = user.data[0].user_status;
      this.user.gender = user.data[0].gender;
      this.user.mode = user.data[0].mode;
      this.user.range = user.data[0].distanceRange;
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
    this.updateUserBoolean("distanceRange", this.user.range)
    this.setIndexForRange()
  }

  @action setMode = mode => {
    const user = { ...this.user }
    user.mode = mode
    this.user = user
    this.updateUserProfile("mode", this.user.mode)
  }

  @action setModeSelected = modeSelected => {
    this.user.modeSelected = modeSelected
  }


  @action setSilence = silence => {
    this.user.silence = silence
    this.updateUserBoolean("silence", this.user.silence)
  }

  @action setDistance = distance => {
    this.user.distance = distance
  }

  @computed get getRange() {
    return this.user.range
  }

  @action setUsers = users => {
    this.users = users;
  }

  @action setShowChat = () => {
    this.user.showChat = !this.user.showChat;
    clearInterval(this.interval)
  }


  @action getConversations = async () => {
    let conversations = await axios.get(`${userRoute}/conversations/${this.user.userId}`)
    this.user.conversations = conversations.data
    for (let uc of this.user.conversations) {
      for (let u of this.users) {
        if ((uc.user_id1 === u.userId && u.userId !== this.user.userId) ||
          uc.user_id2 === u.userId && u.userId !== this.user.userId) {
          uc.facebookId = u.facebookId
          uc.first_name = u.first_name
          uc.last_name = u.last_name
          uc.email = u.email
          uc.picture = u.picture
          uc.gender = u.gender
          uc.age = u.age
          uc.user_status = u.user_status
          uc.mode = u.mode
          uc.latitude = u.latitude
          uc.longitude = u.longitude
        }
      }
    }
  }

  @action startCon = async userId => {
    let counter = this.user.conversations.length
    if (this.user.conversations.length !== 0) {
      this.user.conversations.map(c => {
        if (c.user_id1 !== userId && c.user_id2 !== userId) {
          counter--;
        }
        if (counter < 1) {
          this.postConversation({
            user_id1: this.user.userId,
            user_id2: userId,
          })
          this.getConversations();
        }
      })
    }
    else {
      this.postConversation({
        user_id1: this.user.userId,
        user_id2: userId,
      })
      this.getConversations();
    }
  }

  @action postConversation = async conversation => {
    await axios.post(`${userRoute}/conversation`, {
      user_id1: conversation.user_id1,
      user_id2: conversation.user_id2,
    })
  }

  @action getMessagesOfConversation = async conId => {
    let messages = await axios.get(`${userRoute}/messages/${conId}`)
    this.messages = messages.data
  }


  @action postMessage = async message => {
    await axios.post(`${userRoute}/message`, {
      message_date: message.message_date,
      message_text: message.message_text,
      conversationId: message.conversationId,
      user_sending_id: message.user_sending_id,
      user_receiving_id: message.user_receiving_id
    })
    this.messages.push(message)
  }

  @action bubbleSort = function () {
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < this.users.length - 1; i++) {
        if (this.users[i].distance > this.users[i + 1].distance) {
          let temp = this.users[i];
          this.users[i] = this.users[i + 1];
          this.users[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
  }


  @action addingDistanceToUsers = () => {
    let dis = this.user.distance.data
    for (let u of this.users) {
      for (let d of dis) {
        if (u.facebookId === d.id) {
          u.distance = d.distance
        }
      }
    }
    this.bubbleSort()
  }

  @action setIndexForRange = () => {
    this.user.indexForRange = this.users.findIndex(u => u.distance > this.user.range)
    if (this.user.indexForRange === -1) {
      this.user.indexForRange = this.users.length;
    }
  }
}
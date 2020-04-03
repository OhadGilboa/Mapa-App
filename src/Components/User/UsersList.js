import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import User from "./User";
import "../../styles/userList.css"
import "../../styles/user.css"

@inject('userData')
@observer
class UsersList extends Component {

  index = this.props.userData.user.users.length

  addingDistanceToUsers() {
    let dis = this.props.userData.user.distance.data
    for (let u of this.props.userData.user.users) {
      for (let d of dis) {
        if (u.facebookId === d.id) {
           u.distance = d.distance
        }
      }
    }
  }

  removeFarPeople() {
    console.log(this.props.userData.user.range)
    this.index = this.props.userData.user.users.findIndex(u => u.distance > this.props.userData.user.range)
    console.log(this.index)
    console.log(this.props.userData.user.users[0].distance)
    console.log(this.props.userData.user.users[1].distance)
    console.log(this.props.userData.user.users[2].distance)
    console.log(this.props.userData.user.users[3].distance)
    console.log(this.props.userData.user.users[4].distance)
    
  }

  removeMyself() {
    let indexToRemove = this.props.userData.user.users.findIndex(u => u.facebookId === this.props.userData.facebookId)
    this.props.userData.user.users.splice(indexToRemove, 1)
  }

  markYourself() {
    let index = this.props.userData.user.users.findIndex(u => u.id === this.props.userData.user.id)
    this.props.userData.user.users[index].current = true;
  }


  bubbleSort = function () {
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < this.props.userData.user.users.length - 1; i++) {
        if (this.props.userData.user.users[i].distance > this.props.userData.user.users[i + 1].distance) {
          let temp = this.props.userData.user.users[i];
          this.props.userData.user.users[i] = this.props.userData.user.users[i + 1];
          this.props.userData.user.users[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
  }



  render() {
    this.addingDistanceToUsers()
    this.bubbleSort()
    this.removeFarPeople()
    this.markYourself()
    //this.removeFarPeople()
    return (
      <div className="userList">
        <div className="headerPlace"></div>
        <div className="vl"></div>
        {/* <div>{this.props.userData.user.mode}</div>
        <div>{this.props.userData.user.range}</div> */}
        {/* {this.props.userData.user.users.map(u => <User user={u} key={u.facebookId} />)} */}
        {this.props.userData.user.users.map((u,index) => this.index > index ? <User user={u} key={u.facebookId} /> : null)}
        <div className="footerPlace"></div>
        <div className="vl"></div>
      </div>
    )
  }
}

export default UsersList;
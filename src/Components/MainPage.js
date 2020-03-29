import React, { Component } from "react";
import { observer, inject } from "mobx-react";

// @inject('usersStore')
@observer
class MainPage extends Component {
  render() {
    return <div className="mainPage-comp">This is main page</div>;
  }
}
export default MainPage;

import React, { Component } from 'react';
import imgAvatar from '../assets/avatar.jpg';

class Header extends Component {
  state = {
    name: 'Kamil 24yo',
  }

  render() {
    return (
      <div className="pageHeader">
        <img src={imgAvatar} alt="avatar" />
        <h1>Hello, </h1>
        <h2> {`My name is ${this.state.name} and this is my resume/cv`.toUpperCase()}</h2>
      </div>
    );
  }
}

export default Header;
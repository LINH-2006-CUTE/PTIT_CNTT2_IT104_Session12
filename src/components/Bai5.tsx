import React, { Component } from "react";

type User = {
  firstName: string;
  lastName: string;
};

class Bai5 extends Component {
  formatName(user: User) {
    return `${user.firstName} ${user.lastName}`;
  }

  render() {
    const user: User = {
      firstName: "Nguyễn Văn",
      lastName: "Nam",
    };

    return (
      <div>
        <h3>Họ và tên: {this.formatName(user)}</h3>
      </div>
    );
  }
}

export default Bai5;

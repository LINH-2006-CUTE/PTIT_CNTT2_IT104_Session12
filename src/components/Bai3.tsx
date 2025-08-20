import { Component } from "react";

class Bai3 extends Component {
  render() {
    const user = {
      name: "Nguyễn Văn A",
      gender: "Nam",
      birthday: "06/03/2024",
      email: "nva@gmail.com",
      address: "Thanh Xuân, Hà Nội"
    };
    return (
      <div>
        <h3 style={{ textAlign: "center" }}>Thông tin cá nhân</h3>
        <ul style={{ listStylePosition: "inside" }}>
          <li>
            Họ và tên: <b>{user.name}</b>
          </li>
          <li>
            Giới tính: <b>{user.gender}</b>
          </li>
          <li>
            Ngày sinh: <b>{user.birthday}</b>
          </li>
          <li>
            Email: <b>{user.email}</b>
          </li>
          <li>
            Địa chỉ: <b>{user.address}</b>
          </li>
        </ul>
      </div>
    );
  }
}

export default Bai3;

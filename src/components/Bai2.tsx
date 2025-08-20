import { Component } from "react";

class Bai2 extends Component {
  render() {
    const num1 = 10;
    const num2 = 10;

    const add = (a: number, b: number) => a + b;
    const subtract = (a: number, b: number) => a - b;
    const multiply = (a: number, b: number) => a * b;
    const divide = (a: number, b: number) => a / b;

    return (
      <div>
        <h3>Danh sách kết quả</h3>
        <ul>
          <li>{num1} + {num2} = {add(num1, num2)}</li>
          <li>{num1} - {num2} = {subtract(num1, num2)}</li>
          <li>{num1} * {num2} = {multiply(num1, num2)}</li>
          <li>{num1} / {num2} = {divide(num1, num2)}</li>
        </ul>
      </div>
    );
  }
}

export default Bai2;

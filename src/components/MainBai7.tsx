import { Component } from "react";
import Cart from "./CartBai7";

class MainBai7 extends Component {
  render() {
    return (
      <div style={{ flex: "3", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px", padding: "20px", background: "#fff5f5" }}>
        {Array.from({ length: 12 }).map((_, index) => (
          <Cart key={index} />
        ))}
      </div>
    );
  }
}

export default MainBai7;

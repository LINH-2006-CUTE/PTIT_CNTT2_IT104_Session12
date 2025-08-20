import { Component } from "react";

type ColorBoxProps = {
  color: string;
};

class ColorBox extends Component<ColorBoxProps> {
  render() {
    const { color } = this.props;
    return (
      <div style={{ textAlign: "center", margin: "10px" }}>
        <div
          style={{
            width: "200px",
            height: "200px",
            backgroundColor: color,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: "20px",
            margin: "0 auto",
          }}
        >
          Box
        </div>
        <p style={{ marginTop: "8px" }}>{color}</p>
      </div>
    );
  }
}

class Bai3 extends Component {
  render() {
    const colors = ["red", "blue","green", "orange"];

    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        {colors.map((c, index) => (
          <ColorBox key={index} color={c} />
        ))}
      </div>
    );
  }
}

export default Bai3;

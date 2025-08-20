import React, { Component } from "react";
import Header from "./Header";
import Menu from "./Menu";
import Main from "./Main";
import Footer from "./Footer";

class AdminIndex extends Component {
  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        
        {/* Header */}
        <Header />

        {/* Nội dung */}
        <div style={{ display: "flex", flex: 1 }}>
          <Menu />
          <Main />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    );
  }
}

export default AdminIndex;

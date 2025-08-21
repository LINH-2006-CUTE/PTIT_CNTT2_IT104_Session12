import  Component  from "react";
import Header from "./HeaderBai7";
import Navbar from "./NavbarBai7";
import Menu from "./MenuBai7";
import Main from "./MainBai7";
import Article from "./ArticleBai7";

class UserLayout extends Component {
  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        {/* Header */}
        <Header />
        {/* Navbar */}
        <Navbar />
        {/* Nội dung */}
        <div style={{ display: "flex", flex: 1 }}>
          <Menu />
          <Main />
          <Article />
        </div>
      </div>
    );
  }
}

export default UserLayout;

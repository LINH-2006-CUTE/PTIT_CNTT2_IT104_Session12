import { Component } from "react";
const arr =["HTML", "CSS", "JavaScript", "ReactJS"]
class Bai1 extends Component {
    render() {
        return <>
        <h1>Danh sach khoa hoc</h1>
        <ol style = {{textAlign:"center", listStylePosition: "inside"}}>
            
             {arr.map((item, index) => (
             
                 <li key={index}>{item}</li>
          ))}
        </ol>
        </>
    }
}



export default Bai1
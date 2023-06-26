import React from "react";
import ReactDOM from "react-dom";

const image = "https://picsum.photos/id/237/200/300";

ReactDOM.render(
  <div>
   <div>
    <img className="image" src="/images/pic1.jpeg" alt="pic1"></img>
    <img className="image" src="/images/pic2.jpg" alt="pic1"></img>
    <img className="image" src="/images/pic3.png" alt="pic1"></img>
   </div>
   <img src={image}/>
  </div>,
 document.getElementById("root")
);
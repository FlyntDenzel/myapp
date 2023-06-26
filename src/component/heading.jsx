import React from "react";

const dateObject = new Date();
const time = dateObject.getHours();

let greeting;
const customColor = {
    color : ""
}
if(time<12){
    greeting = "Good morning";
    customColor.color = "red"
}

else if(time<18){
    greeting = "Good afternoon";
    customColor.color = "green"
}

else{
    greeting = "Good evening";
    customColor.color = "blue";
}

function Heading() {
    return (
        <div className="heading">
            <h2 style={customColor}>Hello and {greeting}</h2>
        </div>
    );
}

export default Heading;
import React from "react";
import {add, multiply, substract, divide} from "./calculator.js";

function List() {
    return (
         <ul className="list">
            <li>{add(1, 2)}</li>
            <li>{substract(7, 2)}</li>
            <li>{multiply(2, 3)}</li>
            <li>{divide(5, 2)}</li>
        </ul>
    );
}

export default List;
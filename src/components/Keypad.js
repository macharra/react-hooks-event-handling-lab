// Code Keypad Component Here
import React from "react";

function Keypad (){
    function onChange(){
    console.log('Entering password...');
}
    return (
        <div>
            <input type="password" onChange={onChange}></input>
        </div>
    )
}

export default Keypad;
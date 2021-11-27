import React from "react";
import { Link } from "react-router-dom";

function VendingMachine() {
  return(
    <div
      className="VendingMachine"
      style={{ backgroundImage: `url(${vendingMachineImg})` }}>
        <h1>hello i am a vending machine. what would you like to eat?</h1>
        <h1><Link to="/Doritos">Doritos</Link></h1>
        <h1><Link to="/Skittles">Skittles</Link></h1>
        <h1><Link to="/Twix">fresh Twix</Link></h1>
    </div>
  );
}

export default VendingMachine;

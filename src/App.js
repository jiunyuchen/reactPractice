import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Counter />
      {/* <Greet name="Jacquei" heroName="Hero Woman">
        <button>submit</button>
      </Greet>
      <Greet name="Andrews" heroName="Hero Man" />
      <Greet name="Matt" heroName="Hero Kid" />
      <Welcome name="Mark"></Welcome> 
      <Message />
       <Hello />  */}
    </div>
  );
}

export default App;

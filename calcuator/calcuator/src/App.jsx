import Display from "./Componets/Display";
import ButtonContanier from "./Componets/ButtonContainer";
import "./App.css"
import { useState } from "react";


function App() {
let [celVal,setCalVal]=useState("")
let handleClick=(btnText)=>{
    if(btnText==="C"){
      setCalVal("")
    }
    else if(btnText==="="){
      let result=eval(celVal)
      setCalVal(result)

    }
    else{
      let newDisplayValue=celVal+btnText;
      setCalVal(newDisplayValue)
    }
}

  return (
    <div className="App">
    <div className="container-sm main">
    <Display celVal={celVal}/>
    <ButtonContanier handleClick={handleClick}/>
    </div>
    </div>
  );
}

export default App;

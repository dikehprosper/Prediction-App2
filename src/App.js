import React from "react";
import "./App.css";
import Home from "./home";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";


export default function App() {

  return (<>
    <LoginButton />
<Home />
</>
  );
}

 /*   <div className='login-page'>
            <form onSubmit={login}>
            <div className="inputBox inputss inputsss" > 
            <input type="text" required="required" ref ={email} className="input"/>
             <span className='spans'>Email</span> </div>
            <div className="inputBox inputss" > 
            <input type="text" required="required" ref = {password} className="input"/> 
            <span className='spans'>Password</span> </div>
                <button class=" button login-button">Login</button>
                <h5 className='fp' onClick={fp}>forgotten password?</h5>
                {display}
            </form>
        </div> */
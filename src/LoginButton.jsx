import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return ( <div className="login-button1">
    <div className="login-button2">
     <div className="login-button3">Welcome!!! </div> 
     <div className="login-button4"> <button onClick={() => loginWithRedirect()}>Get Started</button></div>  
    </div>

  </div>
  )
};

export default LoginButton;
import React from "react";
import './App.css'; 

function Resetpassword() {
    return(
        <>
        <div className="reset-container">
        <h2>Reset Password</h2>
        <label>Email address</label>
        <input type="text" placeholder="Enter your Email address"/>
        <button> Send a Recovery Link</button>
        </div>
        </>
    )
}
export default Resetpassword;
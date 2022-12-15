import React from "react";
import "../styles/loginsan.css"


function Login(){
    return(
       <div className="j d-flex align-items-center justify-content-center w-100 ">
         <div className="login w-25">
            <h2 className="mb-4">Login Form</h2>
            <form className="needs-validation">
            <div className="form-group was-validated mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input type="email" className="form-control" required></input>
                <div className="invalid-feedback">
                    Please enter
                </div>
            </div>
            <div className="form-group was-validated mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" required></input>
                <div className="invalid-feedback">
                    Please enter
                </div>
            </div>
            <div className="form-group form-check mb-3">
                <input type="checkbox" className="form-check-input"></input>
                <label htmlFor="check" className="form-check-label">Remember me</label>
            </div>
            <button type="submit" className="btn btn-info w-100 mt-2">SIGN IN</button>
            </form>
            

        </div>
       </div>

    )
}
export default Login
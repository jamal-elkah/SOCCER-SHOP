import React from "react";

function SignUp(){
    return(
        <div className="con w-100 d-flex justify-content-center mt-5 ">
            <div className="for mt-5 w-10 w-25">
                <h3>Sign Up</h3>
                <div className="form was-validated ">
                    <form className="needs-validation">
                        <label>First Name:</label>
                        <input type="text" placeholder="Enter your First Name" className="form-control" required />
                        <div className="invalid-feedback">Enter your First Name</div>
                        <label>Last Name:</label>
                        <input type="text" placeholder="Enter your Last Name" className="form-control" required/>
                        <div className="invalid-feedback">Enter your Last Name</div>
                        <label>Email:</label>
                        <input type="email" placeholder="Enter your email" className="form-control" required/>
                        <div className="invalid-feedback">Enter your email</div>
                        <label>Password:</label>
                        <input type="password" placeholder="Enter your password" className="form-control" required/>
                        <div className="invalid-feedback">Enter your password</div>
                        <label>Confirm Password:</label>
                        <input type="password" placeholder="Enter confirm password" className="form-control" required/>
                        <div className="invalid-feedback">Please confirm password</div>
                        <div className="mt-2 text-center">
                            <button className="btn btn-danger " style={{width:"48%", marginRight:"4%"}}>Cancel</button>
                            <button className="btn btn-info"style={{width:"48%"}}>Sign Up</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}
export default SignUp
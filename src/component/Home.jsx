import React from "react"
import About from "./About"
import Products from "./Products"
import Contact from "./Contact"



const Home = () =>{
    return(
        <div className="far">
            <div className="card text-bg-dark border-0">
  <img src="/pi/back.jpg" className="card-img " alt="Background" height="1000px"/>
  <div className="card-img-overlay d-flex flex-column justify-content-center">
    <div className="container">
    <h5 className="card-title display-5 fw-bolder mb-0">SOCCER SHOP</h5>
    <p className="card-text lead fs-2">We have high quality soccer clothes. Welcome to your site...</p>
    </div>

   
  </div>
</div>
<Products/>
<About/>
<Contact/>

        </div>
    )
}
export default Home
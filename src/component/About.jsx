
const About = () => {
    return (
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-12 mb-5">
                    <h1 className="display-6 fw-bolder text-center"> About us</h1>
                    <hr />
                    <div className="row">
                        {/*****/}
                        <div className="col">
                            <div>
                                <div className="text-center imgg"><img width="50%"  src="./pi/best.jpg" alt="" /></div><br/>
                                <p>We are a team that works hard to provide you with the best site service and offer you the best quality products.</p>
                            </div>
                        </div>
                        {/*****/}
                        <div className="col">
                            <div>
                                <div className="text-center imgg" ><img width="50%" src="./pi/sec.png" /></div><br/>
                                <p>Our team works every day to secure your data because the Internet is a dangerous place! With great regularity, we hear about websites becoming unavailable due to denial of service attacks, or displaying modified (and often damaging) information on their homepages. In other high-profile cases, millions of passwords, email addresses, and credit card details have been leaked into the public domain, exposing website users to both personal embarrassment and financial risk.</p>
                            </div>
                        </div>
                        {/*****/}
                        <div className="col">
                            <div>
                                <div className="text-center imgg"><img width="50%" src="./pi/cash.jpg"  /></div><br/>
                                <p>Cash on Delivery we offer a payment service after receipt, which enables the customer to obtain his order first, and if he likes it, he can pay the money.</p>
                            </div>
                        </div>
                        {/*****/}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About
import './style.css';
import React from "react";

function Home() {
    let age = new Date().getFullYear() - 2003;

    return (
        <div className="d-flex flex-column p-4 pt-0">
            <h1 className="my-4 title-aboutme">About me</h1>
            <div className="row mt-2">
                <div className="col-6">
                    <p> 
                        <b>First Name:</b>
                        &nbsp; Yoshita Reddy
                    </p>
                    <p> 
                        <b>Last Name:</b>
                        &nbsp; Vemparala
                    </p>
                    <p> 
                        <b>Age:</b>
                        &nbsp;{age} Years old
                    </p>
                    <p> 
                        <b>Address:</b>
                        &nbsp; Hyderabad city, Telangana
                    </p>              
                </div>

                <div className="col-6">    
                    <p> 
                        <b>Nationality:</b>
                        &nbsp; Indian
                    </p>
                    <p> 
                        <b>Language:</b>
                        &nbsp; Telugu, English and Hindi
                    </p>
                    <p className='email'> 
                        <b>Email:</b>
                        &nbsp; vemparalayoshita@gmail.com
                    </p>
                </div>
            </div>

            <div className="row mt-5">
                <p className="message"> 
                    Have a nice day, my friend &nbsp;
                    <i class="far fa-heart"></i>
                </p>
            </div>
        </div>
    );
}

export default Home;

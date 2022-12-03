import './style.css';
import React from "react";
import p1 from '../../src/pic/p1.jpg';

function Home() {
    return (
        <div className="brief-card d-flex flex-column justify-content-center align-items-center pt-5">
            <div className="avatar mt-4 mx-4" >
                <img src={p1} alt="p1" />
            </div>

            <h3 className="myname mb-0 mt-3">Yoshita Reddy</h3>
            <h4 className="mb-5">S&nbsp;t&nbsp;u&nbsp;d&nbsp;e&nbsp;n&nbsp;t</h4>

            <div className="icons row p-2 mt-5 d-flex justify-content-center">
                <a href="https://github.com/yoshita-reddy" target="_blank" >
                    <i className="fab fa-github-alt icon-github"></i>
                </a>
  

            </div>
        </div >
    );
}

export default Home;

import React from 'react'
import { BiAtom } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "./Dis.css";

function About() {
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="row" id="logo">
                        <div className="col-2">
                            <BiAtom className="logo" size={40} />
                        </div>
                        <div className="col-8" style={{ margin: "30px" }}>
                            <h3>About Me</h3>
                        </div>
                    </div>
                </div>
            </header><br /><br />

            <div className="container">
                <div className="row">
                    <div className="card cd" style={{width: "18rem",display:'flex',textAlign:'center',marginLeft:"30px",alignItems:'center'}}>
                        <img src="https://media-exp1.licdn.com/dms/image/C5635AQGyN6L7GOd3XA/profile-framedphoto-shrink_400_400/0/1595950507504?e=1620154800&v=beta&t=PTditHKuVPY4nv3B8zRAqDB6rO4NNHy7Ky6ywjiCxu0" class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Gourav Ojha</h5>
                                <p className="card-text">Hello User ! </p>
                                <p className="card-text">I am a React Developer and this project is a news search webapp build with the help of Free News API available on RapidAPI.com. This project is recommended to be viewed on <strong>Mobile devices</strong> as it is built keeping mobile first design in mind  </p>
                                <span>
                                <a href="https://github.com/gouravojha" style={{margin:"3px"}}><FaGithub size={40}/></a>
                                <a href="https://www.linkedin.com/in/gourav-ojha-06857b175/" style={{margin:"3px"}}><FaLinkedin size={40}/></a>
                                <a href="https://twitter.com/GOjha101" style={{margin:"3px"}}><FaTwitter size={40}/></a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </>
    )
}

export default About

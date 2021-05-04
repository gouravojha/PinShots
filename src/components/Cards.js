import React from 'react'
import "./Cards.css";

function Cards({link,media,title,summery,date}) {
    return (
        <>
        <div className="container">
        <div className="row">
            <div className="col-12 content">
                <div className="card" style={{width: '20rem'}}>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <h6>{date}</h6>
                        <img class="card-img-top" src={media} alt="cap"></img>
                        <br/><br/><p className="card-text">{summery}</p>
                        <a href={link} className="btn btn-outline-danger">Read More</a>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default Cards

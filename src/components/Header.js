import React from 'react'
import "./Head.css"
import { BiAtom } from "react-icons/bi";
import { GoSearch } from "react-icons/go";


function Header(props) {
    return (
        <>
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-2">
                    <BiAtom className="logo" size={40}/>
                    </div>
                    <div className="col-8">
                    <input id="input" onBlur={(event) => props.onBlur(event.target.value)} type="text" placeholder="Search"></input>
                    </div>
                    <div className="col-2">
                    <GoSearch className="search" style={{marginTop:"15px",marginLeft:"-12px"}} size={30}/>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}

export default Header

import React from 'react'
import { NavLink } from 'react-router-dom'


const Nav = () => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper black ">
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li ><NavLink to='/'>Works</NavLink></li>
                        <li><NavLink to='/'>About</NavLink></li>
                        <li><NavLink to='/'>Contact</NavLink></li>
                    </ul>
                </div>
            </nav>   
        </div>
    )
}

export default Nav

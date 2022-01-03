import React from 'react'
import { Link } from 'react-router-dom'
import M from 'materialize-css'
M.AutoInit()


const Nav = () => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper black">
                    <ul className="right">
                        <li><Link to={'/works'}>Works</Link></li>
                        <li><Link to={'/contact'}>Contact</Link></li>
                    </ul>
                </div>
            </nav> 
        </div>
    )
}

export default Nav

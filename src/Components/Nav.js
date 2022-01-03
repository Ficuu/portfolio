import React from 'react'
import { Link } from 'react-router-dom'
import M from 'materialize-css'
M.AutoInit()


const Nav = () => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper black">
                    <Link to={'#'} data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to={'/works'}>Works</Link></li>
                        <li><Link to={'/contact'}>Contact</Link></li>
                    </ul>
                </div>
            </nav>
            <ul className="sidenav" id="mobile-demo">
                <li><Link to={'/'}>Index</Link></li>
                <li><Link to={'/works'}>Works</Link></li>
                <li><Link to={'/contact'}>Contact</Link></li>
            </ul>   
        </div>
    )
}

export default Nav

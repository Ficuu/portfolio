import React from 'react'
import CV from '../assets/documents/FACUNDO PAEZ.pdf'


const Footer = () => {
    return (
        <div>
            <footer 
                className="page-footer"
                style={{ backgroundColor: 'black' }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text">My CV</h5>
                            <p className="grey-text text-lighten-4">The document is <a href={CV} target="_blank" rel="noopener noreferrer" >here</a></p>
                            <p className="grey-text text-lighten-4">Thanks for view</p>
                        </div>
                            <div className="col l4 offset-l2 s12">
                                <h5 className="white-text">Social links</h5>
                                <ul>
                                    <li>
                                        <i className="fab fa-linkedin" >
                                            <a 
                                                style={{marginLeft: '6px'}}
                                                className="grey-text text-lighten-3 " 
                                                href="https://www.linkedin.com/in/facundo-paez-596329186/"
                                                target="_blank" rel="noopener noreferrer" 
                                            >
                                                LinkedIn
                                            </a>
                                        </i>
                                    </li>
                                    <li>
                                        <i className="fab fa-github" >
                                            <a 
                                                style={{marginLeft: '6px'}}
                                                className="grey-text text-lighten-3" 
                                                href="https://github.com/Ficuu"
                                                target="_blank" rel="noopener noreferrer" 
                                            >
                                                GitHub
                                            </a>
                                        </i>
                                    </li>
                                    <li>
                                        <i className="fab fa-whatsapp" >
                                            <a 
                                                style={{marginLeft: '6px'}}
                                                className="grey-text text-lighten-3" 
                                                href="https://wa.me/5491156540138"
                                                target="_blank" rel="noopener noreferrer" 
                                            >
                                                Whatsapp
                                            </a>
                                        </i>
                                    </li>
                                    <li>
                                        <i className="fab fa-instagram" >
                                            <a 
                                                style={{marginLeft: '6px'}}
                                                className="grey-text text-lighten-3" 
                                                href="https://www.instagram.com/facuupaez/"
                                                target="_blank" rel="noopener noreferrer" 
                                            >
                                                Instagram
                                            </a>
                                        </i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="container">
                        © 2021 Copyright Paez Facundo
                        <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer

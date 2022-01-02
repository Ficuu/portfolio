import React from 'react'

const Presentation = () => {
    return (
        <>
            <div 
                style={{ 
                    backgroundColor: '#1a237e',
                    color: 'white',
                    paddingTop: '4rem',
                    paddingBottom: '4rem' 
                }}
                className='center-align'
                >
                <h5>
                    <strong>I'm Facundo. Nice to meet you</strong>
                </h5>
                <div className='container'>
                    <p>
                        I am finishing my degree as a systems analyst, and by the year 2022 I began to study a degree in computer science.
                        I work on my own doing web design projects independently. It is an experience and a goal to continue with this. All the time I am improving my skills, and trying to learn new technologies, I am very curious and confident when developing.
                    </p>
                </div>
            </div>
            <div className='center-align'>
                <h3>My skills are</h3>
                <div className='row'>
                    <div className='col s12 m12 l6 '>
                    <i className="fas fa-code fa-2x" style={{ color: '#1a237e', marginTop: '2rem'}}></i>
                        <h4>Front-end</h4>
                        <p>I like to code from scratch</p>
                        <h5>Languages i speak:</h5>
                        <p>HTML, CSS, Js</p>
                        <span>Tools:</span>
                        <ul>
                            <li>Bootstrap</li>
                            <li>Materialize</li>
                            <li>React</li>
                            <li>GitLab</li>
                            <li>GitHub</li>
                            <li>Terminal</li>

                        </ul>
                    </div>
                    <div className='col s12 m6 l6 el6'>
                        <i className="fas fa-server fa-2x" style={{ color: '#1a237e', marginTop: '2rem'}}></i>
                        <h4>Back-end</h4>
                        <p>I like to create APIs from scratch</p>
                        <h5>Languages i speak:</h5>
                        <p>Javascript, PHP</p>
                        <span>Tools:</span>
                        <ul>
                            <li>Node Js</li>
                            <li>Express Js</li>
                            <li>MongoDB</li>
                            <li>WebPack</li>
                            <li>MySQL</li>
                            <li>Terminal</li>

                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Presentation

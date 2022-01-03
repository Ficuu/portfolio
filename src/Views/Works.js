import React from 'react'
import catWorking from '../assets/img/catWorking.jpg'

const Works = () => {
    return (
        <div className="center-align">
           <h3>Sorry! This site is in production </h3>
           <img src={catWorking} alt='siteInProduction' style={{ maxWidth: '30rem', marginTop: '1rem', marginBottom: '1rem', borderRadius: '10%' }} />
        </div>
    )
}

export default Works

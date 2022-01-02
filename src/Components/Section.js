import React from 'react'
import photoProfile from '../assets/img/profilePhoto.jpg'

const Section = () => {
    return (
        <div className="center-align" style={{marginTop: '5rem'}}> 
            <h2>Freelancer in React and Backend Dev</h2>
            <h6>I love to develop and to be able to do simply beautiful things</h6>
            <img src={photoProfile}
             style={{
                 width: '20rem', 
                 height:'20rem',
                 borderRadius: '50%',
                 marginTop: '2rem',
                 marginBottom: '2rem',
                 filter: 'grayscale(80%)'}}
             alt='photoPerfil' 
            />
        </div>
    )
}

export default Section

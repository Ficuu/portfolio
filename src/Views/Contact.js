import React, { useState } from 'react'
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'
const handlePrevent = ev => ev.preventDefault()
const Contact = () => {

    const main = async () => {
        
        let testAccount = await nodemailer.createTestAccount()
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 587,
            secure: true,
            auth: {
                user: testAccount.user,
                pass: testAccount.pass
            }
        })
        const info = await transporter.sendMail({
            from: process.env.USER_TRANSMITTER,
            to: process.env.USER_RECEIVER,
            subject: 'Message from portfolio',
            text: `${name} send this message. You email is ${email}. Body of message ${message}`,
        })
        console.log(`Message sent: ${info.messageId}`)
        console.log(`Preview URL: ${nodemailer.getTestMessageUrl(info)}`)
        handlePrevent()
    }

    dotenv.config()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    return (
        <div className='center' style={{ marginTop: '2rem' }}>
            <div className='container'>
                <h5>Thank you for your time to contact me. How can I help you?</h5>
                <div className="row ">
                    <form className="col s12 l12">
                        <div className="row center-align">
                            <div className="input-field col s6">
                                <input 
                                    id="name" 
                                    type="text" 
                                    className="validate" 
                                    value={name}
                                    onChange={() => setName()}
                                />
                                <label for="first_name">Name</label>
                            </div>
                            <div className="input-field col s6">
                                <input 
                                    id="email" 
                                    type="email" 
                                    className="validate" 
                                    value={email}
                                    onChange={() => setEmail()}    
                                />
                                <label for="email">Email</label>
                            </div>
                                <div className="input-field col s12">
                                    <textarea 
                                        id="textarea1" 
                                        className="materialize-textarea" 
                                        value={message}
                                        onChange={() => setMessage()}
                                    />
                                    <label for="textarea1">Textarea</label>
                            </div>
                            <button 
                                className='btn indigo darken-4' 
                                style={{ borderRadius: '10%' }} 
                                onClick={main()}
                                disabled
                            >
                                SEND
                            </button>
                        </div>  
                    </form>
                </div>    
            </div>
        </div>
    )
}

export default Contact

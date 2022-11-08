import React from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'

export default function Contact(){
    const [letterClass] = React.useState('text-animate')
    const refForm = React.useRef()

    function sendEmail(e){
        e.preventDefault()

        emailjs
        .sendForm(
            'service_ff99muw',
            'template_zvaxhld',
            refForm.current,
            'qFarRGOpkMnuDFd1w'
        )
        .then(
            () =>{
                alert("Message successfully sent!")
                window.location.reload(false)
            },
            () => {
                alert("Failed to send the message, please try again")
            }
        )
    }
    return(
       <>
       <div className='container contact-page' >
        <div className="text-zone">
            <h1>
                <AnimatedLetters 
                letterClass={letterClass}
                strArray={"Contact me".split('')}
                idx={15}
                />
            </h1>
            <div className="contact-form">
                <h4>Phone: +37477261076</h4>
                <h4>Instagram: @ishkhanhayrapetian</h4>
                <form ref={refForm} onSubmit={sendEmail} >
                    <ul>
                        <li className='half' >
                            <input 
                            type="text" 
                            name='name'  
                            placeholder='Name' 
                            required/>
                        </li>
                        <li className='half' >
                            <input 
                            type="email" 
                            name='email'  
                            placeholder='Email' 
                            required/>
                        </li>
                        <li className='Subject' >
                            <input 
                            type="text" 
                            name='subject'  
                            placeholder='Subject' 
                            required/>
                        </li>
                        <li>
                            <textarea 
                            name="message"
                            placeholder='Message'
                            required
                            ></textarea>
                        </li>
                        <li>
                            <input type="submit"
                            className='flat-button'
                            value="SEND" 
                            />
                        </li>
                    </ul>
                </form>
            </div>
        </div>
       </div>
       </>
    )
}
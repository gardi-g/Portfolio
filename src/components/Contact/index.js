import './index.scss'
import emailjs from '@emailjs/browser'
import {useRef} from "react";
import Loader from 'react-loaders'

const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    
    e.preventDefault()

    emailjs
        .sendForm(
            'service_mxyzkju',
            'template_1olncib',
            form.current,
            'pK7rfnM-FOsCDdG7y'
        )
      .then (
            () => {
                alert('Message successfully sent!');
            },
            () => {
                alert('Failed to send the message, please try again later.');
            }
        );  
   }
    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>Get In Touch</h1>
                <div className ="left-side"> 
                I am currently looking for a job in Software Engineering/Developer or
                Data Analyst/Engineering.<br /> 
                If there is a open position, please don't hesitate to contact me!
                </div>
                <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail} >
                        <ul>
                            <li className='half'>
                                <input type= "text" name = "name" placeholder="Name" required />
                            </li>
                            <li className='half'>
                                <input type= "email" name = "email" placeholder="Email" required />
                            </li>
                            <li>
                                <input placeholder="Subject" type="text" name="subject" required />
                            </li>
                            <li>
                                <textarea placeholder="Message" name="message" required />
                            </li>
                            <li>
                                <input type="submit" className='flat-button' value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <Loader type="ball-clip-rotate-pulse" />
        </>
    )
}





export default Contact
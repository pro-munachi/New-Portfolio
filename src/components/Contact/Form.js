import React from 'react'

import {Contacts} from './styled'


class Form extends React.Component {

    render() {
        return (
            <Contacts>
                <div className='contact'>
                    <div className='container'>
                        <div className='contactinfo'>
                            <div className='con'>
                                <h2>Contact Info</h2>
                                <ul className='info'>
                                    <li>
                                        <span><img alt='' src='/Asset/Icon/location.svg' /> </span>
                                        <span>No 2, Onyeagorom St, Akwakuma, Owerri, Imo State, Nigeria.</span>
                                    </li>
                                    <li>
                                        <span><img alt='' src='/Asset/Icon/mails.svg' /> </span>
                                        <span>Madustanley1@gmail.com</span>
                                    </li>
                                    <li>
                                        <span><img alt='' src='/Asset/Icon/phone.svg' /> </span>
                                        <span>+234 8165 9987 08</span>
                                    </li>
                                </ul>
                            </div>
                                <ul className='sci'>
                                    <li><a href='https://m.facebook.com/madu.stanley.71' target='_blank'  rel='noopener noreferrer'> <img src='/Asset/Icon/twitter.svg' alt=''/></a></li>
                                    <li><a href='https://github.com/pro-munachi' target='_blank'  rel='noopener noreferrer'> <img src='/Asset/Icon/insta.svg' alt=''/></a> </li>         
                                    <li><a href='https://twitter.com/Munachiiso?s=09' target='_blank' rel='noopener noreferrer'> <img src='/Asset/Icon/twitter.svg' alt=''/></a></li>
                                    <li><a href='https://linkedin.com/in/munachiso' target='_blank'  rel='noopener noreferrer'> <img src='/Asset/Icon/link.svg' alt=''/> </a> </li>
                                    <li><a href='https://www.instagram.com/munachiiso/' target='_blank'  rel='noopener noreferrer'> <img src='/Asset/Icon/insta.svg' alt=''/></a></li>
                                </ul>
                            
                        </div>

                    </div>
                    
                   {/* <div className='social'>
                                <a href='https://twitter.com/Munachiiso?s=09' target='_blank' rel='noopener noreferrer'> <img src='/Asset/Icon/twitter.svg' alt=''/></a>
                                <a href='https://linkedin.com/in/munachiso' target='_blank'  rel='noopener noreferrer'> <img src='/Asset/Icon/link.svg' alt=''/> </a> 
                                <a href='https://www.instagram.com/munachiiso/' target='_blank'  rel='noopener noreferrer'> <img src='/Asset/Icon/insta.svg' alt=''/></a>
                                <a href='https://m.facebook.com/madu.stanley.71' target='_blank'  rel='noopener noreferrer'> <img src='/Asset/Icon/facebook.svg' alt=''/></a>
                                <a href='https://github.com/pro-munachi' target='_blank'  rel='noopener noreferrer'> <img src='/Asset/Icon/git.svg' alt=''/></a>
                            </div> */}
                    <div className='for'>
                       <div className='cont'>
                           <h1>Contact Me</h1>
                           <form>
                               <div className='input'>
                                    <input type='text' placeholder='Full Name' />
                               </div>
                               <div className='input'>
                                    <input type='email' placeholder='Email-Address' required/>
                               </div>
                               <div className='input'>
                                    <input type='number' placeholder='Phone Number' />
                               </div>
                               <div className='text'>
                                    <textarea placeholder='Write something to us.....'></textarea>
                               </div>
                               <div className='sub'>
                                    <input type='submit' />
                               </div>
                           </form>
                       </div>
                    </div> 
                </div>
            </Contacts>
        )
    }
}

export default Form
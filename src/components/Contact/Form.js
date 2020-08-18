import React from 'react'

import {Contacts} from './styled'


class Form extends React.Component {

    render() {
        return (
            <Contacts>
                <div className='contact'>
                    <div className='container'>
                        <div className='contactinfo'>
                            <div>
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
                    
                    <div className='social'>
                                <a href='https://twitter.com/Munachiiso?s=09' target='_blank' rel='noopener noreferrer'> <img src='/Asset/Icon/twitter.svg' alt=''/></a>
                                <a href='https://linkedin.com/in/munachiso' target='_blank'  rel='noopener noreferrer'> <img src='/Asset/Icon/link.svg' alt=''/> </a> 
                                <a href='https://www.instagram.com/munachiiso/' target='_blank'  rel='noopener noreferrer'> <img src='/Asset/Icon/insta.svg' alt=''/></a>
                                <a href='https://m.facebook.com/madu.stanley.71' target='_blank'  rel='noopener noreferrer'> <img src='/Asset/Icon/facebook.svg' alt=''/></a>
                                <a href='https://github.com/pro-munachi' target='_blank'  rel='noopener noreferrer'> <img src='/Asset/Icon/git.svg' alt=''/></a>
                            </div>
                    <div className='for'>
                        <div className='container'>
                            <h2>Contact Me</h2>
                            <div className='row100'>
                                <div className='col'>
                                    <div className='inputBox'>
                                        <input type='text' name='' required='required'/>
                                        <span className='text'>First Name</span>
                                        <span className='line'></span>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='inputBox'>
                                        <input type='text' name='' required='required'/>
                                        <span className='text'>Last Name</span>
                                        <span className='line'></span>
                                    </div>
                                </div>
                            </div>
                            <div className='row100'>
                                <div className='col'>
                                    <div className='inputBox'>
                                        <input type='Email' name='' required='required'/>
                                        <span className='text'>Email</span>
                                        <span className='line'></span>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='inputBox'>
                                        <input type='number' name='' required='required'/>
                                        <span className='text'>Phone</span>
                                        <span className='line'></span>
                                    </div>
                                </div>
                            </div>
                            <div className='row100'>
                                <div className='col'>
                                    <div className='inputBox textarea'>
                                        <textarea required='required'></textarea>
                                        <span className='text'>Type Your Message Here</span>
                                        <span className='line'></span>
                                    </div>
                                </div>
                            </div>
                            <div className='row100'>
                                <div className='col'>
                                    <input type='submit' value='send' />
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </Contacts>
        )
    }
}

export default Form
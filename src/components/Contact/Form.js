import React from 'react'

import {Contacts} from './styled'


class Form extends React.Component {

    render() {
        return (
            <Contacts>
                <div className='contact'>
                    <div className='head'>
                        <h1>CONTACT<span>.</span></h1>
                        <h2>For any enquiries, or just to say hello, get in touch and contact me.</h2>
                    </div>
                    <div className='container'>
                        <div className='back'>
                            <form>
                                <div>
                                    <h2>Send a Message</h2>
                                </div>
                                <div className='input'>
                                    <div className='name'>
                                        <div className='first'>
                                            <input type='text' />
                                            <span className='text'>First Name</span>
                                            <span className='line'></span>
                                        </div>
                                        <div className='last'>
                                            <input type='text' />
                                            <span className='text'>Last Name</span>
                                            <span className='line'></span>
                                        </div>
                                    </div>
                                    <div className='mobile'>
                                        <div className='email'>
                                            <input type='email' />
                                            <span className='text'>Email</span>
                                            <span className='line'></span>
                                        </div>
                                        <div className='phone'>
                                            <input type='text' />
                                            <span className='text'>Phone Number</span>
                                            <span className='line'></span>
                                        </div>
                                    </div>
                                    <div>
                                        <textarea></textarea>
                                        <span className='text'>Write Your Message Here</span>
                                        <span className='line'></span>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className='side'>
                            <div>
                                <h2>Contact Info</h2>
                            </div>
                            <div className='info'>
                                <div className='location'>
                                    <img alt='' src='/Asset/Icon/location.svg' /><br />
                                    <p>no 2 Onyeagorom st, Akwakuma, Imo State, Nigeria</p>
                                </div>
                                <div className='mail'>
                                    <img alt='' src='/Asset/Icon/mail.svg' />
                                    <p>Madustanley1@gmail.com</p>
                                </div>
                                <div className='mobile'>
                                    <img alt='' src='/Asset/Icon/phone.svg' />
                                    <p>+234-8165-9987-08</p>
                                </div>
                            </div><br /><br />
                            <div>
                                <a href='https://twitter.com/Munachiiso?s=09' target='_blank' rel='noopener noreferrer'> <img src='/Asset/Icon/twitter.svg' alt=''/></a>
                                <a href='https://linkedin.com/in/munachiso' target='_blank'  rel='noopener noreferrer'> <img src='/Asset/Icon/link.svg' alt=''/> </a> 
                                <a href='https://www.instagram.com/munachiiso/' target='_blank'  rel='noopener noreferrer'> <img src='/Asset/Icon/insta.svg' alt=''/></a>
                                <a href='https://m.facebook.com/madu.stanley.71' target='_blank'  rel='noopener noreferrer'> <img src='/Asset/Icon/facebook.svg' alt=''/></a>
                                <a href='https://github.com/pro-munachi' target='_blank'  rel='noopener noreferrer'> <img src='/Asset/Icon/git.svg' alt=''/></a>
                            </div>
                        </div>
                    </div>
                    {/*
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
                    </div> */}
                </div>
            </Contacts>
        )
    }
}

export default Form
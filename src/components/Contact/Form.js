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
                    <div className='flex'>
                        <div className='word'>
                            
                            <div className='email'>
                                <div>
                                    <strong>Phone</strong>
                                    <p>+234 8165 9987 08</p>
                                </div>
                                <div>
                                    <strong>Email</strong>
                                    <p>Madustanley1@gmail.com</p>
                                </div>
                            </div>
                            
                            <div className='add'>
                                <div>
                                    <strong>Address</strong>
                                    <p>No 2, Onyeagorom street, Akwakuma, Owerri, Imo State, Nigeria </p>
                                </div>
                                <div>
                                    <div><strong>Contact Me</strong></div>
                                    <div>
                                        <a href='https://twitter.com/Munachiiso?s=09' target='_blank' rel='noopener noreferrer'> <img src='/Asset/Icon/twitter.png' alt=''/></a>
                                        <a href='https://linkedin.com/in/munachiso' target='_blank'  rel='noopener noreferrer'> <img src='/Asset/Icon/link.png' alt=''/> </a> 
                                        <a href='https://www.instagram.com/munachiiso/' target='_blank'  rel='noopener noreferrer'> <img src='/Asset/Icon/instagram.png' alt=''/></a>
                                        <a href='https://m.facebook.com/madu.stanley.71' target='_blank'  rel='noopener noreferrer'> <img src='/Asset/Icon/face.png' alt=''/></a>
                                        <a href='https://github.com/pro-munachi' target='_blank'  rel='noopener noreferrer'> <img src='/Asset/Icon/github.png' alt=''/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='for'>
                            <form>
                                <div className='inputbox'>
                                    <input type='text' />
                                    <label>Name</label>
                                </div>
                                <div className='inputbox'>
                                    <input type='Email' />
                                    <label>E-mail</label>
                                </div>
                                <div className='inputbox'>
                                    <input type='text' />
                                    <label>Subject</label>
                                </div>
                                <div className='inputbox'>
                                    <textarea />
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
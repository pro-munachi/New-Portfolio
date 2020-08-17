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
                                            <span>First Name</span>
                                        </div>
                                        <div className='last'>
                                            <input type='text' />
                                            <span>Last Name</span>
                                        </div>
                                    </div>
                                    <div className='name'>
                                        <div className='first'>
                                            <input type='text' />
                                            <span>First Name</span>
                                        </div>
                                        <div className='last'>
                                            <input type='text' />
                                            <span>Last Name</span>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className='side'>

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
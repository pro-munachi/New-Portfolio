import React from 'react'
import GoogleMapReact from 'google-map-react';

import {Contacts} from './styled'

const AnyReactComponent = ({ text }) => <div style={{color: 'blue'}}>{text}</div>;

class Form extends React.Component {

    static defaultProps = {
        center: {
          lat: 5.5255,
          lng: 7.0230
        },
        zoom: 11
      };


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
                            <h2>Contact Me</h2>
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
                                <div className='ad'>
                                    <strong>Address</strong>
                                    <p>No 2, Onyeagorom street, Akwakuma, Owerri, Imo State, Nigeria </p>
                                </div>
                                <div className='soc'>
                                    <div><strong>Social Media</strong></div>
                                    <div>
                                        <a href='https://twitter.com/Munachiiso?s=09' target='_blank' rel='noopener noreferrer'> TW </a>
                                        <a href='https://linkedin.com/in/munachiso' target='_blank'  rel='noopener noreferrer'> LN </a> 
                                        <a href='https://www.instagram.com/munachiiso/' target='_blank'  rel='noopener noreferrer'> IN </a>
                                        <a href='https://m.facebook.com/madu.stanley.71' target='_blank'  rel='noopener noreferrer'> FB </a>
                                        <a href='https://github.com/pro-munachi' target='_blank'  rel='noopener noreferrer'> GH </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='map'>
                            <div style={{ height: '60vh', width: '100%' }}>
                                <GoogleMapReact
                                bootstrapURLKeys={{ key: 'AIzaSyBoO60g9tkKE-G_p3Uhsro_XDU4AdjIM70' }}
                                defaultCenter={this.props.center}
                                defaultZoom={this.props.zoom}
                                >
                                <AnyReactComponent
                                    lat={5.5255}
                                    lng={7.0230}
                                    text="My Marker"
                                />
                                </GoogleMapReact>
                            </div>
                        </div>
                    </div><br />
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
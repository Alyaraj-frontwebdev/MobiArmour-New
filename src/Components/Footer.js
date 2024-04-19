import React, { useState } from 'react'
import { FRONTENDNAME } from '../Constants'
import { useNavigate } from 'react-router-dom';
import logo from '../Assets/logo.png'


export default function Footer() {
    const [state, setState] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const onChnageHandle = (e) => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value
        })
    }
    const navigate = useNavigate();

    return (

        <div class="container-fluid1">
            <section class="footer_container">
                <div className='bigFooter'>
                    <div className='footerLogo'>
                        <a className="navbar-brand text-white" href='/'>
                            <img src={logo} alt="logo" width="35px" />
                        </a>
                        <h4><a href='/'>MobiArmour</a></h4>
                    </div>
                    <div className='impLinks'>
                        <div className='features'>
                            <h3>Features</h3>
                            <a href="#WebsiteScanning">Website Scanning</a><br />
                            <a href="#QrScanning">QR Scanning</a><br />
                            <a href="#OtpSecurity">OTP Security</a><br />
                            <a href="#WifiSecurity">WiFi Security</a><br />
                            <a href="#ExpSecurity">Expert Security</a><br />
                            <a href="#AppAnalysis">App Analysis</a><br />
                            <a href="#LeakedPasswords">Leaked Passwords</a><br />
                            <a href="#OnlineAccounts">Online Accounts</a>
                        </div>
                        <div className='socials'>
                            <h3>Socials</h3>
                            <a href='https://m.facebook.com/61554165416709/' target='_blank'>Facebook</a><br />
                            <a href='https://www.instagram.com/mobi.armour/' target='_blank'>Instagram</a><br />
                            <a href='https://wa.me/918851037358' target='_blank'>WhatsApp</a>
                        </div>
                        <div className='download'>
                            <h3>Download</h3>
                            <a href='https://apps.apple.com/kz/app/mobiarmour/id6469784101' target='_blank'>Apple App Store</a><br />
                            <a href='https://play.google.com/store/apps/details?id=com.prosthetik.supernova&pcampaignid=web_share' target='_blank'>Google Play Store</a>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="last-footer">
                        <p> © 2023, Mobiarmour All Right Reserved | <span role="button" data-bs-toggle="modal" data-bs-target="#exampleModal"> Contact Us </span>| <span > <a className='text-light text-decoration-none' href="https://armour.mobi/privacy.html">Privacy Policy</a>  </span>
                        </p>
                    </div>
                </div>
                <div className="socialLinksIcons">
                    <a href='https://m.facebook.com/61554165416709/' target='_blank'><span><i class="bi bi-facebook"></i></span></a>
                    <a href='https://www.instagram.com/mobi.armour/' target='_blank'><span><i class="bi bi-instagram"></i></span></a>
                    <a href='https://wa.me/918851037358' target='_blank'><span><i class="bi bi-whatsapp"></i></span></a>
                </div>

                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form className="form-container">
                                    <div className="form-group">
                                        <label htmlFor="fname"> Full Name* </label>
                                        <input type="text" name="name" id="fname" onChange={onChnageHandle} placeholder="Full Name" className="form-control" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email"> Email* </label>
                                        <input type="text" id="email" name="email" onChange={onChnageHandle} placeholder="Email" className="form-control" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone"> Phone* </label>
                                        <input type="text" name="phone" id="phone" onChange={onChnageHandle} placeholder="Phone" className="form-control" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message"> Message* </label>
                                        <textarea name="message" id="message" onChange={onChnageHandle} placeholder="Message" className="form-control" required />
                                    </div>

                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
                                    <a class="nav-link" href={`mailto:prakhar@ubarri.com ?subject=Support ${state.phone} &body=Hi my name is ${state.name} and i am facing issues:%0D ${state.message}.%0DThanks &cc=vishal@ubarri.com`}>
                                        Submit
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

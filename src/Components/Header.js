import React, { useState } from 'react'
import logo from '../Assets/logo.png'
import AppStoreLogo from '../Assets/appStore.webp'
import GooglePlayLogo from '../Assets/playStoreLogo.webp'
import { useNavigate } from 'react-router-dom';
import { FRONTENDNAME } from '../Constants';
import "../index.css";

export default function Header() {
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
    // const OnSubmitHandle = (e) => {
    //     e.preventDefault();
    // }
    const [showModal, setShowModal] = useState(false);
    const link = showModal ? "#" : (
        navigator.userAgent.includes("Android") ?
            "https://play.google.com/store/apps/details?id=com.prosthetik.supernova&pcampaignid=web_share" :
            "https://apps.apple.com/kz/app/mobiarmour/id6469784101"
    );
    const onClickModal = () =>
        setShowModal(showModal ? false : !/android|iphone|kindle|ipad/i.test(navigator.userAgent));

    function CloseModal() {
        setShowModal(showModal ? false : !/android|iphone|kindle|ipad/i.test(navigator.userAgent));
    }

    function DownloadModal() {
        return (
            <div id="downloadModal" class="modal">
                <span className="close" onClick={CloseModal} >&times;</span>
                <div className="modal-container">
                    <h1>Download MobiArmour now!</h1>
                    <div className='downloadLinks'>
                        <a href="https://apps.apple.com/kz/app/mobiarmour/id6469784101" target='_blank'>
                            <img src={AppStoreLogo} alt="App Store Logo"></img>
                        </a><br /><br />
                        <a href="https://play.google.com/store/apps/details?id=com.prosthetik.supernova&pcampaignid=web_share" target='_blank'>
                            <img src={GooglePlayLogo} alt="Google Play Logo"></img>
                        </a>
                    </div>
                </div>
            </div>
        )
    }

    return (<>
        {showModal ? <DownloadModal /> : ""}
        <nav className="navbar navbar-expand-lg bg-dark nonav-480">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="true" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <a className="navbar-brand text-white" onClick={() => navigate(FRONTENDNAME + '/')}>
                    <img src={logo} alt="logo" width="50px" />
                </a>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item" onClick={() => navigate(FRONTENDNAME + '/home')}>
                            <a className="nav-link text-white a-border" aria-current="page ">Home</a>
                        </li>
                        <li className="nav-item" onClick={() => navigate(FRONTENDNAME + '/about')}><a className="nav-link text-white a-border">About</a></li>
                        <li className="nav-item" data-bs-toggle="modal" data-bs-target="#exampleModal"><a className="nav-link text-white a-border" > Support </a></li>
                        
                    </ul>
                    <button className="btn btn-outline-success button_bg nav-link" type="submit" onClick={onClickModal}><a className='text-light text-decoration-none' href={link}>Download App now</a></button>
                </div>
            </div>
        </nav>
        <nav className="navbar navbar-expand-lg bg-dark  nav-480">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="true" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <a className="navbar-brand text-white lf-70" onClick={() => navigate(FRONTENDNAME + '/')}>
                    <img src={logo} alt="logo" width="50px" />
                </a>
                <button className="btn btn-outline-success button_bg" type="submit" ><a className='text-light text-decoration-none' href={link}>Download App</a></button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item" onClick={() => navigate(FRONTENDNAME + '/home')}>
                            <a className="nav-link text-white a-border" aria-current="page ">Home</a>
                        </li>
                        <li className="nav-item" onClick={() => navigate(FRONTENDNAME + '/about')}><a className="nav-link text-white a-border">About</a></li>
                        <li className="nav-item" data-bs-toggle="modal" data-bs-target="#exampleModal"><a className="nav-link text-white a-border" > Support </a></li>
                    </ul>
                </div>
            </div>
        </nav>




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
                            <a class="nav-link" href={`mailto:support@armour.mobi ?subject=Support ${state.phone} &body=Hi my name is ${state.name} and i am facing issues:%0D ${state.message}.%0DThanks &cc=vishal@armour.mobi`}>
                                Submit
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

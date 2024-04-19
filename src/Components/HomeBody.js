import React from 'react'
import Mob from '../Assets/Mob.png'
import qr from '../Assets/qr.png'
import ImgCard from './ImgCard.js'
import Testimonials from './Testimonials'
import Features from './Features.js'
import Counter from './Counter'
export default function HomeBody() {
    return (
        <div className="container-fluid home_top_box_container">
            <div className="MainContainer">
                <section className="d-flex justify-content-between align-items-center section_container1">
                    <div className="mobiarmour_details">
                        <div>
                            <h3> An Indigenous and Sovereign Military-Grade Digital Security App</h3>
                            <p> MobiArmour is first of its kind app which offers 360° Mobile device protection. This protects you against banking/financial fraud, social media crimes, abusive app/games, and mobile hacks. It proactively protects the Users from most of the criminal attack vectors including 75+ Social Engineering tactics.</p>
                        </div>

                        <div className='btnQr'>
                            <a className='text-light text-decoration-none btn getbtnlinkSMS btn-outline-secondary' href="mailto:support@armour.mobi ?subject=Get Voucher Code &body=Hi MobiArmour,%0DPlease generate a voucher code for me.%0DThanks &cc=vishal@armour.mobi">Get Free Voucher Code </a>
                            <div className='scanQr'>
                                <p className="Qr_code mob_480"> Or scan the QR code </p>
                                <img src={qr} alt="qrCode" className="mob_480" width="200px" />
                            </div>
                        </div>
                        <div className="app_button_container desk_top d-flex justify-content-between mb-5">
                            <a target="_blank"><img src="/static/media/appleLogo.e6791731ff16e780c464.e6791731ff16e780c4649bcadb4274b3.svg" alt="appstore" width="150px" /></a><a href="https://play.google.com/store/apps/details?id=com.prosthetik.supernova&pcampaignid=web_share" target="_blank">
                                <img src="/static/media/googlePlayLogo.078e865f3c86b4c4c000.078e865f3c86b4c4c000020679f3fced.svg" alt="playstore" width="150px" /></a>
                        </div>
                    </div>
                    <div className="mobiarmour_img d-flex align-items-center justify-content-center">
                        <img src={Mob} alt="user" />
                    </div>
                </section>
                <ImgCard />
                <Features />
                <Testimonials />
                {/* <Counter /> */}
            </div>
        </div>
    )
}

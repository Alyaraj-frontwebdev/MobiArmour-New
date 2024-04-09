import React from 'react'
import Mob from '../Assets/Mob.png'
import qr from '../Assets/qr.png'
import ImgCard from './ImgCard.js'
import Testimonials from './Testimonials'
import Counter from './Counter'
export default function HomeBody() {
    return (
    <div className="container-fluid home_top_box_container">
        <div className="container">
            <section className="d-flex justify-content-between align-items-center section_container1">
                <div className="mobiarmour_details">
                    <h3> An Indigenous and Sovereign Military-Grade Digital Security App</h3>
                    <p> MobiArmour is first of its kind app which offers 360° Mobile device protection. This protects you against banking/financial fraud, social media crimes, abusive app/games, and mobile hacks. It proactively protects the Users from most of the criminal attack vectors including 75+ Social Engineering tactics.</p>
                    <form className="d-flex justify-content-between form_container flex-wrap">
                        {/* <div className="input-group">
                            <button className="btn btn-outline-secondary" id="button-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-open" viewBox="0 0 16 16"><path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882l-6-3.2ZM15 7.383l-4.778 2.867L15 13.117V7.383Zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2Z"></path></svg></button>
                            <input type="email" className="form-control" placeholder="Enter email*" aria-label="Example text with button addon" aria-describedby="button-addon1" required="" />
                        </div> */}
                        <a className='text-light text-decoration-none btn getbtnlinkSMS btn-outline-secondary' href="mailto:support@armour.mobi ?subject=Get Voucher Code &body=Hi MobiArmour,%0DPlease generate a voucher code for me.%0DThanks &cc=vishal@ubarri.com">Get Free Voucher Code </a> 
                    
                    </form>
                    <p className="Qr_code mob_480"> Or scan the QR code </p>
                    <img src={qr} alt="qrCode" className="mob_480" width="200px" />
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
  <Testimonials />
  {/* <Counter /> */}
        </div>
    </div>
    )
}

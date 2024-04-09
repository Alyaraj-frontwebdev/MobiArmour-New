import React from 'react'
import Avatar from '../Assets/userAvatar.png'
import StarRatingComponent from 'react-star-rating-component';
export default function Testimonials() {
    return (
        <section>

            <div className="testimonial_container">
                <div className="about_section_container">
                    <h3> Read, What Our Top Notch Cyber Cop<br className="mob_480" /> Says About MobiArmour App</h3>
                    <p> Read the reviews that we regularly receive from users of our MobiArmour App.<br className="mob_480" />We are proud to have created a product that gives a vivid impression.</p>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                    <div className="carousel_container">
                        <div id="carouselExample" className="carousel slide">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="">
                                        <div className="user_img d-flex align-items-center justify-content-center">
                                            <img src={Avatar} className="d-block" alt="..." />
                                        </div>
                                           <StarRatingComponent
                                                name="rate2"
                                                editing={false}
                                                renderStarIcon={() => <span><i class="fa fa-star"></i></span>}
                                                starCount={5}
                                                value={5}
                                            />
                                        <p> Rich and insightful report. OTP security feature is awesome.</p>
                                        <p><strong>Professor Triveni Singh</strong></p>
                                    </div>
                                </div>
                                <div className="carousel-item ">
                                    <div className="">
                                        <div className="user_img d-flex align-items-center justify-content-center">
                                            <img src={Avatar} className="d-block" alt="..." />
                                        </div>
                                        <StarRatingComponent
                                                name="rate2"
                                                editing={false}
                                                renderStarIcon={() => <span><i class="fa fa-star"></i></span>}
                                                starCount={5}
                                                value={5}
                                            />
                                        <p> This App could help in preventing Cyber Crimes - Kudos Team!</p>
                                        <p><strong>Yogesh Tomar -Crime Branch Delhi Police</strong></p>
                                    </div>
                                </div>
                                <div className="carousel-item ">
                                    <div className="">
                                        <div className="user_img d-flex align-items-center justify-content-center">
                                            <img src={Avatar} className="d-block" alt="..." />
                                        </div>
                                        <StarRatingComponent
                                                name="rate2"
                                                editing={false}
                                                renderStarIcon={() => <span><i class="fa fa-star"></i></span>}
                                                starCount={5}
                                                value={5}
                                            />
                                        <p>Excellent app for personal security</p>
                                        <p><strong>Amit Dubey-Radio Host RedFM 'Hidden Files'|Cyber Crime Investigator |TedX Speaker</strong></p>
                                    </div>
                                </div>
                                <div className="carousel-item ">
                                    <div className="">
                                        <div className="user_img d-flex align-items-center justify-content-center">
                                            <img src={Avatar} className="d-block" alt="..." />
                                        </div>
                                        <StarRatingComponent
                                                name="rate2"
                                                editing={false}
                                                renderStarIcon={() => <span><i class="fa fa-star"></i></span>}
                                                starCount={5}
                                                value={5}
                                            />
                                        <p>Top notch security at ur finger tips. This app can help people secure themselves.</p>
                                        <p><strong>A.C.P -Crime Branch Delhi Police</strong></p>
                                    </div>
                                </div>
                                <div className="carousel-item ">
                                    <div className="">
                                        <div className="user_img d-flex align-items-center justify-content-center">
                                            <img src={Avatar} className="d-block" alt="..." />
                                        </div>
                                        <StarRatingComponent
                                                name="rate2"
                                                editing={false}
                                                renderStarIcon={() => <span><i class="fa fa-star"></i></span>}
                                                starCount={5}
                                                value={5}
                                            />
                                        <p>Excellent app I have ever seen👍</p>
                                        <p><strong>Sonu Jaiswal</strong></p>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true">
                                </span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

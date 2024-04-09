import React, { useState } from 'react'
import { FRONTENDNAME } from '../Constants'
import { useNavigate } from 'react-router-dom';


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
                <div class="container">
                    <div class="d-flex align-items-center justify-content-center">
                        <p> © 2023, Mobiarmour All Right Reserved | <span role="button" data-bs-toggle="modal" data-bs-target="#exampleModal"> Contact Us </span>| <span > <a className='text-light text-decoration-none' href="https://armour.mobi/privacy.html">Privacy Policy</a>  </span>
                        </p>
                    </div>
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

import React from 'react'
import Layout from "../components/layout"
import { Link } from 'gatsby'
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'

import Infoblock from "../components/Reuseable/Infoblock"
export default function contact() {
    return (<Layout>
<div className="card text-center bg-theme">
        <div className="card-header card text-center text-info">
            Contact Us
        </div>
        <div className="card-body">
            <h5 className="card-title text-warning">How to Reach Us</h5>
            <p className="card-text text-white">Give us a call on 010 111 22 33 or WhatsApp us on 0797911505 between 8 am and 10 pm.</p>
            <FaPhoneAlt className="fa-phone mr-2 text-white" /><a className="text-white fa-bold"> 010 111 22 33</a>
            <br />
            <FaWhatsapp className="fa-whatsapp mr-2 text-white" /><a className="text-white fa-bold">+254797911505</a>
     <br />
<br/>
            
            </div>
    
            
            
            
        </div><div className="card text-center bg-theme">
            <div className="card-header card text-center text-info">
            </div>
            <div className="card-body">
                <h5 className="card-title text-warning"></h5>
                <p className="card-text text-white"></p>
    
                <br />
                <br />

            </div>




        </div>
        <div className="card text-center bg-theme">
            <div className="card-header card text-center text-info">
                
            </div>
            <div className="card-body">
                <h5 className="card-title text-warning"></h5>
                <p className="card-text text-white"></p>
                
                <br />
                
                <br />
                <br />

            </div>
<div className="card text-center bg-theme">
            <div className="card-header card text-center text-info">
                
            </div>
            <div className="card-body">
                <h5 className="card-title text-warning"></h5>
                <p className="card-text text-white"></p>
                
                <br />
                
                <br />
                <br />

            </div>




        </div></div>
    </Layout>
    )
}

import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/layout"

import Infoblock from "../components/Reuseable/Infoblock"
export default function faq() {
    return (
<Layout>
        
        <div className="card text-center bg-theme ">
            <div className="card-header card text-center text-info">
                Frequently Asked Questions
            </div>
            <div className="card-body">
                <h5 className="card-title text-warning">1. What are your hours of operation?</h5>
                <p className="card-text text-white">Our website is open 24 hours a day, 7 days a week.Contact Centre support is available from Monday to Sunday, 08:00 am to 10:00 pm. Deliveries will be done for all orders made between 8.00 am to 8.00 pm every day of the week.</p>
            
            </div>
            <div className="card-body">
                <h5 className="card-title text-warning">2. Why do the pills I ordered from E-Pharm look different from those I get from my local pharamcy?</h5>
                <p className="card-text text-white">According to the trademark laws, generic pill is not allowed to look exactly like its brand-name version. The pills (generic version) you received normally will look different from their branded counterparts, even though both contain the same active ingredient(s) and work in the same way exactly.</p>

            </div>

            <div className="card-body">
                <h5 className="card-title text-warning">3. Is it secure to use Generic Drugs?</h5>
                <p className="card-text text-white">Yes, all our generic drugs are procured from world-renowned manufacturers and thus our generic products meet rigorous specifications and are strictly regulated for security, quality and potency. By law, generic drugs must be bio-equivalent to brand-drug counterparts.</p>

            </div>
            <div className="card-body">
                <h5 className="card-title text-warning">4. How is my order packaged?</h5>
                <p className="card-text text-white">MYDAWA takes the greatest possible care in packaging your order. Your order will be securely packaged in a tamper-proof bag and will be labelled your name to ensure it reaches you securely. The package is discrete and no one gets to see what you have ordered unless you show them.</p>

            </div>
            <div className="card-body">
                <h5 className="card-title text-warning">5. What are standard delivery charges?</h5>
                <p className="card-text text-white">Deliveries within Nairobi County are done free of charge for all orders valued at Kes 2,500 and more as well as all health insurance orders. For orders less than Kes 2,500 a standard delivery charge of Kes 99 applies.

                    For orders in Kenya outside Nairobi Country, the delivery charges will be calculated and displayed on the summary page before you make payment.</p>
            
            </div>
            
            
        </div>

        </Layout>
    )
}

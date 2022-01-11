import * as React from "react"
import { graphql } from "gatsby"


import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/Reuseable/HeroSection"
import Infoblock from "../components/Reuseable/Infoblock"


export default function IndexPage({data}) {


return (
  <Layout>
    <Seo title="E-Pharm" />
    <Infoblock heading="About E-Pharm"   body="With E-Pharm, you have access to thousands of original quality medication, health, wellness, and personal care products. Access the E-Pharm app from your phone, tablet, or any other internet-enabled Android device. Search for the products you need. Pay using a convenient payment method and then add your location. Sit back and relax as we deliver the products you need to live well. We have a qualified team of pharmacists, pharmaceutical technologists, and other professionals ready to serve you. Enjoy convenience and peace of mind like never before. You are assured that your order will be delivered on time and in tip-top condition. If you have a question regarding your order, our dedicated customer care representatives are happy to help." />


  <HeroSection image={data.img.childImageSharp.fluid} heroClass="hero-background" title="E-Pharm" subtitle="Giving You More Value,Conveniently"/>
    <Infoblock heading="What We Do" body="E-Pharm is an online pharmacy application supported by android devices that allows people to purchase medicine and wellness products conveniently. E-Pharm is founded on the premise of living well, staying well, and getting well to ensure that every person can get quality, secure and affordable medicine and wellness products online. The long tiring trips of moving from chemist to chemist in search of prescription medicine is over; no more waiting in line!"/>
  </Layout>
)}

export const query = graphql`
{
img:file(relativePath: {eq : "about.jpg"}){
childImageSharp{
fluid{
...GatsbyImageSharpFluid_tracedSVG
}

}
}
}`


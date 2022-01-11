import React from 'react'
import BackgroundImage from 'gatsby-background-image'

export default function HeroSection({image,heroClass,title,subtitle}) {
    return (
<BackgroundImage className={heroClass} fluid={image}>
            <h1 className="text-white  text-center display-4 fa-bold">{title}</h1>
<div>
                <h4 className="text-info text-center fa-bold">{subtitle}</h4></div>
</BackgroundImage>       
    )
}

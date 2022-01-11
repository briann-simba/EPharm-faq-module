import React,{useState,useRef} from 'react'
import { Link } from 'gatsby'
import Heading from './Heading'

export default function Infoblock({heading,body}) {
    


    return (
        <section className="bg-theme py-4">
            <div className="container">
<div className="row">
                    <div className="panel panel-default ">
                        <div className="panel-heading "><h3 className="mr-5 ml-5 text-danger">{heading}</h3></div>

                <div className="panel-body text-white">{body} </div>
    </div>
            

</div>
</div>
       </section>    
    )
}

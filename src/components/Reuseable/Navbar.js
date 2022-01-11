import React, { Component } from 'react'
import { Link } from 'gatsby'

import logo from '../../images/logo-red.png'
import "../../components/layout.css"
export default class Navbar extends Component {

    state={
      navbarState:false,
      navbarClass:"collapse navbar-collapse",
        menus:[
            {
                id: 1,
                text: "About",
                url: "/"
            }
            ,
            {
                id: 2,
                text: "FAQ",
                url: "/faq"
            },
            {
                id: 4,
                text: "Contact",
                url: "/contact"
            }]}

    myToggle=()=>{ (this.state.navbarState?this.setState({
        navbarState: false,
        navbarClass: "collapse navbar-collapse show"
    }) : this.setState({
        navbarState: true,
        navbarClass: "collapse navbar-collapse"
    }))
 }


    render() {

        return (
            <nav className="navbar navbar-expand-sm bg-theme text-white">
                <Link to="/" className="navbar-brand ml-5"><img src={logo} alt="logo goes here" width="40px" /></Link>
                
                 <button className="navbar-toggler" type="button" onClick={this.myToggle}><span className="text-white">menu</span></button>
                <div className={this.state.navbarClass}>
               <ul className="navbar-nav ml-auto mr-5">
                  {this.state.menus.map(menu=>{ return <li key={menu.id} className="navbar-item">
                      <Link to={menu.url} className="nav-link text-white fa-4x">{menu.text}</Link></li>})}
                       
                  </ul></div>
            </nav>
        )
    }
}

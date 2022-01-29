import { useState } from "react"
import Component from "./Component.svg"
import "./nav.css"
const NavBar = () => {
    const [isOpen , setIsOpen]=useState(false)
    return (
        <div className="NavBar">
            <div className="logo">
                <img src={Component} alt="logo" />
            </div>
            <div className={`nav-links-container ${isOpen ? '' : "close"}`}>
                <div className="links">
                    <a>الرئيسية </a>
                    <a>الأسعار </a>
                    <a>كلم المبيعات  </a>
                </div>

                <div className="links">
                    <a>تتبع شحنتك  </a>
                    <a> تسجيل الدخول</a>
                    <a>ENG</a>

                </div>
            </div>
                <div className="toggle" onClick={()=>{setIsOpen(!isOpen);
                console.log(isOpen)}}>
                    <div className="bar"></div>
                </div>
        </div>
    )
}
export default NavBar
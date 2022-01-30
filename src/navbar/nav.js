import { useEffect, useState } from "react"
import Component from "./Component.svg"
import { useTranslation } from "react-i18next";

import "./nav.css"
const NavBar = () => {
    const [isOpen , setIsOpen]=useState(false)
    const {t , i18n} = useTranslation()
   const setlanguage = ()=>{
        if( localStorage.getItem("i18nextLng")==="en-US" ){
            i18n.changeLanguage('ar')
        }
        else {
            i18n.changeLanguage('en-US')
        }
       
   }
    return (
        <div className={`NavBar ${localStorage.getItem("i18nextLng")==="en-US" ? 'en':''}`}>
            <div className="logo">
                {/* <img src={Component} alt="logo" /> */}
            </div>
            <div className={`nav-links-container ${isOpen ? '' : "close"}`}>
                <div className="links">
                    <a>{t("header.home")} </a>
                    <a>{t("header.pricing")} </a>
                    <a>{t("header.call")}</a>
                </div>

                <div className="links">
                    <a>{t("header.track")}</a>
                    <a> {t("header.login")}</a>
                    {
                        localStorage.getItem("i18nextLng")==="en-US" 
                        ? <a onClick={setlanguage}>عربي</a> 
                        : <a onClick={setlanguage}> ENG </a> 
                    }
                    

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
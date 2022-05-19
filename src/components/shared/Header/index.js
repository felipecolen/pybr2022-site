import React from 'react'
import { Link } from '@reach/router';
import LogoImage from "@images/logo.svg"
import LogoImageMobile from "@images/logo_mobile.svg"
import LanguageSwitch from "@components/shared/LanguageSwitch";
import NavBar from "@components/shared/NavBar";
import './style.scss'
import { window, document } from "browser-monads";

const Header = () => {
  const links = [
    { href: "/", label: "Home" },
    { href: "/cdc", label: "Código de Conduta" }  
  ]

  return (
    <header id="header">
      <NavBar />
      {/*<div className="header-inner container">

         <div className="logo-container">
          <Link to="/">
            ​<picture>
              <source srcset={LogoImageMobile} media="(max-width: 768px)" type="image/svg+xml"/>
              <img className="logo" src={LogoImage} alt="Logo da Python Brasil 2022"/>
            </picture>
          </Link>
        </div>
        <nav className="links">
          <ul>
            {links.map(({href, label}) => (
              <li className={href === window.location.pathname ? 'active' : ''}>
                <Link to={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="languages">
          <LanguageSwitch />
        </nav> 
      </div> */}
    </header>
  )
}

export default Header
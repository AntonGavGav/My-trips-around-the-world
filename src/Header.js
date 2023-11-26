import React from 'react'

import {BsGithub, BsInstagram, BsTelegram, BsSpotify} from "react-icons/bs"
import { Link } from 'react-router-dom'

import './css/Header_style.css'
import logo from "./images/logo.png"

const Header = () => {

  return (
    <div className={'header sticky'} >
      <img className='logo' src ={logo} />
        <nav>
          <ul>
            <Link to = "https://github.com/AntonGavGav"><BsGithub/></Link>
            <Link to = "https://www.instagram.com/eventfullynx915/"><BsInstagram /></Link>
            <Link to = "https://web.archive.org/web/20210426233039/https://pnrtscr.com/4ci90a"><BsTelegram /></Link>
            <Link to = "https://open.spotify.com/user/31f7y4q5fiytivggmjyhpcenviqq?si=22f169855a3349e9"><BsSpotify /></Link>
          </ul>
        </nav>
    </div>
  )
}

export default Header
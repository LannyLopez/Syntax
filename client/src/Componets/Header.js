import React from 'react'
import "../assets/Header.css"
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';
import {Link, useHistory} from "react-router-dom"
// import { ArrowBackIosNewSharp } from "@mui/icons-material"

function Header() {
  // const history = useHistory();
  
  return (
    <div className='header'>
      <Link to="">
      <IconButton>
        <PersonIcon fontSize='large' className='header__icon' />
      </IconButton>
      </Link>
      <Link to="/swipe">
      <img className='header__logo'
        src='https://www.downloadclipart.net/medium/curly-brackets-png-picture.png' />
        </Link>

      <Link to="/chat">
      <IconButton>
        <ForumIcon fontSize='large' className='header__icon' />
      </IconButton>
      </Link>
    </div>

  )
}

export default Header
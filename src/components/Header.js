import { Link, Typography } from '@mui/material'
import React from 'react'
import './Header.css'
import head from '../images/daffa-head-stroke.png'
import { isMobile } from 'react-device-detect'

export default function Header() {
  return (
    <div className={isMobile ? 'header container-mobile' : 'header container'} >
        <div className='' style={{ paddingTop: 40, paddingRight: 32, paddingLeft: 32 }}>
            <Typography variant='h6' className='text'>Hi, my name is</Typography>
            <Typography variant='h1' fontStyle={{ fontWeight: 'bold', textDecoration: 'underline' }} className='text'>Daffa</Typography>
        </div>

        <img src={head} className="swingimage" style={{ width: isMobile ? '40vw' : '25vw' }} alt="daffa head" />
        
        <Typography align={isMobile ? 'center' : 'justify'} lineHeight={1.8} className='text' style={{ paddingRight: 32, paddingLeft: 32, paddingBottom: 64 }}>I'm a software engineer currently pursuing my Bachelor of Engineering degree at University of Indonesia. My skillset includes Flutter <Link href='#' color="inherit" className='skill' >Mobile App Development</Link>, React <Link href='#' color="inherit" className='skill' >Web Development</Link>, and <Link href='#' color="inherit" className='skill' >Internet of Things</Link> Applications!</Typography>
    </div>
  )
}
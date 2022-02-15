import { Typography } from '@mui/material'
import React from 'react'
import { isMobile } from 'react-device-detect'
import './Expertise.css'
import TechStack from './TechStack'

export default function () {
  return (
    <div className='padding'>
        <Typography align='center' variant={ isMobile ? "h4" : 'h3'}>My Expertise</Typography>
        <Typography 
            align='center' 
            style={{ paddingRight: '13vw', paddingLeft: '13vw', paddingBottom: '5vh', paddingTop: '5vh' }}>
            I've been engaged in the technology field for quite a while, several personal and collaborative projects, hackathons, and an internship. You can find out more about my techstacks below.
        </Typography>
        <TechStack/>
    </div>
  )
}

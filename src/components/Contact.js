import { Typography } from '@mui/material'
import React from 'react'
import './Expertise.css'
import './Contact.css'
import ContactButton from './ContactButton'
import { Box } from '@mui/system'
import { isMobile } from 'react-device-detect'

export default function () {
  return (
    <div className='padding contact-me'>
      <Typography align='center' variant={ isMobile ? "h4" : 'h3'}>Contacts📞</Typography>
      <Box paddingBottom={isMobile ? "10vw" : "3vw"} />
      <ContactButton text="Email" isPrimary={true} onPress={`mailto:daffafakhrizaman@gmail.com`}/>
      
      <a href='https://www.linkedin.com/in/daffa-fakhrizaman/' style={{ textDecoration: "none" }}>
        <ContactButton text="LinkedIn" isPrimary={false} />
      </a>
      
    </div>
    )
}
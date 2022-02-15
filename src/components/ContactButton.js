import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import './Expertise.css'
import './Contact.css'
import { isMobile } from 'react-device-detect'

export default function ContactButton({ text, isPrimary, onPress }) {
    return (
        <Box paddingBottom={"2.5vw"}>
            <Button 
                style={
                    isPrimary ? {
                        minWidth: isMobile ? "80vw" : "40vw",
                        borderRadius: 35,
                        backgroundColor: "#2E3B55",
                        padding: "18px 36px",
                        fontSize: "18px",
                        color: "#FFFFFF",
                    } : {
                        minWidth: isMobile ? "80vw" : "40vw",
                        borderRadius: 35,
                        padding: "18px 36px",
                        fontSize: "18px",
                        color: "#2E3B55",
                        borderColor: "#2E3B55",
                        
                    }
                }
                variant={ isPrimary ? "contained" : "outlined" }
                fullWidth
                
                href={onPress}
            >
                {text}
            </Button>
        </Box>
    )
}
import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { isMobile } from 'react-device-detect'
import TechStackCard from './TechStackCard'

export default function TechStack() {

    const techStacks = [
        {
            image: '/images/mobile-dev.png',
            title: 'Mobile Development',
            details: 'With more people in this world having access to mobile phones, it only makes sense that we adapt with this disruption. I am able to help you in launching your first mobile app. The technology used is be the Flutter SDK',
            id: 1
        },
        {
            image: '/images/website-dev.png',
            title: 'Web Development',
            details: 'A landing page has almost become a must for every business be it big or small. What better way to showcase your products and reach your audience than a website to represent your brand!',
            id: 2
        },
        {
            image: '/images/iot-app.png',
            title: 'Internet of Things App',
            details: 'I have been making IoT applications for fun and for my university projects. My tools include Arduino, ESP32, and various I/O modules. My prefered database would be Firebase and SQLite for light IoT apps.',
            id: 3
        },
    ]

    return (
        <div >
            <Grid
                container
                direction={isMobile ? "column" : "row"}
                justifyContent="center"
                alignItems="stretch"
                
            >
                {techStacks.map(item => (
                    <Grid  key={item.id}>
                        <Box
                            sx={{
                                paddingRight: 5, 
                                paddingLeft: 5,
                                paddingBottom: 5,
                            }}
                        >
                            <TechStackCard title={item.title} image={item.image} details={item.details}/>
                        </Box>
                    </Grid>
                ))
                }
            </Grid>
        </div>
    )
}

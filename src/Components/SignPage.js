import { Typography } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import './SignPage.css'
import { useNavigate } from 'react-router-dom';
const SignPage = () => {
    const history=useNavigate()
  return (
    <Box className='main-sign'>
        <Typography>
            <Typography >
                <img src='images/logo.png' alt='logo'  className='icon1'/>
            </Typography>
        </Typography>
        <Typography>
        <Typography>
                <img src='images/relax5.webp' alt='logo'  className='icon2'/>
            </Typography>
        </Typography>
        <Typography variant='h4' fontWeight={'bold'}>Breathings</Typography>
        <Typography variant='p'>Mindful Breathing app</Typography>
    <Typography><Button variant="contained" sx={{width:'250px',borderRadius:6,fontWeight:'bold',fontSize:'20px'}} onClick={()=>history('/signuppage')}>Sign Up</Button></Typography>
        <Typography>Already have an account? 
            <Typography variant='span' sx={{borderBottom:'2px solid blue',color:'blue',fontWeight:'bold'}} onClick={()=>history('/loginpage')}>LOG IN</Typography>
        </Typography>
    </Box>
  )
}

export default SignPage

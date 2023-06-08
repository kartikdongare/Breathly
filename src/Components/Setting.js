import React from 'react'
import './Setting.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom';
import Person3Icon from '@mui/icons-material/Person3';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GetAppOutlinedIcon from '@mui/icons-material/GetAppOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import DoDisturbOutlinedIcon from '@mui/icons-material/DoDisturbOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import Switch from '@mui/material/Switch';

import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
const label = { inputProps: { 'aria-label': 'Switch demo' } };


const Setting = () => {
    const history=useNavigate()
  return (
    <Box margin={'0px 15px'}>
        <Typography sx={{display:'flex',justifyContent:'flex-start',alignItems:'center',marginTop:'30px'}}>
           <Link to='/' ><Typography sx={{textDecoration:'none'}}><ArrowBackIosIcon/></Typography></Link>
            <Typography variant='h6' fontWeight={'bold'} >Setting</Typography>
        </Typography>

        <Box >
            <Box className='main-acc'>
                <Typography className='sub-sett' onClick={()=>history('/account')}>
                    <Typography className='icon'><Person3Icon/></Typography>
                    <Typography >Account</Typography>
                </Typography>
                <Typography ><ArrowForwardIosOutlinedIcon fontSize='10px'/></Typography>
            </Box>
            <Box className='main-acc' onClick={()=>history('/subscriptions')}>
                <Typography className='sub-sett'>
                    <Typography className='icon'><SubscriptionsIcon/></Typography>
                    <Typography>Manage Subcription</Typography>
                </Typography>
                <Typography onClick={()=>history('/subscriptions')}><ArrowForwardIosOutlinedIcon fontSize='10px'/></Typography>
            </Box>
            <Box className='main-acc'>
                <Typography className='sub-sett'>
                    <Typography className='icon'><CalendarMonthIcon/></Typography>
                    <Typography>Remainder</Typography>
                </Typography>
                <Typography><ArrowForwardIosOutlinedIcon fontSize='10px'/></Typography>
            </Box>
            <Box className='main-acc'>
                <Typography className='sub-sett'>
                    <Typography className='icon'><GetAppOutlinedIcon/></Typography>
                    <Typography>Download our cellular</Typography>
                </Typography>
                <Typography>
                <Switch {...label} defaultChecked />
                </Typography>
            </Box>
            <Box className='main-acc'>
                <Typography className='sub-sett'>
                    <Typography className='icon'><NightlightOutlinedIcon/></Typography>
                    <Typography>Enable Dark mode</Typography>
                </Typography>
                <Typography>
                <Switch {...label} defaultChecked />
                </Typography>
            </Box>
            <Box className='main-acc'>
                <Typography className='sub-sett'>
                    <Typography className='icon'><DoDisturbOutlinedIcon/></Typography>
                    <Typography>Do not disturb</Typography>
                </Typography>
                <Typography>
                <Switch {...label} defaultChecked />
                </Typography>
            </Box>
            <Box className='main-acc'>
                <Typography className='sub-sett'>
                    <Typography className='icon'><NotificationsOutlinedIcon/></Typography>
                    <Typography>Push Notification</Typography>
                </Typography>
                <Typography>
                <Switch {...label} defaultChecked />
                </Typography>
            </Box>
            <Box className='main-acc'>
                <Typography className='sub-sett'>
                    <Typography className='icon'><SupportAgentOutlinedIcon/></Typography>
                    <Typography>Support</Typography>
                </Typography>
                <Typography><ArrowForwardIosOutlinedIcon fontSize='10px'/></Typography>
            </Box>
            <Box className='main-acc'>
                <Typography className='sub-sett'>
                    <Typography className='icon'><InfoOutlinedIcon/></Typography>
                    <Typography>About</Typography>
                </Typography>
                <Typography><ArrowForwardIosOutlinedIcon fontSize='10px'/></Typography>
            </Box>
            <Box className='main-acc'>
                <Typography className='sub-sett'>
                    <Typography className='icon'><HttpsOutlinedIcon/></Typography>
                    <Typography>Privacy and Policy</Typography>
                </Typography>
                <Typography><ArrowForwardIosOutlinedIcon fontSize='10px'/></Typography>
            </Box>
            <Box className='main-acc'>
                <Typography className='sub-sett'>
                    <Typography className='icon'><GavelOutlinedIcon/></Typography>
                    <Typography>Term and Condition</Typography>
                </Typography>
                <Typography><ArrowForwardIosOutlinedIcon fontSize='10px'/></Typography>
            </Box>
        </Box>
    </Box>
  )
}

export default Setting

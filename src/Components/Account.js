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
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LoginIcon from '@mui/icons-material/Login';
import SyncIcon from '@mui/icons-material/Sync';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
const label = { inputProps: { 'aria-label': 'Switch demo' } };


const Setting = () => {
    const history=useNavigate()
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
  return (
    <Box margin={'0px 15px'}>
        <Typography sx={{display:'flex',justifyContent:'flex-start',alignItems:'center',marginTop:'30px'}}>
           <Typography sx={{textDecoration:'none'}} onClick={()=>history('/setting')}><ArrowBackIosIcon/></Typography>
            <Typography variant='h6' fontWeight={'bold'} >Account</Typography>
        </Typography>

        <Box >
            <Box className='main-acc'>
                <Typography className='sub-sett'>
                    <Typography className='icon'><Person3Icon/></Typography>
                    <Typography>Your Name</Typography>
                </Typography>
                <Typography sx={{display:'flex',justifyContent:'center',alignContent:'center',gap:'20px'}}>
                    <Typography>Kartik Dongare</Typography>
                    <Typography><ArrowForwardIosOutlinedIcon fontSize='10px'/></Typography>
                </Typography>
            </Box>
            <Box className='main-acc'>
                <Typography className='sub-sett'>
                    <Typography className='icon'><LoginIcon/></Typography>
                    <Typography>You'r signed in as</Typography>
                </Typography>
                <Typography sx={{display:'flex',justifyContent:'center',alignContent:'center',gap:'20px'}}>
                    <Typography>
                    <Button variant="contained" color='error' sx={{pt:0,pb:0,borderRadius:3}} onClick={handleClickOpen}> Unverified</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Verify Your Email</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography variant='p'>Please enter your email here. We will send the OTP.</Typography>
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Verify Now</Button>
        </DialogActions>
      </Dialog>
                    </Typography>
                    <Typography><ArrowForwardIosOutlinedIcon fontSize='10px'/></Typography>
                </Typography>
            </Box>
            <Box className='main-acc'>
                <Typography className='sub-sett'>
                    <Typography className='icon'><LockOpenIcon/></Typography>
                    <Typography>Change your password</Typography>
                </Typography>
                <Typography><ArrowForwardIosOutlinedIcon fontSize='10px'/></Typography>
            </Box>
            <Box className='main-acc'>
                <Typography className='sub-sett'>
                    <Typography className='icon'><SyncIcon/></Typography>
                    <Typography>Sync with Google Fit</Typography>
                </Typography>
                <Typography>
                <Switch {...label} defaultChecked />
                </Typography>
            </Box>
        </Box>
    </Box>
  )
}

export default Setting

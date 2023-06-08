import { Box, Typography } from "@mui/material";
import React from "react";
import "./LoginPage.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Button from "@mui/material/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const history=useNavigate()
  return (
    <Box className="main-login" sx={{width:{xs:'100%',sm:'50%',md:'30%'},}} padding={'10px'}>
      <Typography onClick={()=>history('/signinpage')}>
        <ArrowBackIosNewIcon className="icons1" />
      </Typography>
      <Typography className="sub-login">
        <Typography>
          <img src="images/logo.png" alt="logo" className="icons2" />
        </Typography>
        <Typography variant="h5" fontWeight={"bold"}>
          Welcome Back!
        </Typography>

        <Button variant="contained" fullWidth sx={{ borderRadius: 8 }}>
          <FacebookIcon sx={{ marginRight: "10px", padding: "10px 0px" }} />{" "}
          Continue with Facebook
        </Button>
        <Button variant="outlined" fullWidth sx={{ borderRadius: 8 }}>
          <GoogleIcon sx={{ marginRight: "10px", padding: "10px 0px" }} />{" "}
          Continue with Google
        </Button>

        <Typography variant="p" sx={{ fontWeight: "bold", opacity: "0.5" }}>
          OR LOG IN WITH EMAIL
        </Typography>
       
        <TextField
          id="outlined-multiline-flexible"
          label="Email Address *"
       fullWidth   
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Password * *"
       fullWidth   
        />
        
        <Button variant="contained" fullWidth sx={{ borderRadius: 8,padding: "15px 0px" }}>
          Login
        </Button>
        <Typography sx={{borderBottom:'1px solid #036bfc'}} color={'#036bfc'}>Forget Password</Typography>
        <Typography>New user? <Typography variant="span" fontWeight={'bold'} color={'#036bfc'} onClick={()=>history('/signinpage')}>SIGN UP</Typography></Typography>
      </Typography>
    </Box>
  );
};

export default LoginPage;

import React from 'react'
import './MediaPage.css'
import { Box, Typography } from '@mui/material'
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {data} from '../breathlyData'
import { useParams } from 'react-router-dom';
const MediaPage = () => {
    let param=useParams()
    let audiaData=data.filter((curEle,index)=>curEle.id===parseInt(param.id))
    let audio=audiaData.map((curEle,inex)=>curEle.audio)
    
  return (
    <Box className='main-mediapage'>
        <Box className='sub-mediapage'>
            <Typography className='A1'>
                <SelfImprovementIcon />
                <Typography variant='h6' fontWeight='bold' fontSize='30px'>{audiaData[0].title}</Typography>
            </Typography>
            <Typography>
                <img src={audiaData[0].img} alt='yoga' className='img'/>
            </Typography>
            <Typography variant='h5' >
                Live From Space
            </Typography>
            <Typography variant='p'>Mr.Udhav Jadhav</Typography>
        </Box>
        <Box className='sub-mediapage2'>
           {audio.map((curEle,index)=>{
           return(<>
            <Typography>
            <audio  controls> 
                <source src={curEle[index]} type="audio/ogg"/>
            </audio>
        </Typography>
        <Typography>
        <audio controls> 
            <source src={curEle[index+1]} type="audio/ogg"/>
        </audio>
    </Typography>
    <Typography>
        <audio controls> 
            <source src={curEle[index+2]} type="audio/ogg"/>
        </audio>
    </Typography>
    </>
        )}
           )}
            
            <Typography className='media'>
                <FavoriteBorderIcon/>
                <PlaylistAddIcon/>
                <AccessAlarmsIcon/>
                <MoreVertIcon/>
            </Typography>
        </Box>
    </Box>
  )
}

export default MediaPage

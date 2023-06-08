import React from 'react'
import SubFooter from './SubFooter'
import './SleepPage.css'
import { Box, Typography } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import MeditationImages from './MeditationImages';
import {data} from '../breathlyData'
const TabPanel = (props) => {
    
    const { children, value, index, ...other } = props;
  return (
    <Box>
       <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
    </Box>
  )
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  export default function BasicTabs() {
    const history=useNavigate()
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
        <Box>
            <Box className='main-sleep-page'>
        <Typography onClick={()=>history('/')}><ArrowBackIosIcon/></Typography>
        <Typography variant='h6' sx={{color:'rgb(2, 12, 53)', fontWeight:'bold' ,fontSize:'30px'}}>Meditation</Typography>
        <Typography><AccessAlarmIcon/></Typography>
      </Box>
      <Box sx={{ width: '100%' ,}} >
        <Box>
          <Tabs value={value} onChange={handleChange} className='A2' centered  >
            <Tab label="All" {...a11yProps(0)} sx={{padding:{md:'0 100px',xs:'0 20',sm:'0 50px'}}}/>
            <Tab label="Nature" {...a11yProps(1)} sx={{padding:{md:'0 100px',xs:'0 20',sm:'0 50px'}}} />
            <Tab label="Musical" {...a11yProps(2)} sx={{padding:{md:'0 100px',xs:'0 20',sm:'0 50px'}}} />
            <Tab label="Category" {...a11yProps(3)} sx={{padding:{md:'0 100px',xs:'0 20',sm:'0 50px'}}}/>
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <MeditationImages data={data}/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
      </Box>
      <SubFooter/>
      </Box>
    );
  }

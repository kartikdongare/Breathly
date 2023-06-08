import React, { useState } from "react";
import SubFooter from "./SubFooter";
import "./SleepPage.css";
import { Box, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import "./MelodyPage.css";
import { audioset } from "../MelodyData";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";

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
  );
};
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const history = useNavigate();
  const [value, setValue] = React.useState(0);
  const [data, setData] = useState([...audioset]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handlePlay = (id) => {
    let music = data.find((item) => item.id === id);

    if (music.isPlaying === false) {
      music.audio.play();
      if(!music.audio.duration){
        music.audio.duration.pause();
        setData([...data], (data[id-1].isPlaying = false));
      }
      setData([...data], (data[id-1].isPlaying = true));
    } else {
      music.audio.pause();
      setData([...data], (data[id-1].isPlaying = false));
    }
  };

  return (
    <Box width="100%" sx={{ margin: "0", padding: "0" }}>
      <Box className="main-sleep-page">
        <Typography onClick={() => history("/")}>
          <ArrowBackIosIcon />
        </Typography>
        <Typography
          variant="h6"
          sx={{ color: "rgb(2, 12, 53)", fontWeight: "bold", fontSize: "30px" }}
        >
          Melodies
        </Typography>
        <Typography>
          <AccessAlarmIcon />
        </Typography>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Box>
          <Tabs value={value} onChange={handleChange} className="A2" centered>
            <Tab
              label="All"
              {...a11yProps(0)}
              sx={{ padding: { md: "0 100px", xs: "0 20", sm: "0 50px" } }}
            />
            <Tab
              label="Nature"
              {...a11yProps(1)}
              sx={{ padding: { md: "0 100px", xs: "0 20", sm: "0 50px" } }}
            />
            <Tab
              label="Musical"
              {...a11yProps(2)}
              sx={{ padding: { md: "0 100px", xs: "0 20", sm: "0 50px" } }}
            />
            <Tab
              label="Category"
              {...a11yProps(3)}
              sx={{ padding: { md: "0 100px", xs: "0 20", sm: "0 50px" } }}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0} width="100vw">
          <Box className="main-melody">
            <Box className="A4">
              {data.map((curEle, index) => {

                return (
                  <Box
                    className={curEle.isPlaying?"sub-melody-data xyz":'sub-melody-data'}
                    fontWeight={"bold"}
                    onClick={() => handlePlay(curEle.id)}
                    key={curEle.id}
                  >
                    <Typography variant="div" >
                      {curEle.audiotitle}
                    </Typography>
                    <audio>
                      <source src={curEle.audio} type="audio/ogg" />
                    </audio>
                  </Box>
                );
              })}
            </Box>
            <Accordion sx={{ marginTop: "30px" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  fontSize={25}
                  fontWeight={"bold"}
                  sx={{ margin: "auto" }}
                >
                  Mixer
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Box sx={{ width: 400 }}>
                    <Stack
                      spacing={2}
                      direction="row"
                      sx={{ mb: 1 }}
                      alignItems="center"
                    >
                      <VolumeDown />
                      <Slider
                        aria-label="Volume"
                        value={value}
                        onChange={handleChange}
                      />
                      <VolumeUp />
                    </Stack>
                  </Box>
                  <Box sx={{ width: 400 }}>
                    <Stack
                      spacing={2}
                      direction="row"
                      sx={{ mb: 1 }}
                      alignItems="center"
                    >
                      <VolumeDown />
                      <Slider
                        aria-label="Volume"
                        value={value}
                        onChange={handleChange}
                      />
                      <VolumeUp />
                    </Stack>
                  </Box>
                </Box>
              </AccordionDetails>
            </Accordion>
          </Box>
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
      <SubFooter />
    </Box>
  );
}

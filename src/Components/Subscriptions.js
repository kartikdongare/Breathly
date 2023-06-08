import React from "react";
import SubFooter from "./SubFooter";
import "./SleepPage.css";
import { Box, Stack, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import MeditationImages from "./MeditationImages";
import { data } from "../breathlyData";
import Button from "@mui/material/Button";

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box sx={{ width: "100%", textAlign: "center" }}>
        <Box>
          <Tabs value={value} onChange={handleChange} className="A2" centered>
            <Tab
              label="community"
              {...a11yProps(0)}
              sx={{ padding: { md: "0 100px", xs: "0 20", sm: "0 50px" } }}
            />
            <Tab
              label="Pro"
              {...a11yProps(1)}
              sx={{ padding: { md: "0 100px", xs: "0 20", sm: "0 50px" } }}
            />
            <Tab
              label="Premium"
              {...a11yProps(2)}
              sx={{ padding: { md: "0 100px", xs: "0 20", sm: "0 50px" } }}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Box
            display={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <Typography variant="p">
              Get started with community. Enjoy free meditation at zero cost.
            </Typography>
            <Typography
              sx={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                color: "green",
              }}
            >
             <Stack alignItems='center' direction={'row'}>
             <Typography variant="h4" fontWeight={"bold"}>
                $0
              </Typography>
              <Typography>
                － Free forever
              </Typography>
             </Stack>
            </Typography>
            <Typography>
              <Button variant="contained">Explore now</Button>
            </Typography>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
        <Box
            display={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <Typography variant="p">
            Get started with breathly pro and enjoy lots of more features of meditation.
            </Typography>
            <Typography
            variant="primary"
              sx={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                color:'#036bfc'
              }}
            >
             <Stack alignItems='center' direction={'row'}>
             <Typography variant="h4" fontWeight={"bold"} >
                $15
              </Typography>
              <Typography>
              / month
              </Typography>
             </Stack>
            </Typography>
            <Typography>
              <Button variant="contained">Buy pro</Button>
            </Typography>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Box
            display={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <Typography variant="p">
            Get started with breathly premium & enjoy the most advanced features of meditation, as well as the highest priority for support.
            </Typography>
            <Typography
            variant="primary"
              sx={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                color:'#036bfc'
              }}
            >
             <Stack alignItems='center' direction={'row'}>
             <Typography variant="h4" fontWeight={"bold"} >
                $25
              </Typography>
              <Typography>
              / month
              </Typography>
             </Stack>
            </Typography>
            <Typography>
              <Button variant="contained">Buy premium</Button>
            </Typography>
          </Box>
        </TabPanel>
        
      </Box>
    </Box>
  );
}

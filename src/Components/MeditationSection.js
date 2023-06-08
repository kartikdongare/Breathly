import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "./Meditationsection.css";
import MeditationImages from "./MeditationImages";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import Divider from "@mui/material/Divider";
import SubFooter from "./SubFooter";
import { data } from "../breathlyData";

const MeditationSection = () => {
  const today = new Date();
  const dayNumber = today.getDay();
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = weekdays[dayNumber];

  const day = today.getDate();
  const month = today.getMonth();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = months[month];
  const Datenew = dayName + ", " + day + "  " + monthName;

  const hours = today.getHours();
  const minutes = today.getMinutes();
  const meridiem = hours >= 12 ? "PM" : "AM";
  const hours12 = hours % 12 || 12;
  const formattedTime =
    hours12 + ":" + addLeadingZero(minutes) + " " + meridiem;

  function addLeadingZero(time) {
    return time < 10 ? "0" + time : time;
  }

  const [greetCall, setGreetCall] = useState("");

  useEffect(() => {
    const currentTime = new Date();
    const hours = currentTime.getHours();

    if (hours >= 5 && hours < 12) {
      setGreetCall("Good Morning");
    } else if (hours >= 12 && hours < 18) {
      setGreetCall("Good Afternoon");
    } else {
      setGreetCall("Good Evening");
    }
  }, [greetCall]);
  return (
    <Box>
      <Box className="medi-seaction">
        <Typography variant="h3">{greetCall}</Typography>
        <Typography>
          <Button variant="outlined">{Datenew}</Button>
        </Typography>
        <Typography>
          <Button variant="outlined">{formattedTime}</Button>
        </Typography>
        <Typography>
          <img src="Images/welcome.jpeg" className="img1" alt="" />
        </Typography>
      </Box>
      <Typography style={{ display: "flex", color: "#0d068f" }}>
        <SpaOutlinedIcon />
        <Typography variant="p" fontSize="20px" fontWeight="bold">
          {" "}
          Meditation
        </Typography>
      </Typography>
      <Divider sx={{ marginTop: "10px", color: "blue" }} />
      <Box>
        <MeditationImages data={data} />
        <SubFooter />
      </Box>
    </Box>
  );
};

export default MeditationSection;

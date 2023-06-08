import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import "./SubFooter.css";
import { Divider } from "@mui/material";
const SubFooter = () => {
  return (
    <Box
      className="main-container"
      sx={{ padding: { md: "30px 100px", xs: "5px 40px", sm: "10px 50px" } }}
    >
      <Box>
        <Grid container columnSpacing={2}>
          <Grid item md={3}>
            <Typography variant="h6" fontWeight="bold" mt={3}>
              Daily Meditation
            </Typography>
            <Divider color="white" sx={{ margin: "20px 0" }} />
            <Typography className="sub-footer1">
              <Typography className="name">Sleep</Typography>
              <Typography className="name">Relax</Typography>
              <Typography className="name">Calm</Typography>
              <Typography className="name">Mental Health</Typography>
            </Typography>
          </Grid>
          <Grid item md={3}>
            <Typography variant="h6" fontWeight="bold" mt={3}>
              Sleep Meditation
            </Typography>
            <Divider color="white" sx={{ margin: "20px 0" }} />
            <Typography className="sub-footer1">
              <Typography className="name">Peaceful Sleep</Typography>
              <Typography className="name">Gratitude sleep</Typography>
              <Typography className="name">Night Gratitude</Typography>
              <Typography className="name">Deep Sleep</Typography>
            </Typography>
          </Grid>
          <Grid item md={3}>
            <Typography variant="h6" fontWeight="bold" mt={3}>
              Relax Meditation
            </Typography>
            <Divider color="white" sx={{ margin: "20px 0" }} />
            <Typography className="sub-footer1">
              <Typography className="name">Sleep Relaxation</Typography>
              <Typography className="name">Mental Relax</Typography>
              <Typography className="name">Nature Relax</Typography>
              <Typography className="name">Sky Walk</Typography>
            </Typography>
          </Grid>
          <Grid item md={3}>
            <Typography variant="h6" fontWeight="bold" mt={3}>
              Calm Meditation
            </Typography>
            <Divider color="white" sx={{ margin: "20px 0" }} />
            <Typography className="sub-footer1">
              <Typography className="name">Mental Health</Typography>
              <Typography className="name">Mind Therapy</Typography>
              <Typography className="name">Heaven</Typography>
              <Typography className="name">Mentally Relax</Typography>
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Divider color="#b4becf" sx={{ margin: "20px 0" }} />
      <Typography className="bottom-footer">
        <Typography>© 2023 Breathings. All Rights Reserved!</Typography>
        <Typography>Privacy Policy Cookie Policy</Typography>
      </Typography>
    </Box>
  );
};

export default SubFooter;

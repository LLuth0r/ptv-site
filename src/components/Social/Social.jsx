import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import ListSubheader from '@mui/material/ListSubheader';

//import styling
import "./Social.css";
import { ListItem } from "@mui/material";

export default function Social() {
  return (
    <Paper elevation={3} className="events">
      <div className="events-title">
        <h1>Announcements & Events</h1>
      </div>
      <Box className="announcements">
        <div className="announcement1-div">
          <div className="announcement1-text">
            <h3>2023 PTV HOA Meeting - October 9th @ 8pm</h3>
            <p>
              Pine Trace Village is hosting its annual HOA meeting on October 10th, 2023 at 6:30pm at Avondale High School.  Registration begins at 6pm.  
            </p>
            <List>
              <Typography variant='h3'>
                Topics of Interest
              </Typography>
              <ListItemText sx={{marginLeft: '1em'}}><i>1 Board Seat Available</i></ListItemText>
              <ListItemText sx={{marginLeft: '1em'}}><i>Social Committee</i> - Is there still community interest in social events?</ListItemText>
              <ListItemText sx={{marginLeft: '1em'}}><i>Mail Boxes</i> - Board investigating options to enhance appearance</ListItemText>
              <ListItemText sx={{marginLeft: '1em'}}><i>Street Signs</i> - Board investigating replacing the existing Pine Trace street signs with decorative signs/posts</ListItemText>
              <ListItemText sx={{marginLeft: '1em'}}><i>Traffic Safety</i> - Board considering establishing a PTV Traffic Safety Committee to investigate and potentially participate in the Rochester Hills Traffic Safety Program</ListItemText>
              <ListItemText sx={{marginLeft: '1em'}}><i>Neighborhood Watch</i> - Potential topic of interest</ListItemText>

            </List>
          </div>
          <div className="announcement1-img">
            <img
              src="https://images.unsplash.com/photo-1546641082-cc6e696dacdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2290&q=80"
              className="announcement1-src"
            />
          </div>
        </div>
      </Box>
    </Paper>
  );
}

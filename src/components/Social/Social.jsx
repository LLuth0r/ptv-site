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

//import styling
import "./Social.css";

export default function Social() {
  return (
    <Paper elevation={3} className="events">
      <div className="events-title">
        <h1>Announcements & Events</h1>
      </div>
      <Box className="announcements">
        <div className="announcement1-div">
          <div className="announcement1-text">
            <h3>Halloween 2022</h3>
            <p>
              Halloween is just around the corner! Reminder that if you are
              passing out candy for our PTV Trick or Treaters, please leave your
              porch light on. Trick or Treating is from 6 - 8pm on Monday,
              October 31st. Don't forget the mulled cider for the parents too!
            </p>
          </div>
          <div className="announcement1-img">
            <img
              src="https://www.sunset.com/wp-content/uploads/trick-or-treat-towns-san-jose-getty-1019.jpg"
              className="announcement1-src"
            />
          </div>
        </div>
        <div className="announcement2-div">
          <div className="announcement2-img">
            <img
              src="https://static01.nyt.com/images/2016/12/12/dining/12COOKING-CIDER1/12COOKING-CIDER1-master768.jpg?w=1280&q=75"
              className="announcement2-src"
            />
          </div>
          <Card elevation={3} sx={{ maxWidth: 800, marginRight: 2, marginLeft: 2, marginTop: 5 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Mulled Cider Recipe
              </Typography>
              <List className="announcement2">
                <Divider className="divider" style={{ width: "100%" }}>
                  Ingredients
                </Divider>
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: 400,
                    color: "#4F4F4F",
                  }}
                  primary="Yield: 6 Servings"
                />
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: 400,
                    color: "#4F4F4F",
                  }}
                  primary="1 &frac12; quarts unfiltered sweet cider"
                />
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: 400,
                    color: "#4F4F4F",
                  }}
                  primary="12 allspice berries"
                />
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: 400,
                    color: "#4F4F4F",
                  }}
                  primary="12 whole cloves"
                />
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: 400,
                    color: "#4F4F4F",
                  }}
                  primary="2 sticks cinnamon, borken into pieces"
                />
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: 400,
                    color: "#4F4F4F",
                  }}
                  primary="6 tablespoons bourbon (optional)"
                />
              </List>
              <List>
                <Divider className="divider" style={{ width: "100%" }}>
                  Preparation
                </Divider>
                <ListItemText>Step 1</ListItemText>
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: 400,
                    color: "#4F4F4F",
                  }}
                  primary="Place all ingredients but the bourbon in a saucepan and heat over medium heat until the mixture is just below a boil. 
                    Cover, remove from the heat and let steep 5 minutes."
                />
                <Divider className="divider2" />
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: 400,
                    color: "#4F4F4F",
                  }}
                  primary="Step 2"
                />
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: 400,
                    color: "#4F4F4F",
                  }}
                  primary="At that point, you will notice that the allspice and cloves have floated to the top; remove and discard them. Pour a tablespoon of bourbon, if desired, 
                    into each of six mugs and pour the cider mixture over it. Spoon a few cinnamon pieces into each mug, and serve immediately."
                />
              </List>
            </CardContent>
          </Card>
        </div>
      </Box>
    </Paper>
  );
}

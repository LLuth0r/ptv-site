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
            <h3>Yard Waste Pickup</h3>
            <p>
              As temperatures continue to drop and leaves keep falling, yard waste pickup will continue through November 30th, 2022.
              Make sure to bag your yard waste in biodegradable paper yard waste bags or bins marked for yard waste.  
            </p>
          </div>
          <div className="announcement1-img">
            <img
              src="https://images.unsplash.com/photo-1453342664588-b702c83fc822?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1459&q=80"
              className="announcement1-src"
            />
          </div>
        </div>
        <div className="announcement2-div">
          <div className="announcement2-img">
            <img
              src="https://images.unsplash.com/photo-1573975440239-a99e720a09d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              className="announcement2-src"
            />
          </div>
          <Card elevation={3} sx={{ maxWidth: 800, marginRight: 2, marginLeft: 2, marginTop: 5 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Easy, No Fuss Thanksgiving Turkey
              </Typography>
              <small><a class='link' href="https://tastesbetterfromscratch.com/easy-no-fuss-thanksgiving-turkey/">Original Link</a></small>
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
                  primary="1 10lb turkey, thawed"
                  secondary="Allow at least 1 day of thawing to be safe"
                />
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: 400,
                    color: "#4F4F4F",
                  }}
                  primary="1 onion, peeled and quartered"
                />
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: 400,
                    color: "#4F4F4F",
                  }}
                  primary="1 lemon, quartered"
                />
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: 400,
                    color: "#4F4F4F",
                  }}
                  primary="1 apple, quartered"
                />
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: 400,
                    color: "#4F4F4F",
                  }}
                  primary=".75 ounce fresh rosemary"
                />
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: 400,
                    color: "#4F4F4F",
                  }}
                  primary=".75 ounce fresh thyme"
                />
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: 400,
                    color: "#4F4F4F",
                  }}
                  primary=".75 ounce fresh sage"
                />
              </List>
              <List sx={{textAlign: 'start', marginLeft: 3}}>
                <Divider className="divider" style={{ width: "100%" }}>
                  Preparation
                </Divider>
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: 400,
                    color: "#4F4F4F",
                    paddingBottom: 1,
                    paddingTop: 1
                  }}
                  primary="1. If turkey is frozen, thaw in fridge, 24 hours for every 5 pounds of turkey."
                />
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: 400,
                    color: "#4F4F4F",
                    paddingBottom: 1
                  }}
                  primary="2. Remove thawed turkey from the fridge 1 hour before roasting, to allow it to come up to room temperature."
                />
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: 400,
                    color: "#4F4F4F",
                    paddingBottom: 1
                  }}
                  primary="3. Adjust your oven rack so turkey will sit in the center of the oven.  Preheat to 325 degrees."
                />
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: 400,
                    color: "#4F4F4F",
                    paddingBottom: 1
                  }}
                  primary="4. Make the herb butter by combining room temperature butter, minced garlic, salt, pepper, one tablespoon fresh 
                  chopped rosemary, one tablespoon fresh chopped thyme, and half a tablespoon of fresh chopped sage. (You’ll use the remaining 
                    fresh herbs for stuffing inside the cavity of the turkey)"
                />
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: 400,
                    color: "#4F4F4F",
                    paddingBottom: 1
                  }}
                  primary="5. Remove turkey from packaging and remove the neck and giblets from the inside the cavities of the bird. (Reserve them for gravy, if you want, or discard them). Pat the turkey very dry with paper towels."
                />
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: 400,
                    color: "#4F4F4F",
                    paddingBottom: 1
                  }}
                  primary="6. Season the cavity of the turkey with salt and pepper. Stuff it with the quartered lemon, onion and apple and leftover herbs."
                />
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: 400,
                    color: "#4F4F4F",
                    paddingBottom: 1
                  }}
                  primary="7. Use your fingers to loosen and lift the skin above the breasts (on the top of the turkey) and smooth a few tablespoons of the herb butter underneath."
                />
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: 400,
                    color: "#4F4F4F",
                    paddingBottom: 1
                  }}
                  primary="8. Tuck the wings of the turkey underneath the turkey and set the turkey on a roasting rack inside a roasting pan*."
                />
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: 400,
                    color: "#4F4F4F",
                    paddingBottom: 1
                  }}
                  primary="9. Microwave the remaining herb butter mixture for 30 seconds (it doesn’t need to be completely melted--just really softened). Use a basting brush to brush the remaining herb butter all over the outside of the turkey, legs and wings."
                />
                 <ListItemText
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: 400,
                    color: "#4F4F4F",
                    paddingBottom: 1
                  }}
                  primary="10. Roast at 325 degrees F for about 13-15 minutes per pound, or until internal temperature (inserted on middle of thigh and breast) reaches about 165 degrees."
                />
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: 400,
                    color: "#4F4F4F",
                    paddingBottom: 1
                  }}
                  primary="11. (I remove the turkey from the oven once it reaches 160 degrees. Then, I tent it with foil, and let it rest on the counter. It will continue cooking under the foil, to reach 165 degrees F.)"
                />
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: 400,
                    color: "#4F4F4F",
                    paddingBottom: 1
                  }}
                  primary="12. ***Check the turkey about halfway through cooking, and once the skin gets golden brown, cover the top of the turkey with tinfoil, to protect the breast meat from overcooking. Alternately, you could start cooking the turkey with it tented in foil, then during the last hour or so of cooking you can take the foil off to let the turkey brown."
                />
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: 400,
                    color: "#4F4F4F",
                    paddingBottom: 1
                  }}
                  primary="13. Allow turkey to rest for 20-30 minutes before carving. https://tastesbetterfromscratch.com/how-to-carve-a-turkey/"
                />
              </List>
            </CardContent>
          </Card>
        </div>
      </Box>
    </Paper>
  );
}

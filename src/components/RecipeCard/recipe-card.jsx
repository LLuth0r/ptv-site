
export default function RecipeCard () {
  return (
    <Card elevation={3} sx={{ maxWidth: 800, marginRight: 2, marginLeft: 2, marginTop: 5 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Peanut Butter Blossoms
              </Typography>
              <small><a class='link' rel="noopener noreferrer" target="_blank" href="https://www.foodnetwork.com/recipes/nancy-fuller/peanut-butter-blossoms-3415533">Original Link</a></small>
              <List className="announcement2">
                <Divider className="divider" style={{ width: "100%" }}>
                  Ingredients
                </Divider>
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: 400,
                    marginTop: 2,
                    color: "#4F4F4F",
                  }}
                  primary="Yield: 4 to 5 Dozen Cookies"
                />
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: 400,
                    color: "#4F4F4F",
                  }}
                  primary="2 3/4 cups all-purpose flour"
                />
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: 400,
                    color: "#4F4F4F",
                  }}
                  primary="1 1/4 teaspoons baking soda"
                />
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: 400,
                    color: "#4F4F4F",
                  }}
                  primary="1/2 teaspoon fine salt"
                />
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: 400,
                    color: "#4F4F4F",
                  }}
                  primary="1 cup smooth peanut butter (not natural)"
                />
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: 400,
                    color: "#4F4F4F",
                  }}
                  primary="12 tablespoons (1 1/2 sticks) unsalted butter, at room temp"
                />
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: 400,
                    color: "#4F4F4F",
                  }}
                  primary="1/4 cup vegetable shortening"
                />
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: 400,
                    color: "#4F4F4F",
                  }}
                  primary="1 3/4 cups packed light brown sugar"
                />
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: 400,
                    color: "#4F4F4F",
                  }}
                  primary="2 large eggs"
                />
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: 400,
                    color: "#4F4F4F",
                  }}
                  primary="1 tablespoon vanilla extract"
                />
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: 400,
                    color: "#4F4F4F",
                  }}
                  primary="2 cups peanut butter chips"
                />
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: 400,
                    color: "#4F4F4F",
                  }}
                  primary="Your favorite jelly thinned with a splash of liqueur (optional)"
                />
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: 400,
                    color: "#4F4F4F",
                  }}
                  primary="48 to 60 chocolate kiss candies"
                />
              </List>
              <List sx={{textAlign: 'start', marginLeft: 3}}>
                <Divider className="divider" style={{ width: "100%" }}>
                  Directions:
                </Divider>
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: 400,
                    color: "#4F4F4F",
                    paddingBottom: 1,
                    paddingTop: 1
                  }}
                  primary="1. Adjust oven racks to the upper and lower thirds and preheat to 375 degrees F.  Coat 2 baking sheets with cooking spray."
                />
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: 400,
                    color: "#4F4F4F",
                    paddingBottom: 1
                  }}
                  primary="2. Combine flour, baking soda and salt in a medium bowl.  Set aside."
                />
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: 400,
                    color: "#4F4F4F",
                    paddingBottom: 1
                  }}
                  primary="3. Beat the peanut butter, butter and shortening in a large bowl with an electric mixer on medium high until smooth, about 1 minute.
                  Add the brown sugar and continue to beat until light and fluffy, about 4 minutes.  Add the eggs and vanilla and continue to beat until incorporated.
                  Add the flour mixture in two batches and beat on medium until incorporated.  Fold in the peanut butter chips."
                />
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: 400,
                    color: "#4F4F4F",
                    paddingBottom: 1
                  }}
                  primary="4. Scoop out level tablespoons of dough, roll into balls and space about 2 inches apart on the prepared baking 
                  sheets. (You will need to bake the cookies in batches; allow the baking sheets to cool in between batches.)"
                />
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: 400,
                    color: "#4F4F4F",
                    paddingBottom: 1
                  }}
                  primary="5. Bake until the bottoms and edges of the cookies are golden brown but the middles are still soft, about 10 minutes. (The cookies will bake a bit after they come out of the oven). Indent the warm cookies with the rounded bottom of a teaspoon. 
                  If using jelly, fill each indent with some jelly. Top each with a chocolate kiss candy. "
                />
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: 400,
                    color: "#4F4F4F",
                    paddingBottom: 1
                  }}
                  primary="6. Allow the cookies to cool on the baking sheet for a few minutes and then transfer to a rack to cool completely."
                />
              </List>
            </CardContent>
          </Card>
  )
}
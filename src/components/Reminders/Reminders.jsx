import React from 'react'
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


//import styling
import './Reminders.css';

export default function Reminders() {

  return (
    <Paper className='reminders' elevation={3}>
        <h1>Reminders:</h1>
        <Divider className='divider' style={{ width: '80%' }}>Pets</Divider>
        <Box className='pets' sx={{ width: '80%', display: 'flex', justifyContent: 'center' }}>
          <List className='pets-list'><ListItemText
              primaryTypographyProps={{ fontSize: 16, fontWeight: 400, color: '#4F4F4F', textAlign: 'center', margin: 2 }}
              primary="Pets must be on a leash at all times"
            />
            <ListItemText
              primaryTypographyProps={{ fontSize: 16, fontWeight: 400, color: '#4F4F4F', textAlign: 'center', margin: 2 }}
              primary="Be considerate of your neighbors"
            />
            <ListItemText
              primaryTypographyProps={{ fontSize: 16, fontWeight: 400, color: '#4F4F4F', textAlign: 'center', margin: 2 }}
              primary="Each owner shall be responsible for collection and disposition of all fecal matter deposited by any pet maintained by such Co-owner"
            />
            <ListItemText
              primaryTypographyProps={{ fontSize: 16, fontWeight: 400, color: '#4F4F4F', textAlign: 'center', margin: 2 }}
              primary="No dog which barks and can be heard on any frequent or continuing basis shall be kept in any Unit or on the Common Elements"
            />
            <ListItemText
              primaryTypographyProps={{ fontSize: 16, fontWeight: 400, color: '#4F4F4F', textAlign: 'center', margin: 2 }}
              primary="In the event of any violation, the Association may assess fines for such violation in accordance with the By-laws & Rules / Regulations"
            />
          </List>
        </Box>
        <Divider className='divider' style={{ width: '80%' }}>Lamp Posts</Divider>
        <Box className='lights' sx={{ width: '70%' }}>
          <List className='lamps'>
            <ListItemText
              primaryTypographyProps={{ fontSize: 16, fontWeight: 400, color: '#4F4F4F' }}
              primary="Keep the light burning! The lamps have automatic sensors, so please keep the lanterns on for safety.  The assocation covers the cost of the lamp post bulb changes and/or photocell replacements.  If your lamp post light is not working please do not attempt to change the bulb or photocell yourself.  You are asked to notify MGMC via email so they can issue a work order to have the bulb changed or photocell replaced."
            />
          </List>
        </Box>
        <Divider className='divider' style={{ width: '80%' }}>Mailboxes</Divider>
        <Box className='mailbox' sx={{ width: '70%' }}>
          <List className='mailbox'>
            <ListItemText
              primaryTypographyProps={{ fontSize: 16, fontWeight: 400, color: '#4F4F4F' }}
              primary='Please inform management immediately if you notice your mailbox door is loose or the spring is broke.  Please note that broken springs lead to door hinges, so we are asking all residents to inspect/monitor for broken springs and report any related issues or direct any questions to MGMC via email.'
            />
            <br />
            <ListItemText
              primaryTypographyProps={{ fontSize: 16, fontWeight: 400, color: '#4F4F4F' }}
              primary='The current maintenance plan is to replace broken springs and repair door hinges if possible.  As communicated, our current mailboxes are no longer being manufactured.  The Board investigated short-term/long-term options for replacing the existing mailboxes.  As a result the short-term plan is to replace a group of mailboxes on one of the courts with new, similarly styled mailboxes and use the old for spare parts.  This plan should address spare parts for 3-5 years.'
            />
          </List>
        </Box>
        <Divider className='divider' style={{ width: '80%' }}>Exterior Modifications</Divider>
        <Box className='mailbox' sx={{ width: '70%' }}>
          <List className='mods'>
            <ListItemText
              primaryTypographyProps={{ fontSize: 16, fontWeight: 400, color: '#4F4F4F' }}
              primary='Exterior alterations & modifications to your home require prior written approval from the Board/MGMC.  This includes changes in paint, landscaping, roofing, siding, driveway replacement, satellite dishes, etc.  Change request forms are available from MGMC.  Your continued compliance with the above is greatly appreciated!'
            />
          </List>
        </Box>
        <Divider className='divider' style={{ width: '80%' }}>Trash Cans</Divider>
        <Box className='trash' sx={{ width: '50%' }}>
          <List>
            <ListItemText
              primaryTypographyProps={{ fontSize: 16, fontWeight: 400, color: '#4F4F4F' }}
              primary='Trash cans are to be properly stowed as per the PTV Bylaw below:'
            />
            <ListItemText
              secondaryTypographyProps={{ margin: 2 }}
              secondary='No lot shall be used or maintained as a dumping ground for rubbish, trash, garbage or other waste.  The same shall not be kept except in sanitary containers properly concealed from public view.  Garbage cans shall not be left at the road more than 24 hours in any one week.'
            />
          </List>
        </Box>
      </Paper>
  )
}

import React from 'react'
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import './Main.css';
import ContactForm from '../../components/ContactForm/ContactForm';
import Social from '../../components/Social/Social';
import Reminders from '../../components/Reminders/Reminders';

export default function Main() {
  return (
    <div className='home'>
      <Paper className='home-paper' elevation={10}>
        <img src='https://images.unsplash.com/photo-1526344966-89049886b28d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dn' 
             className='hero' />
      </Paper>
      <Reminders />
      <Paper className="contact" elevation={10}>
        <div className="contactform">
          <h1>Send Us an Email</h1>
          <ContactForm />
        </div>
      </Paper>
    </div>
  )
}

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
        <img src='https://images.unsplash.com/photo-1510194638421-92f54ce46444?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1535&q=80' 
             className='hero' />
      </Paper>
      <Social />
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

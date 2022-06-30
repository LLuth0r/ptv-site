import React from 'react'
import { Link } from 'react-scroll';






//styling
import './Navigation.css';

export default function Navigation() {
  return (
    <div className='navbar'>
            <div className='logo'>
            <Link to='home' duration={500} smooth={true} offset={-125}>
                <div className='logo-text'>PTV Newsletter</div>
            </Link>
            </div>            
            <div className="links">
                <Link to='events' duration={500} smooth={true} offset={-125}>
                    <div className='nav-events'>Events</div>
                </Link>
                <Link to='reminders' duration={500} smooth={true} offset={-125}>
                    <div className='nav-reminders'>Reminders</div>
                </Link>
                <Link to='contact' duration={500} smooth={true}>
                    <div className='nav-contact'>Contact</div>
                </Link>
            </div>
        </div>
  )
}

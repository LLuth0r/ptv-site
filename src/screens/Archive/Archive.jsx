import React from 'react'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import './Main.css';


//images
import Caroline from '../../images/Caroline_Elizabeth_Wells.jpg';
import Grant from '../../images/Grant_Hurt.jpeg';


export default function Archive() {

    return (
        <div>
        <Paper elevation={3} className='archived'>        
        <Box className='announcements-2022'>
          <div className='caroline-div'>
            <div className='caroline-text'>
              <h3>
                Caroline Elizabeth Wells
              </h3>
              <p>
                Congratulations to Caroline, Class of 2022 from Notre Dame Prep!
                Caroline will be attending the University of Michigan this fall.  Enjoy your summer Caroline!
              </p>
            </div>
            <div className='caroline-img'>
              <img src={Caroline} className='caroline-src' />
            </div>
          </div>
          <div className='grant-div'>
            <div className='grant-img'>
              <img src={Grant} className='grant-src' />
            </div>
            <div className='grant-text'>
              <h3>
                Grant Hurt
              </h3>
              <p>
                Congratulations to Grant Hurt, Class of 2022 from Howard University!
                He earned a Business Degree in Supply Chain Management and has accepted a job offer with Estee Lauder in New York
                working in data analytics.  Congratulations and best of luck on your new endeavor!
              </p>
            </div>
          </div>
        </Box>
        </Paper>
        </div>
    )
}
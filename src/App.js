import React, { useState } from 'react';
import './App.css';
import { makeStyles } from 'tss-react/mui';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Avatar from '@mui/material/Avatar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const useStyles = makeStyles()(() => ({
    root: {
        textAlign: 'center',
        /*background: 'linear-gradient(#7286A0, #2F4858)',*/
       // height: '100vh',
        //backgroundColor: '#023047',
        minWidth: '18rem'
    },
    title: {
        fontSize: '5rem',
        width: '39rem'
    },
    subTitle: {
        marginLeft: '70px',
        fontSize: '3rem'
    },
    headingRoot: {
        textAlign: 'center',
        color: '#FFF',
        maxWidth: '40rem',
        minWidth: '15rem',
        textAlign: 'left',
        margin: '0 auto',
        padding: '13rem 2rem 0 2rem'
    },
    buttonRoot: {
        color: '#FFF',
        fontSize: '2rem',
        width: '8rem',
        float: 'right',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        paddingTop: '3rem',
        height: '10rem',
        paddingRight: '1rem'
    },
    buttonRootNarrow: {
        color: '#FFF',
        fontSize: '2rem',
        width: '100%',
        float: 'right',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',        
        paddingTop: '1.5rem'
    },
    //button: {
    //    paddingBottom: '0.5rem',
    //    borderRadius: '2px',
    //    transition: 'backgroundColor 0.2s ease 0.2s',
    //    ':hover': {
    //        color: '#000',
    //        backgroundColor: '#FFF',
    //    }
    //},
    heading: {
        color: '#FFF',
    },
    iconRoot: {
        color: '#FFF',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '7rem',
        paddingLeft: '1rem'
    },
    iconRootNarrow: {
        color: '#FFF',
        display: 'flex',
        flexDirection: 'row',
        paddingTop: '4rem',
        width: '100%',
        justifyContent: 'space-around'
    },
    drawer: {
        padding: '1rem',
        backgroundColor: '#EEE5E9',
        height: '100%',
        width: '25rem'
    },
    drawerNarrow: {
        padding: '1rem',
        backgroundColor: '#EEE5E9',
        height: '100%'
    }
}));

function App() {
    const { classes } = useStyles();
    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));

    const [open, setOpen] = useState(true);
    const [page, setPage] = useState('');

    return (
        <div className={classes.root} >
            <div>
                <div className={isSm ? classes.buttonRootNarrow : classes.buttonRoot}>
                    <div className='button' onClick={()=>{setOpen(true); setPage('about')}}>About</div>
                    <div className='button'>Work</div>
                    <div className='button'>Contact</div>
                </div>
            </div>
            <div className="line delay" style={{left: '98%'}}></div>
            <div style={{height: '100%'}}>
                <div className={classes.headingRoot} style={{paddingTop: isSm ? '7rem' : '13rem'}}>                  
                    <div style={{ fontSize: 'calc(0.5rem + 1vw)', color: '#CCDBDC', fontWeight: 600}}>Hi There! I'm</div>
                    <div style={{ fontSize: 'calc(2rem + 2vw)', padding: '1rem 0' }}>AJ Adversalo</div>                                     
                    <div style={{ fontSize: 'calc(1rem + 1vw)', color: '#CCDBDC' }}>I'm a full-stack software developer passionate in creating robust, user-friendly web applications that make a difference.</div>                         
                    <div style={{ paddingTop: '2rem' }}>
                        <Button className='resumeButton' style={{ padding: '0.5rem 1rem', color: '#FFF', border: '1px solid #FFF' }}>Resume</Button>
                    </div>
                </div>               
            </div>
            <div>
                <div className={isSm ? classes.iconRootNarrow : classes.iconRoot}>
                    <IconButton style={{width: '2rem'}}>{<LinkedInIcon style={{fill: '#FFF'}} />}</IconButton>
                    <IconButton 
                        style={{ width: '2rem' }}
                        onClick={()=>setOpen(true)}
                    >
                        {<GitHubIcon style={{ fill: '#FFF' }} />}
                    </IconButton>
                </div>
            </div>
            <SwipeableDrawer
                anchor={isSm ? 'bottom' : 'right'}
                open={open}
                onClose={()=>{setOpen(false)}}
                onOpen={()=>{setOpen(true)}}
            >
                <div className={isSm ? classes.drawerNarrow : classes.drawer} >
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Avatar alt="Remy Sharp" src="face.jfif" />
                        <IconButton onClick={()=>{setOpen(false); setPage('');}}>{<KeyboardArrowDownIcon/>}</IconButton>
                    </div>
                    <h1>More about me...</h1>
                    <p>Hi, I'm AJ, I'm a full-stack developer based in beautiful Vancouver, British Columbia.
                        I have 4 years experience building responsive web applications. </p>
                    <p>One of my key strengths as a developer is my attention to detail. I firmly believe that the little things matter, and I always strive to ensure that my code is clean, well-organized, and easy to maintain. Whether it be front-end or back-end I always find ways to optimize code and improve my skills in the process.</p>    
                    <p>If you're looking for a meticulous and detail-oriented full-stack developer to help you bring your vision to life, I'd love to hear from you.</p>          
                </div>                
          </SwipeableDrawer>
        </div>
    );
}

export default App;

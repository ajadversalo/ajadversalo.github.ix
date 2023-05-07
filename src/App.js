import React, { useState, useEffect } from 'react';
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
import CloseIcon from '@mui/icons-material/Close';
import Contact from './Contact';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

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
        height: '100%',
        width: '25rem'
    },
    drawerNarrow: {
        padding: '1rem',
        height: '100%'
    }
}));

function App() {
    const { classes } = useStyles();
    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));

    const [open, setOpen] = useState(false);
    const [page, setPage] = useState('');
    const [popupMsg, setPopupMsg] = useState('');
    const [popupMsgType, setPopupMsgType] = useState('error');
    const [openPopup, setOpenPopup] = useState(false);
    const [height, setHeight] = useState(window.innerHeight);
    
    const About = () => {
        return(
            <div style={{paddingTop: '2rem'}}>            
                <Avatar alt="A.J. Adversalo" src="face.jfif" />
                <h1>More about me...</h1>
                <p>Hi, I'm AJ, I moved to Vancouver in 2016. I worked in IT for a bit until I realized the 
                    opportinities in software development so I went ahead and took the Software Systems Developer(SSD) Program at BCIT.
                    A month after completing the program in 2019, I was lucky enough to be hired at GenXys Healthcare Systems as a full-stack developer.</p>
                <p>As a software developer, one of my key strengths is my attention to detail. I firmly believe that the little things 
                    matter, and I always strive to ensure that my code is clean, well-organized, and easy to maintain. Whether it be front-end 
                    or back-end I always find ways to optimize code and improve my skills in the process.</p>    
                <p>Outside of work, I enjoy photography taking snaps here and there especially wide open sceneries.</p>
                <p>I strive to continue and keep learning new languages, frameworks and technologies to broaden my skills and be a better developer in general.
                    If you're interested in working with me, please don't hesitate to get in touch!
                </p>
            </div>
        );
    }

    useEffect(() => {
        document.title ='AJ - Full-Stack Dev';
    }, []);

    const getHeight = () => window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    useEffect(() => {
        const resizeListener = () => {

            setHeight(getHeight())
          };

          window.addEventListener('resize', resizeListener);

          return () => {
            // remove resize listener
            window.removeEventListener('resize', resizeListener);
          }
    },[]);

    useEffect(() => {
        if(height){
            console.log('height', height)
        }
    }, [height])

    const Projects = () => {
        return(
            <>            
                <h1>Projects</h1>
            </>
        );
    }
    
    const Resume = () => {
        return(
            <>            
                <h1>Resume</h1>
            </>
        );
    }

    const handleClosePopup = () => {
        setOpenPopup(false);
    }

    return (
        <div className={classes.root} >
            <div>
                <div className={isSm ? classes.buttonRootNarrow : classes.buttonRoot}>
                    <div className='button' onClick={()=>{setOpen(true); setPage('about')}}>About</div>
                    <div className='button' onClick={()=>{setOpen(true); setPage('projects')}}>Projects</div>
                    <div className='button' onClick={()=>{setOpen(true); setPage('contact')}}>Contact Me</div>
                </div>
            </div>
            <div className="line delay" style={{left: '98%'}}></div>
            <div style={{height: '100%'}}>
                <div className={classes.headingRoot} style={{paddingTop: isSm ? '7rem' : '13rem'}}>                  
                    <div style={{ fontSize: 'calc(0.5rem + 1vw)', color: '#CCDBDC', fontWeight: 600}}>Hi There! I'm</div>
                    <div style={{ fontSize: 'calc(2rem + 2vw)', padding: '1rem 0' }}>AJ Adversalo</div>                                     
                    <div style={{ fontSize: 'calc(1rem + 1vw)', color: '#CCDBDC' }}>I'm a full-stack software developer passionate in creating robust, user-friendly web applications that make a difference.</div>                         
                    <div style={{ paddingTop: '2rem' }}>
                        <Button 
                            className='resumeButton' 
                            style={{ padding: '0.5rem 1rem', color: '#FFF', border: '1px solid #FFF' }}
                            onClick={()=>{setOpen(true); setPage('resume')}}>
                                Resume
                        </Button>
                    </div>
                </div>               
            </div>
            <div>
                <div className={isSm ? classes.iconRootNarrow : classes.iconRoot} style={height < 600 ? { position: 'relative', paddingTop: '2rem'} : {position: 'absolute', bottom: 15}}>
                    <IconButton style={{width: '2rem'}} onClick={() => window.open('https://www.linkedin.com/in/ajadversalo', '_blank')}>
                        {<LinkedInIcon style={{fill: '#FFF'}} />}
                    </IconButton>
                    <IconButton style={{ width: '2rem' }} onClick={()=>window.open('https://github.com/ajadversalo', '_blank')}>
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
                    <IconButton 
                        onClick={()=>{setOpen(false); setPage('');}}
                        style={{float: 'right'}}
                    >
                        {<CloseIcon/>}
                    </IconButton>
                    { page === 'about' && <About /> }
                    { page === 'projects' && <Projects /> }
                    { page === 'contact' && 
                        <Contact                             
                            setOpenPopup={setOpenPopup}
                            setPopupMsg={setPopupMsg}
                            setPopupMsgType={setPopupMsgType}
                            setOpen={setOpen}
                        /> 
                    }
                    { page === 'resume' && <Resume/> }
                </div>                
          </SwipeableDrawer>
          <Snackbar 
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} 
            open={openPopup} 
            autoHideDuration={5000} 
            onClose={handleClosePopup}>
                <MuiAlert 
                    severity={popupMsgType} 
                    variant='filled' 
                    onClose={handleClosePopup}>
                        {popupMsg}
                </MuiAlert>
          </Snackbar>
        </div>
    );
}

export default App;

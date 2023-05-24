import React, { useState, useEffect } from 'react';
import './App.css';

import { makeStyles } from 'tss-react/mui';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import CloseIcon from '@mui/icons-material/Close';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import Tooltip from '@mui/material/Tooltip';

import Contact from './Pages//Contact';
import Resume from './Pages/Resume';
import Projects from './Pages/Projects';
import About from './Pages/About';

const useStyles = makeStyles()(() => ({
    root: {
        textAlign: 'center',
        minWidth: '18rem'
    },
    subTitle: {
        marginLeft: '70px',
        fontSize: '3rem'
    },
    headingRoot: {
        color: '#000',
        maxWidth: '40rem',
        minWidth: '15rem',
        textAlign: 'left',
        margin: '0 auto',
        padding: '13rem 2rem 0 2rem'
    },
    buttonRoot: {
        color: '#000',
        fontSize: '1.5rem',
        width: '10rem',
        float: 'right',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        paddingTop: '3rem',
        height: '10rem',
        paddingRight: '1rem'
    },
    buttonRootNarrow: {
        color: '#000',
        fontSize: '1.3rem',
        width: '100%',
        float: 'right',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',        
        paddingTop: '1.5rem'
    },
    heading: {
        color: '#000',
    },
    iconRoot: {
        color: '#000',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '7rem',
        paddingLeft: '1rem'
    },
    iconRootNarrow: {
        color: '#000',
        display: 'flex',
        flexDirection: 'row',
        paddingTop: '4rem',
        width: '100%',
        justifyContent: 'space-around'
    },
    drawer: {        
        backgroundColor: '#282C2F',
        color: '#FCFFFF',
        width: '40rem'
    },
    drawerNarrow: {
        width: '100%',
        height: '100%',
        backgroundColor: '#282C2F',
        color: '#FCFFFF'
    },
    drawerHeader: {
        backgroundColor: '#282C2F', 
        width: '100%', 
        overflow: 'overlay', 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between'        
    },
    aboutRoot: {
        padding: '0 0.5rem 0 0.5rem', 
    },
    projectRoot: {
        padding: '0 1.5rem 1rem 0.5rem', 
    },
    name: {
        fontSize: 'calc(2rem + 2vw)', 
        padding: '1rem 0', 
        fontFamily: 'Archivo Black',
        color: '#FCFFFF'
    },
    resumeButton: {
        padding: '0.5rem 1rem', 
        color: '#FCFFFF', 
        border: '2px solid #FFF',
        borderRadius: 0,
        fontFamily: 'Wix MadeFor Display',
        fontSize: '1.1rem',
        '&:hover': {
            backgroundColor: '#FFF',
            color: '#000'
        },
    },
    button :{
        color: '#A8DADC',
        '&:hover': {
            color: '#FFF'
        },
    },
    icon: {
        fill: '#A8DADC',
        '&:hover': {
            fill: '#FFF'
        },
    },
    underscore: {
        height: '2px', 
        width: '100%', 
        backgroundColor: '#FCFFFF'
    },
    intro: {
        fontSize: 'calc(1rem + 1vw)', 
        color: '#B5B9BC'
    },
    greeting : {        
        color: '#B5B9BC', 
        fontSize: 'calc(0.5rem + 1vw)', 
        fontWeight: 600
    },
    drawerPaper: {
        backgroundColor: '#282C2F',
        '&::-webkit-scrollbar': {
            display: 'none'
        },
        // Firefox
        scrollbarWidth: 'none'
    },
    drawerPaperContact: {
        backgroundColor: '#FFF',
        '&::-webkit-scrollbar': {
            display: 'none'
        },
        // Firefox
        scrollbarWidth: 'none'
    },
    projectPortal: {
         backgroundColor: '#FFF',
        // borderRadius: '3px',
        // '&:hover': {
        //     backgroundColor: 'red'
        // },
    },
    tooltip: {
        "&:before": {
            border: "1px solid red"
          },
        backgroundColor: '#FFF',
        color: '#000',
        fontFamily: 'Wix MadeFor Display',
        padding: '0.5rem',
        border: "1px solid darkgrey"
    },
    tooltipArrow: {
        "&:before": {
          border: "1px solid darkgrey"
        },
        color: '#FFF'
    },
    title:{
        color: '#BB4430'
    },
    closeButton: {
        fill: '#587792'
    },
    contentText: {
        color: '#587792'
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

    useEffect(() => {
        document.title ='AJ Adversalo';
    }, []);

    const getHeight = () => window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    useEffect(() => {
        const resizeListener = () => {
            setHeight(getHeight())
          };
          window.addEventListener('resize', resizeListener);
          return () => {
            window.removeEventListener('resize', resizeListener);
          }
    },[]);
        
    const handleClosePopup = () => {
        setOpenPopup(false);
    }

    const onDownload = () => {
        const link = document.createElement('a');
        link.download = 'ajadversalo-resume.pdf';
        link.href = 'resume.pdf';
        link.click();
    };

    return (
        <div className={classes.root}>
            <div>
                <div className={isSm ? classes.buttonRootNarrow : classes.buttonRoot}>
                    <div className={classes.button} onClick={()=>{setOpen(true); setPage('about')}}>About</div>
                    <div className={classes.button} onClick={()=>{setOpen(true); setPage('projects')}}>Projects</div>
                    <div className={classes.button} onClick={()=>{setOpen(true); setPage('contact')}}>Contact</div>
                </div>
            </div>
            <div className="line delay" style={{left: '98%'}}></div>
            <div style={{height: '100%'}}>
                <div className={classes.headingRoot} style={{paddingTop: isSm ? '7rem' : '13rem'}}>                  
                    <div className={classes.greeting}>
                        Hi There! I'm
                    </div>
                    <div className={classes.name}>
                        AJ Adversalo
                        <div className={classes.underscore}></div>
                    </div>                                     
                    <div className={classes.intro}>
                        I'm a full-stack software developer passionate in creating robust, user-friendly web applications that make a difference.
                    </div>                         
                    <div style={{ paddingTop: '2rem' }}>
                        <Button  className={classes.resumeButton}                                                      
                            onClick={()=>{setOpen(true); setPage('resume')}}>
                                My Resume
                        </Button>
                    </div>
                </div>               
            </div>
            <div>
                <div className={isSm ? classes.iconRootNarrow : classes.iconRoot} style={height < 550 ? { position: 'relative', paddingTop: '2rem'} : {position: 'absolute', bottom: 15}}>
                    <IconButton onClick={() => window.open('https://www.linkedin.com/in/ajadversalo', '_blank')}>
                        {<LinkedInIcon className={classes.icon}/>}
                    </IconButton>
                    <IconButton onClick={()=>window.open('https://github.com/ajadversalo', '_blank')}>
                        {<GitHubIcon className={classes.icon} />}
                    </IconButton>
                </div>
            </div>
            <SwipeableDrawer
                anchor={isSm ? 'bottom' : 'right'}
                open={open}
                onClose={()=>{setOpen(false)}}
                onOpen={()=>{setOpen(true)}}
                classes={{ paper: page === 'contact' ? classes.drawerPaperContact : classes.drawerPaper }}                
            >
                <div className={isSm ? classes.drawerNarrow : classes.drawer} style={page === 'contact' ? {backgroundColor: '#FCFFFF'} : {}}>
                    <div className={classes.drawerHeader} style={page === 'contact' || page === 'resume' ? {backgroundColor: '#FCFFFF'} : {}}>
                        <IconButton 
                            onClick={()=>{setOpen(false); setPage('');}}
                            style={{paddingLeft: '0.8rem'}}                        
                        >
                            {<CloseIcon className={classes.closeButton}/>}
                        </IconButton>
                        { page === 'resume' &&
                            <Tooltip title='download' placement='right'>
                                <IconButton onClick={onDownload}>
                                    {<SaveAltIcon style={{ fill: 'grey' }} />}
                                </IconButton>
                            </Tooltip>
                        }
                    </div>
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

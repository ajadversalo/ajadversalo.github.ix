import React, { useState, useEffect, useRef, useCallback } from 'react';
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
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import emailjs from 'emailjs-com';

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
        height: '100%',
        width: '25rem'
    },
    drawerNarrow: {
        padding: '1rem',
        height: '100%'
    },
    contactInfoRoot: {
        width: '16rem',
        paddingTop: '2rem'
    }, 
    contactInfoItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    contactInfoItemValue: {
        textAlign: 'left',
        width: '100%',
        paddingLeft: '1rem'
    },
    textBox: {
        width: '100%',
        margin: '0.5rem 0',
        backgroundColor: '#FFF'
    },
    buttonSendRoot: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'end'
    }
}));

function App() {
    const { classes } = useStyles();
    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));

    const [open, setOpen] = useState(false);
    const [page, setPage] = useState('');
    
    const form = useRef();

    const About = () => {
        return(
            <div style={{paddingTop: '2rem'}}>            
                <Avatar alt="AJ Adversalo" src="face.jfif" />
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

    const Projects = () => {
        return(
            <>            
                <h1>Projects</h1>
            </>
        );
    }

    const Contact = () => {
        const [fromName, setFromName] = useState('');
        const [fromEmail, setFromEmail] = useState('');

        const handleInputChange = (e) => {

            setFromName(e.target.value);
        
    }
    
        return(
            <>
                <div className={classes.contactInfoRoot}>            
                    <h1>Contact Me</h1>
                    <div className={classes.contactInfoItem}>
                        <HomeIcon/>
                        <Typography className={classes.contactInfoItemValue}>28-16016 82 Ave. Surrey, BC</Typography>
                    </div>
                    <div className={classes.contactInfoItem}>
                        <LocalPhoneIcon/>
                        <Typography className={classes.contactInfoItemValue}>604-3582787</Typography>
                    </div>
                    <div className={classes.contactInfoItem}>
                        <EmailIcon/>
                        <Typography className={classes.contactInfoItemValue}>ajadvers@gmail.com</Typography>
                    </div>
                </div>
                <div style={{paddingTop: '1rem', width: '100%'}}>
                    <TextField
                        name='from-name' 
                        label="Your Name" 
                        required
                        className={classes.textBox}
                        value={fromName}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Your Email" 
                        required
                        value={fromEmail} 
                        className={classes.textBox}
                    />
                    <TextField 
                        label="Your Message" 
                        required 
                        className={classes.textBox}
                        multiline
                        maxRows={4}
                        inputProps={{
                            style: {
                              height: "5rem",
                            },
                          }}
                    />
                    <div className={classes.buttonSendRoot}>
                        <Button onClick={handleButtonSend}>Send</Button>
                    </div>
                    <form ref={form} onSubmit={handleSendEmail} style={{visibility: 'hidden'}}>
                          <label>Name</label>
                          <input type='text' name='from_name' onChange={()=>{}} />
                          <input type='text' name='message' onChange={()=>{}}/>
                          <input id='button_send' type='submit' value='Send'/>
                    </form>
                </div>
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

    const handleSendEmail = (e) => {
        if(e){
            e.preventDefault();
            console.log('form.current', form.current)
            // Service Id: service_0cl4yjf
            // Template Id: template_c2ne7jm
            // Public key: ajonPi_KH7jk3zPCW
            // emailjs.sendForm('service_0cl4yjf', 'template_c2ne7jm', form.current, 'ajonPi_KH7jk3zPCW')
            // .then((result) => {
            //     console.log(result.text);
            // }, (error) => {
            //     console.log(error.text);
            // });
            console.log('x')
        }
    }

    const handleButtonSend = (e) => {
        console.log('yo')
        let buttonSend = document.getElementById('button_send');
        buttonSend.click();
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
                            onClick={()=>{setOpen(true); setPage('resume')}}
                        >
                                Resume
                        </Button>
                    </div>
                </div>               
            </div>
            <div>
                <div className={isSm ? classes.iconRootNarrow : classes.iconRoot}>
                    <IconButton style={{width: '2rem'}} onClick={() => window.open('https://www.linkedin.com/in/ajadversalo', '_blank')}>{<LinkedInIcon style={{fill: '#FFF'}} />}</IconButton>
                    <IconButton style={{ width: '2rem' }}>
                        {<GitHubIcon onClick={()=>window.open('https://github.com/ajadversalo', '_blank')} style={{ fill: '#FFF' }} />}
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
                    { page === 'contact' && <Contact/> }
                    { page === 'resume' && <Resume/> }
                </div>                
          </SwipeableDrawer>
        </div>
    );
}

export default App;

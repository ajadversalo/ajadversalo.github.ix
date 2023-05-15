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
import Avatar from '@mui/material/Avatar';
import CloseIcon from '@mui/icons-material/Close';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import Tooltip from '@mui/material/Tooltip';
import Card from '@mui/material/Card';

import Contact from './Contact';
import Resume from './Resume';

const useStyles = makeStyles()(() => ({
    root: {
        textAlign: 'center',
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
        height: '100%',
        width: '40rem',
        backgroundColor: '#EBEBEB'
    },
    drawerNarrow: {
        width: '100%',
        height: '100%',
        backgroundColor: '#EBEBEB'   
    },
    drawerHeader: {
        backgroundColor: '#C0C0C0', 
        width: '100%', 
        overflow: 'overlay', 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'start',
        justifyContent: 'space-between'
    },
    aboutRoot: {
        padding: '1rem 1.5rem 1rem 1rem', 
        paddingTop: '1rem'
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
        backgroundColor: '#CED0CE'
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
        document.title ='AJ - Full-Stack Dev';
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
    
    const About = () => {
        return(
            <div className={classes.aboutRoot}>            
                <Avatar alt="AJAdversalo" src="face.jfif" />
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

    const Projects = () => {

        const productList = [
            {title: 'TreatGx', desc: 'TreatGx generates medication options that are safe and effective for you by combining your genetics with up-to-date clinical evidence and information that you enter.'},
            {title: 'ReviewGx', desc: 'ReviewGx is a Medication Therapy Management tool that looks at evidence-based pharmacogenomics, deprescribing insights and clinical lab data to help you perform comprehensive medication reviews.'},
            {title: 'Alogogen', desc: 'Algogen is a powerful algorithmic generation tool that simplifies the process of creating pharmacogenetic algorithms. With its intuitive graphical interface for mapping entities and concepts, Algogen streamlines the algorithm development process. This application is exclusively designed for internal use by our experienced algorithm team, providing them with an efficient solution for generating complex algorithms.'},
            {title: 'TrackGx', desc: 'TrackGx is an application which allows you to effortlessly monitor the efficacy of your prescriptions by inputting crucial information. With its mobile-first design, you can conveniently track how your medications are working anytime, anywhere.'},
            {title: 'LabGx', desc: 'LabGx empowers healthcare providers to seamlessly integrate lab-reported genetic data into their clinical decision support systems. With LabGx, you can easily upload genetic data from laboratory reports, enabling more accurate and personalized treatment recommendations for patients.'},         
            {title: 'Patient Dashboard', desc: 'The Patient Dashboard is the petient portal where they can see their lab reports and medical reviews.'}
        ];

        // const productList = [
        //     {title: 'TreatGx', desc: 'TreatGx generates medication options that are safe and effective for you by combining your genetics with up-to-date clinical evidence and information that you enter. TreatGx has been developed to facilitate the shared decision-making process between you and your healthcare professional.'},
        //     {title: 'ReviewGx', desc: 'ReviewGx is a Medication Therapy Management tool that looks at evidence-based pharmacogenomics, deprescribing insights, clinical lab data and other patient-specific information to help you perform comprehensive medication reviews and keep patients safe and healthy.'},
        //     {title: 'Alogogen', desc: 'Algogen is a powerful algorithmic generation tool that simplifies the process of creating pharmacogenetic algorithms. With its intuitive graphical interface for mapping entities and concepts, Algogen streamlines the algorithm development process. This application is exclusively designed for internal use by our experienced algorithm team, providing them with an efficient solution for generating complex algorithms.'},
        //     {title: 'TrackGx', desc: 'TrackGx is an application which allows you to effortlessly monitor the efficacy of your prescriptions by inputting crucial information. With its mobile-first design, you can conveniently track how your medications are working anytime, anywhere.'},
        //     {title: 'LabGx', desc: 'LabGx empowers healthcare providers to seamlessly integrate lab-reported genetic data into their clinical decision support systems. With LabGx, you can easily upload genetic data from laboratory reports, enabling more accurate and personalized treatment recommendations for patients.'},         
        //     {title: 'Patient Dashboard', desc: ''}
        // ];

        // const Product = (props) => {
        //     return(
        //         <div style={{border: '1px solid #000', width: '6rem', textAlign: 'center', padding: '0.5rem', height: '1.5rem', margin: '1rem'}}>
        //             <div style={{marginTop: props.title === 'Patient Dashboard' ? '-0.6rem' : 0}}>{props.title}</div>
        //         </div>
        //     );
        // }

        const Product = (props) => {
            return(
                <Tooltip arrow classes={{tooltip: classes.tooltip, arrow: classes.tooltipArrow }} title={<span style={{fontSize: '0.8rem'}} >{props.desc}</span>}>
                    <Card style={{height: '1.5rem', padding: '1rem', margin: '0.8rem 0.5rem'}}>
                        {props.title}
                    </Card>
                </Tooltip>
            );
        }

        return(
            <div style={{padding: '1rem', paddingTop: '1rem'}}>            
                <h1>Projects</h1>
                <p>Below are the applications we've worked on either as 
                    part of the GenXys Product Suite or services that support it.
                    All of which are built using ReactJS, C#, .Net and MS SQL stack.
                    (Hover over the product cards to show their descriptions).
                </p>
                <div className={classes.projectPortal}>
                    <Tooltip classes={{tooltip: classes.tooltip, arrow: classes.tooltipArrow }} title={<span style={{fontSize: '0.8rem'}} >{'The GenXys Portal encapsulates all product offerings. Here users are able to select, and purchase licenses for a range of healthcare applications. The canadian site is hosted on https://cdn.portal.genxys.com/ and https://us.portal.genxys.com/ for the US site'}</span>}>
                        <h3 style={{padding: '1rem 0 0 1rem'}}>User Portal</h3>
                    </Tooltip>                   
                    <div style={{backgroundColor: 'lightgrey', maxWidth: '85%', margin: '0 auto', height: '80%', borderRadius: '8px'}}>
                        <h3 style={{padding: '1rem 0 0 1rem'}}>GenXys Product Suite</h3>
                        <div style={{
                            width: '90%', 
                            display: 'flex', 
                            flexDirection: 'row', 
                            justifyContent: 'space-between', 
                            minHeight: '9rem', 
                            flexWrap: 'wrap', 
                            paddingBottom: '0.5rem', 
                            margin: 'auto auto'
                            }}>
                            {productList.map((p) => {
                                return <Product title={p.title} desc={p.desc}/>
                            })}
                        </div>
                    </div>
                    <div style={{backgroundColor: 'transparent', height: '2rem'}}></div>
                </div>
            </div>
        );
    }
    
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
                style={{width:'100%' }}
                classes={{ paper: classes.drawerPaper }}
            >
                <div className={isSm ? classes.drawerNarrow : classes.drawer}>
                    <div className={classes.drawerHeader}>
                        <IconButton 
                            onClick={()=>{setOpen(false); setPage('');}}
                            style={{paddingLeft: '0.8rem'}}                        
                        >
                            {<CloseIcon/>}
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

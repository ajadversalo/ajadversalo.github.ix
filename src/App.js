import React, { useEffect } from 'react';
import './App.css';
import { makeStyles } from 'tss-react/mui';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const useStyles = makeStyles()(() => ({
    root: {
        textAlign: 'center',
        /*background: 'linear-gradient(#7286A0, #2F4858)',*/
       // height: '100vh',
        backgroundColor: '#023047',
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
        //paddingTop: '15rem',
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
        paddingTop: '1rem',
        width: '100%',
        float: 'right',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',        
        paddingTop: '3rem'
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
    }
}));

function App() {
    const { classes } = useStyles();
    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {    
        console.log('isSm', isSm)
    }, [isSm])

    return (
        <div className={classes.root} >
            <div>
                <div className={isSm ? classes.buttonRootNarrow : classes.buttonRoot}>
                    <div className='button'>About</div>
                    <div className='button'>Work</div>
                    <div className='button'>Contact</div>
                </div>
            </div>
            <div className="line delay" style={{left: '98%'}}></div>
            <div style={{height: '100%'}}>
                <div className={classes.headingRoot}>                  
                    <div style={{ fontSize: 'calc(0.5rem + 1vw)', color: '#CCDBDC', fontWeight: 600}}>Hi There! I'm</div>
                    <div style={{ fontSize: 'calc(2rem + 2vw)', padding: '1rem 0' }}>AJ Adversalo</div>                                     
                    <div style={{ fontSize: 'calc(1rem + 1vw)', color: '#CCDBDC' }}>I'm a full-stack software developer passionate in creating robust, user-friendly web applications that make a difference.</div>                         
                    <div style={{ paddingTop: '2rem' }}>
                        <Button className='resumeButton' style={{ padding: '0.5rem 1rem', color: '#FFF', border: '1px solid #FFF' }}>Resume</Button>
                    </div>
                </div>               
            </div>
            <div>
                <div className={classes.iconRoot}>
                    <IconButton style={{width: '2rem'}}>{<LinkedInIcon style={{fill: '#FFF'}} />}</IconButton>
                    <IconButton style={{ width: '2rem' }}>{<GitHubIcon style={{ fill: '#FFF' }} />}</IconButton>
                </div>
            </div>
        </div>
    );
}

export default App;

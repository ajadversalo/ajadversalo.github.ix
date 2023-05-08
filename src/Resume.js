import React, { useState, useRef, useCallback } from 'react';
import { makeStyles } from 'tss-react/mui';
import Typography from '@mui/material/Typography';
import { Document, Page } from 'react-pdf';

const useStyles = makeStyles()(() => ({
    root: {
        backgroundColor: 'lightgrey',   
        overflowX: 'hidden',
        overflowY: 'hidden'     
    },
    paper: {
        backgroundColor: '#FFF',
        margin: '1rem'
    },
    drawerPaper: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        left: '50%',
        marginLeft: '-350px',
        top: '30vh',
        width: '700px',
    },
    name: {
        fontSize: '2rem'
    },
    nameRoot:{
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
        paddingTop: '1rem'        
    },
    nameSubRoot:{
        padding: '0.1rem',
        border: '1px solid orange',
        width: '16rem',
        margin: 'auto',
        zIndex: 1,
        backgroundColor: '#FFF'
    },
    positionRoot:{
        backgroundColor: 'grey',
        padding: '1rem 0 0.5rem 0',
        marginTop: '-0.5rem',
        zIndex: 0
    },
    body: {
        display: 'flex',
        felxDirection: 'row'
    },
    left: {
        width: '30%',
        textAlign: 'right',
        padding: '0 1rem 1rem 1rem',
    },
    right: {
        width: '70%',
        textAlign: 'left',
        padding: '0 2rem 1rem 1rem',
    },
    fontSizeRegular: {
        fontSize: '0.8rem'
    },
    fontSizeLarge: {
        fontSize: '1.2rem',
        fontWeight: 600
    },
    fontSizeSmall: {
        fontSize: '0.7rem'
    },
    section: {
        paddingTop: '1rem'
    },
    contentDivider: {
        padding: '0.3rem 0'
    }
}));

function Resume(props) {
    const {  } = props;
    const { classes } = useStyles();

    const ref = React.createRef();

    return(
        <div className={classes.root}>
            {/*
            <Document file="./AJAdversalo-FullStack.pdf" onLoadSuccess={()=>{}}>
                
            </Document>
          
            <div style={{height: '4rem'}} /> 
            */}
            <iframe src='AJAdversalo-FullStack.pdf'style={{width: '50rem', height: '50rem', overflow: 'hidden'}} />
            {/*
            <div className={classes.paper} ref={ref}>
                <div style={{textAlign: 'center'}}>
                    <div className={classes.nameRoot}>
                        <div className={classes.nameSubRoot}>
                            <Typography className={classes.name}>AJ Adversalo</Typography>
                        </div>
                    </div>
                    <div className={classes.positionRoot}>
                        <Typography>Software Engineer</Typography>
                    </div>
                </div>
                
                <div className={classes.body}>
                    <div className={classes.left}>
                        <div className={classes.section}>
                            <Typography className={classes.fontSizeLarge}>Contact</Typography>
                            <Typography className={classes.fontSizeRegular}>ajadvers@gmail.com</Typography>
                            <Typography className={classes.fontSizeRegular}>(604) 358-2787</Typography>
                            <Typography className={classes.fontSizeRegular}>Surrey, BC</Typography>
                            <Typography className={classes.fontSizeRegular}>www.ajadversalo.ca</Typography>
                            <Typography className={classes.fontSizeRegular}>www.linkedin.com/in/ajadversalo</Typography>
                            <Typography className={classes.fontSizeRegular}>www.github.com/ajadversalo</Typography>
                        </div>
                        <div className={classes.section}>
                            <Typography className={classes.fontSizeLarge}>Education</Typography>
                            <Typography className={classes.fontSizeRegular}>Software Systems Developer Certificate (with Distinction)</Typography>
                            <Typography className={classes.fontSizeRegular}>BCIT, 2019</Typography>
                            <div className={classes.contentDivider}/>
                            <Typography className={classes.fontSizeRegular}>Bachelor of Science in Information Technology</Typography>
                            <Typography className={classes.fontSizeRegular}>Saint Louis University, Philippines, 2009</Typography>                            
                        </div>
                        <div className={classes.section}>
                            <Typography className={classes.fontSizeLarge}>Skills</Typography>
                            <Typography className={classes.fontSizeRegular}>Javascript, C#, Java</Typography>
                            <Typography className={classes.fontSizeRegular}>ReactJs, Redux, MaterialUI</Typography>
                            <Typography className={classes.fontSizeRegular}>SQL</Typography>
                            <Typography className={classes.fontSizeRegular}>HTML, CSS</Typography>                            
                        </div>
                    </div>
                    <div className={classes.right}>
                        <div className={classes.section}>
                            <Typography className={classes.fontSizeLarge}>Career Objective</Typography>
                            <Typography className={classes.fontSizeSmall}>To secure a challenging position as a full-stack developer in a dynamic and innovative company where I can apply my skills and knowledge to contribute to the success of the organization. My objective is to work with a team of like-minded individuals who are passionate about building high-quality software applications that solve real-world problems. I am committed to staying up-to-date with the latest industry trends and technologies, and I am eager to take on new challenges and responsibilities as they arise.</Typography>                 
                        </div>
                        <div className={classes.section}>
                            <Typography className={classes.fontSizeLarge}>Work Experience</Typography>                            
                        </div>
                    </div>
                </div>
                
            </div>
            */}                  
        </div>
    );
}

export default Resume;

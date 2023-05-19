import React from 'react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
    root: {
        padding: '0 0.5rem 0 0.5rem',
        color: '#587792' 
    }
}));

function About() {
    const { classes } = useStyles();
    return(
        <div className={classes.root} style={{height: '100%'}}>            
            <div style={{padding: '0 1rem'}}>
                <h2 className={classes.title}>About Me</h2>
                <div className={classes.contentText}>
                    <p>My name is AJ, and I am a passionate software developer based in beautiful Vancouver, British Columbia. I moved to Canada in 2016, and in 2019, I made a significant career transition into the world of software development. With a background in IT and a keen eye for detail, I was inspired to pursue this new path to create innovative solutions that make a tangible impact. I thrive on the challenge of bringing ideas to life through code, and I take great pride in my ability to deliver high-quality work that meets and exceeds expectations. Whether it's developing robust applications or troubleshooting complex issues, I approach every project with meticulous attention to detail and a relentless drive to get the job done.</p>
                    <p>I had the incredible opportunity to further enhance my skills as a full-stack software developer during my time at GenXys. As part of a dynamic team of four, we collaborated closely to create a comprehensive suite of applications that revolutionized the way healthcare professionals interact with patient data. From designing intuitive user interfaces to implementing robust backend functionality, I contributed to every stage of the development process, ensuring seamless integration and exceptional user experience. Working in a fast-paced environment, I learned the value of effective teamwork, agile development methodologies, and delivering high-quality solutions that aligned with the company's vision. It was an enriching experience that further solidified my passion for creating impactful software solutions.</p>    
                    <p>If you're in need of a skilled and dedicated software developer, I would be thrilled to discuss how I can contribute to your project. With my expertise in software development, attention to detail, and commitment to delivering exceptional results, I am confident in my ability to tackle any challenge and provide innovative solutions tailored to your specific needs. Whether you're looking to build a web application, enhance an existing software system, or collaborate on a new project, I am ready to bring my passion and expertise to the table. Don't hesitate to reach out and get in touch - let's bring your vision to life!</p>                    
                </div>
            </div>
        </div>
    );
}

export default About;

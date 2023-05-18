import React, {useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import Card from '@mui/material/Card';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const useStyles = makeStyles()(() => ({
    root: {
        padding: '0 1.5rem 1rem 1rem',
    }, 
}));

function Projects() {
    const { classes } = useStyles();

    const [expanded, setExpanded] = useState('panel1');

    const ProductCard = (props) => {            
        return (
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{minWidth: '7rem', maxWidth: '7rem'}}>
                    <Card style={{padding: '0.1rem 0.2rem', margin: '0.5rem 0.5rem'}}>
                        <div style={{textAlign: 'center', paddingBottom: '0.2rem'}}>{props.title}</div>
                        <img src={`./productImages/${props.image}`} style={{maxWidth: '100%'}}></img>
                    </Card>
                </div>
                <div style={{fontSize: '0.8rem', minWidth: '10rem', maxWidth: '30rem', paddingTop: '0.5rem', color: '#FFF'}}>
                    {props.desc}
                </div>
            </div>

        )
    }

    const productList = [
        {
            title: 'TreatGx', 
            desc: 'TreatGx generates medication options that are safe and effective for you by combining your genetics with up-to-date clinical evidence and information that you enter.',
            image: 'treatgx.jpg'
        },                
        {
            title: 'ReviewGx', 
            desc: 'ReviewGx is a Medication Therapy Management tool that looks at evidence-based pharmacogenomics, deprescribing insights and clinical lab data to help you perform comprehensive medication reviews.',
            image: 'reviewgx.jpg'
        },
        {
            title: 'Alogogen', 
            desc: 'Algogen is an internal application used by the algorithm developers to create complex pharmacogenetic algorithms.',
            image: 'algogen.jpg'
        },
        {
            title: 'TrackGx', 
            desc: 'TrackGx is mobile first application which allows patients to effortlessly monitor the efficacy of their prescriptions.',
            image: 'trackgx.jpg'
        },
        {
            title: 'LabGx', 
            desc: 'LabGx enables uploading genetic data from laboratory results.',
            image: 'labgx.jpg'
        },         
        {
            title: 'Patient Dashboard', 
            desc: 'The Patient Dashboard is the petient portal where they can see their lab reports and medication reviews.',
            image: 'patientDashboard.jpg'
        }
    ];

    const handleChange = (panel) => (e, isExpanded) => {
        if(panel === 'panel2'){
            setExpanded(isExpanded ? 'panel2' : 'panel1');
        }
        if(panel === 'panel1'){
            setExpanded(isExpanded ? 'panel1' : 'panel2');
        }
    };

    return(
        <div className={classes.root}>                                           
            <h2 style={{color: '#000', paddingLeft: '1.5rem', color: '#FFF', marginBottom: 0}}>Projects</h2>                
            <Accordion style={{backgroundColor: 'transparent', boxShadow: 'none'}} defaultExpanded={true}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{fill: '#FFF'}}/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <div style={{paddingLeft: '0.5rem', color: '#FFF'}}>GenXys Applications</div>
                </AccordionSummary>
                <AccordionDetails>
                    <div style={{fontSize: '0.8rem', paddingLeft: '0.5rem', paddingBottom: '1rem', color: '#FFF'}}>Together with 3 other developers, we've built several web applications for GenXys utilizing ReactJS, C#, .Net Core, MS SQL and Azure.</div>
                    {productList.map((p) => {
                        return (<ProductCard title={p.title} desc={p.desc} image={p.image}/>)
                    })}
                </AccordionDetails>
            </Accordion>
            <Accordion style={{backgroundColor: 'transparent', boxShadow: 'none'}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{fill: '#FFF'}}/>}
                    aria-controls="panel1b-content"
                    id="panel1b-header"
                    style={{borderBottom: '1px solid lightgrey'}}
                >
                    <div style={{paddingLeft: '0.5rem', color: '#FFF'}}>Personal</div>
                </AccordionSummary>
                <AccordionDetails>                
                </AccordionDetails>
            </Accordion>        
        </div>
    );
}

export default Projects;

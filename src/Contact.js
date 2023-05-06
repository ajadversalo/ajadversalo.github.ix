import React, { useState, useRef, useEffect } from 'react';
import { makeStyles } from 'tss-react/mui';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import emailjs from 'emailjs-com';

const useStyles = makeStyles()(() => ({
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

function Contact(props) {
    const { openErrorMsg, setOpenErrorMsg, openSuccessMsg, setOpenSuccessMsg, setOpen } = props;
    const { classes } = useStyles();
    const form = useRef();

    const [fromName, setFromName] = useState('');
    const [fromEmail, setFromEmail] = useState('');
    const [message, setMessage] = useState('');
    
    useEffect(() => {
        setOpenErrorMsg(true);
    }, []);

    const handleInputChange = (e) => {
        if(e){
            switch(e.target?.name){                    
                case 'from-name':
                    setFromName(e.target.value);
                    break;
                case 'from-email':
                    setFromEmail(e.target.value);
                    break;
                case 'message':
                    setMessage(e.target.value);
                    break;
                default:
                    break;
            }
        }            
    }

    const handleButtonSend = (e) => {
        let buttonSend = document.getElementById('button_send');
        buttonSend.click();
    }

    const handleSendEmail = (e) => {
        if(e){
            e.preventDefault();
            console.log('form.current', form.current)
            /* -------------------------------------
                Service Id: service_0cl4yjf
                Template Id: template_c2ne7jm
                 Public key: ajonPi_KH7jk3zPCW
            ------------------------------------- */ 
            emailjs.sendForm('service_0cl4yjf', 'template_c2ne7jm', form.current, 'ajonPi_KH7jk3zPCW')
            .then((result) => {
                console.log(result.text);
                if(result.text){
                    setOpenSuccessMsg(true);
                    setOpen(false);
                }
            }, (error) => {
                console.log(error.text);
            });
            console.log('x')
        }
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
                    <Typography className={classes.contactInfoItemValue}>(604) 358-2787</Typography>
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
                    name='from-email'
                    label="Your Email" 
                    required
                    value={fromEmail} 
                    className={classes.textBox}
                    onChange={handleInputChange}
                />
                <TextField
                    name='message' 
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
                    value={message}
                    onChange={handleInputChange}
                />
                <div className={classes.buttonSendRoot}>
                    <Button onClick={handleButtonSend}>Send</Button>
                </div>
                <form ref={form} onSubmit={handleSendEmail} style={{visibility: 'hidden'}}>
                    <div><input type='text' name='from_name' onChange={()=>{}} value={fromName}/></div>
                    <div><input type='text' name='from_email' onChange={()=>{}} value={fromEmail}/></div>
                    <div><input type='text' name='message' onChange={()=>{}} value={message}/></div>
                    <div><input id='button_send' type='submit' value='Send'/></div>                                                    
                </form>                
            </div>
        </>
    );
}

export default Contact;

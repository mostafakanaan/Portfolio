import React, { Component } from 'react'
import MyIcon from './Utils/MyIcon'
import { TextField, Button, CircularProgress, Snackbar, Fade } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'
import { withStyles } from '@material-ui/core/styles'
import { Jumbotron, Row } from 'react-bootstrap'

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#8D2C92',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#8D2C92',
        },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: '#8D2C92',
            },
        },
    },
})(TextField);


export default class Contact extends Component {
    constructor() {
        super();
        this.state = { success: false, error: false, loading: "hide" };
    }

    handleSubmit = (event) => {

        if (this.state.loading === "show")
            return;

        this.setState({ loading: "show" });

        const scriptURL = 'https://script.google.com/macros/s/AKfycbzgWm6ABYpijE48n6fVCMyEjIvBsfj6WXS72B__mW9FB1OQPw74-C3s/exec'
        const form = document.forms['submit-to-google-sheet']

        event.preventDefault();

        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(() => {
                this.setState({ success: true, loading: "hide" });
                form.reset();
                document.getElementById("home").scrollIntoView(true, { behavior: 'smooth' });
            })
            .catch(() => this.setState({ error: true, loading: "hide" }));
    }

    handleClose = () => {
        this.setState({ success: false, error: false })
    }

    render() {
        return (
            <div className="Page" id="contact">
                {/* <div className='WelcomeText'>
                <h1><MyIcon uri='https://twitter.com/mkanaan_de' icon='fab fa-linkedin-in' /></h1>
                    <h1><MyIcon uri='https://twitter.com/mkanaan_de' icon='fab fa-twitter' /></h1>
                    <h1><MyIcon uri='https://github.com/mostafakanaan' icon='fab fa-github' /></h1>
                    <h1><MyIcon uri='https://facebook.com/SteveKanaan/' icon='fab fa-facebook' /></h1>
                    <h1><MyIcon uri='https://instagram.com/_dermusti/' icon='fab fa-instagram' /></h1>
                    <h1><MyIcon uri='mailto:muus.kaan@hotmail.com' icon='far fa-envelope' /></h1>
                </div> */}

                <Jumbotron fluid id="contactJumbotron">

                    <h2 className='dark-text'>Hello there,</h2>
                    <h5 className='dark-text'>Get in touch using the form below or email me
                    <MyIcon uri='mailto:work@mkanaan.de' icon='far fa-envelope' /> </h5>
                    <MyIcon uri='https://de.linkedin.com/in/mos-kan' icon='fab fa-linkedin-in dark-text' />
                    <MyIcon uri='https://twitter.com/mkanaan_de' icon='fab fa-twitter dark-text' />
                    <MyIcon uri='https://github.com/mostafakanaan' icon='fab fa-github dark-text' />
                    <MyIcon uri='https://facebook.com/SteveKanaan/' icon='fab fa-facebook dark-text' />
                    <MyIcon uri='https://instagram.com/_dermusti/' icon='fab fa-instagram dark-text' />

                    <br></br>
                    <br></br>
                    <form autoComplete="off" name="submit-to-google-sheet" onSubmit={this.handleSubmit}>
                        <CssTextField required className="input" label="Name" variant="outlined" name="name" />
                        <br></br>
                        <br></br>
                        <CssTextField required className="input" label="Email" variant="outlined" name="email" />
                        <br></br>
                        <br></br>
                        <CssTextField className="input" label="Phone Number" variant="outlined" name="number" />
                        <br></br>
                        <br></br>
                        <CssTextField required className="input" label="Message" rows={3} variant="outlined" multiline name="message" />
                        <br></br>
                        <Row className={this.state.loading}>
                            <CircularProgress id="submitting" />
                        </Row>
                        <Button type="submit" id="submitBtn" variant="contained">
                            <span>Send <i className="fas fa-paper-plane"></i></span>
                        </Button>
                        <Snackbar open={this.state.success} autoHideDuration={5000} onClose={this.handleClose} TransitionComponent={Fade}>
                            <Alert severity="success">
                                Message delivered - I will write you back ASAP!
                            </Alert>
                        </Snackbar>
                        <Snackbar open={this.state.error} autoHideDuration={5000} onClose={this.handleClose}>
                            <Alert severity="error">
                                Something went wrong - Please try again later!
                            </Alert>
                        </Snackbar>
                    </form>


                </Jumbotron>
            </div>
        )
    }
}

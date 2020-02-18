import React from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { bindActionCreators } from "redux";
import { signUpCustomer } from "../actions/index";
//material-ui
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles(theme => ({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        marginTop: 10,
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: "white",
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(4),
        marginBottom: theme.spacing(3),
    },
    typo: {
        marginTop: 40,
        marginBottom: -40,
    }
}));

function Verify(props) {
    const classes = useStyles();
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const verificationCode = window.localStorage.getItem('verificationCode');
        const email = window.localStorage.getItem('email');
        const verifyResp = { verificationCode, email }

        console.log(verifyResp, data)
        if (verificationCode === data.verificationCode) {
            props.signUpCustomer("confirmCustomer", verifyResp)
                .then((response) => {
                    if (response.success) {
                        window.localStorage.setItem('clientId', response.clientId);
                        props.history.push("/setpassword");
                    }
                })
        } else {
            alert("Code invalid");
        }
    };

    const handleClick = () => {
        const firstName = window.localStorage.getItem('firstnameR');
        const lastName = window.localStorage.getItem('lastnameR');
        const dob = window.localStorage.getItem('dobR');
        const email = window.localStorage.getItem('email');
        const phone = window.localStorage.getItem('phoneR');

        const resendCode = { firstName, lastName, dob, email, phone }

        props.signUpCustomer("signupCustomer", resendCode)
            .then((response) => {
                console.log(response)
                if (response.success) {
                    window.localStorage.setItem('verificationCode', response.verificationCode);
                    window.localStorage.setItem('email', response.email);
                    props.history.push("/verify");
                }
            })


    }



    return (
        <Container component="main" maxWidth="xs">
            <Typography className={classes.typo} component="h1" variant="h5">
                Verify your account...
            </Typography>
            <div className={classes.paper}>
                <Box border={2} boxShadow={3}>
                    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={1}>
                            <Grid item xs={9} sm={9}>
                                <TextField
                                    inputRef={register}
                                    type="text"
                                    required
                                    name="verificationCode"
                                    id="verificationCode"
                                    label="Verification Code"
                                    autoFocus
                                    variant="outlined"
                                    fullWidth
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    className={classes.root}
                                >Verify</Button>
                                <Button
                                    onClick={handleClick}
                                    fullWidth
                                    className={classes.root}
                                >Resend Code</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </div>
        </Container>
    );
};

const mapStateToProps = state => {
    return {
        postResponse: state.postResponse,
        error: state.error,
        pending: state.pending
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    signUpCustomer: signUpCustomer
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Verify);
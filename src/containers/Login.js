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

var Login = (props) => {
    const classes = useStyles();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        if (data.username.includes("@")) {
            const email = data.username;
            const password = data.password;
            var loginData = { email, password }
            console.log(loginData);
        } else {
            const phone = data.username;
            const password = data.password;
            loginData = { phone, password }
        }
        props.signUpCustomer("login", loginData)
            .then((response) => {
                console.log(response)
                if (response.success) {
                    window.localStorage.setItem('firstName', response.firstName);
                    alert(response.clientId);
                    props.history.push("/");
                } else {
                    alert(response.message);
                }
            })
    }
    return (
        <Container component="main" maxWidth="xs">

            <Typography className={classes.typo} component="h1" variant="h5">
                Login...
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
                                    name="username"
                                    id="username"
                                    label="Username"
                                    autoFocus
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={9} sm={9}>
                                <TextField
                                    inputRef={register}
                                    type="password"
                                    required
                                    name="password"
                                    id="password"
                                    label="Password"
                                    autoFocus
                                    variant="outlined"
                                    fullWidth
                                />
                                <Button
                                    type="submit"
                                    className={classes.root}
                                    fullWidth
                                >Login</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </div>
        </Container>
    );
}
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
)(Login);
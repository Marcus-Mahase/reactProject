import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { bindActionCreators } from "redux";
import { signUpCustomer } from "../actions/index";
import { Link } from "react-router-dom";

//material-ui
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
//Date Picker
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker } from "@material-ui/pickers";




const useStyles = makeStyles(theme => ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
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

function SignUp(props) {

  const [selectedDate, handleDateChange] = useState(new Date());
  const classes = useStyles();
  //register all the inputs
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {

    window.localStorage.setItem('firstnameR', data.firstName);
    window.localStorage.setItem('lastnameR', data.lastName);
    window.localStorage.setItem('dobR', data.dob);
    window.localStorage.setItem('phoneR', data.phone);

    props.signUpCustomer("signupCustomer", data)
      .then((response) => {
        console.log(response)
        console.log(data)
        if (response.success) {
          window.localStorage.setItem('verificationCode', response.verificationCode);
          window.localStorage.setItem('email', response.email);

          props.history.push("/verify");
        } else {
          alert(response.message);
        }
      })
  };

  /*const loginButton = () => {
    props.history.push("/login");
  }*/

  return (
    <Container component="main" maxWidth="xs">

      <Typography className={classes.typo} component="h1" variant="h5">
        Let's get started...
        </Typography>
      <div className={classes.paper}>
        <Box border={2} boxShadow={3}>
          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>

            <Grid container spacing={1}>
              <Grid item xs={9} sm={9}>

                {/*First Name Input*/}
                <TextField
                  inputRef={register}
                  type="text"
                  required
                  name="firstName"
                  id="firstName"
                  label="First Name"
                  autoFocus
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={9} sm={9}>
                {/*Last Name Input*/}
                <TextField
                  inputRef={register}
                  type="text"
                  required
                  name="lastName"
                  id="lastName"
                  label="Last Name"
                  autoFocus
                  variant="outlined"
                  fullWidth
                />
              </Grid>

              <Grid item xs={9} sm={9}>
                {/*Date of Birth Input*/}
                {/*<TextField
                  inputRef={register}
                  type="text"
                  required
                  name="dob"
                  id="date-picker-inline"
                  label="Date of Birth"
                  autoFocus
                  variant="outlined"
                  fullWidth
                />*/}
              </Grid>

              <Grid item xs={9} sm={9}>
                {/*Date of Birth Input*/}
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Fragment>
                    <DatePicker
                      inputRef={register}
                      required
                      name="dob"
                      disableFuture
                      openTo="year"
                      format="yyyy-MM-dd"
                      label="Date of Birth"
                      views={["year", "month", "date"]}
                      value={selectedDate}
                      onChange={handleDateChange}
                      fullWidth
                      inputVariant="outlined"
                    />
                  </Fragment>
                </MuiPickersUtilsProvider>
              </Grid>

              <Grid item xs={9} sm={9}>
                {/*E-Mail Input*/}
                <TextField
                  inputRef={register}
                  type="email"
                  required
                  name="email"
                  id="email"
                  label="E-Mail"
                  autoFocus
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={9} sm={9}>
                {/*Phone Number Input*/}
                <TextField
                  inputRef={register}
                  type="tel"
                  required
                  name="phone"
                  id="phone"
                  label=" Phone Number"
                  autoFocus
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={9} sm={9}>
                {/*Submit Button */}
                <Button
                  type="submit"
                  color="primary"
                  fullWidth
                  className={classes.root}>Sign Up</Button>
              </Grid>
              <Grid item xs={9} sm={9}>
                {/*<Button
                  onClick={loginButton}
                  className={classes.root}
                  fullWidth
                >Login</Button>*/}
                <Link to="/login">Already have an account? Login.</Link>
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
)(SignUp);

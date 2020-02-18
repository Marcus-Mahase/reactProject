import React from 'react';
import Modal from './Modal';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
}));

const Header = () => {
    const classes = useStyles();
    return (
        <header>

            <br />
            <div className={classes.heroContent}>
                <Container maxWidth="sm">
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        React Application
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        This page is where we will learn how to implement material-ui components such as the nav bar, cards and lots more.
                    </Typography>
                    <div className={classes.heroButtons}>
                        <Grid container spacing={2} justify="center">
                            <Grid item>
                                <Button variant="contained" color="primary" href="/signup">
                                    Sign Up
                                </Button>
                            </Grid>
                            <Grid item>
                                {/*<Button variant="outlined" color="primary" href="/login">
                                    Login
                                </Button>*/}
                                <Modal />
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
        </header>

    );
}

export default Header;
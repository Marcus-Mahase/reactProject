import React, { Fragment } from "react";
import Header from "./Header";
import Card from "./Card";
import Nav from './Nav';
import Divider from '@material-ui/core/Divider';
import { Grid } from "@material-ui/core";
import Scroll from './Scroll';
import { Parallax } from "react-parallax";

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};
const insideStyles = {
    background: "white",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
};

const image1 = "http://getwallpapers.com/wallpaper/full/6/4/c/1506102-most-popular-wallpaper-beaches-caribbean-1920x1200-for-mac.jpg";
const image2 = "http://getwallpapers.com/wallpaper/full/3/8/5/1506089-wallpaper-beaches-caribbean-1920x1200-image.jpg";

const Home = () => {
    return (
        <Fragment>
            <Nav />
            <br /><br /><br />
            <div style={styles}>
                <Parallax bgImage={image1} strength={500}>
                    <div style={{ height: 600 }}>
                        <div style={insideStyles}>
                            <Header>
                                <Header />
                            </Header>
                        </div>
                    </div>
                </Parallax>
                <br />
                <Divider /><Divider />
                <br />
                <Parallax>
                    <div style={{ height: 600 }}>
                        <h2 style={{ textAlign: "left" }}>Browse our featured products...</h2>
                        <Scroll>
                            <Grid container spacing={0}>
                                <Grid item xs={4}>
                                    <Card />
                                </Grid>
                                <Grid item xs={4}>
                                    <Card />
                                </Grid>
                                <Grid item xs={4}>
                                    <Card />
                                </Grid>
                            </Grid>
                            <br />
                            <Grid container spacing={0}>
                                <Grid item xs={4}>
                                    <Card />
                                </Grid>
                                <Grid item xs={4}>
                                    <Card />
                                </Grid>
                                <Grid item xs={4}>
                                    <Card />
                                </Grid>
                            </Grid>
                        </Scroll>
                    </div>
                </Parallax>
                <br />
                <Divider /><Divider />
                <br />

                <Parallax bgImage={image2} strength={500}>
                    <div style={{ height: 500 }}>
                        <div style={insideStyles}>
                            <h1>Don't stop learning.</h1>
                        </div>
                    </div>
                </Parallax>
            </div>
            <Nav />
        </Fragment>

    );
}

export default Home;
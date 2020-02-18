import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function MediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://www.vividracing.com/images/17020613.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Nissan GT-R
          </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        The Nissan GT-R is a sports car produced by Nissan, which was unveiled in 2007.
                        It is the successor to the Skyline GT-R. Engine: 3.8L Twin-Turbocharged, Transmission: 6 speed Dual Clutch.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
        </Button>
                <Button
                    size="small"
                    color="primary"
                    href="https://www.nissanusa.com/vehicles/sports-cars/gt-r.html"
                >
                    Learn More
        </Button>
            </CardActions>
        </Card>
    );
}
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

export default function ComplexGrid() {
    const classes = useStyles();
    const imgUrl = "data:image/jpeg;base64,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";
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="complex" src={imgUrl} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                    Standard license
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Full resolution 1920x1080 • JPEG
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    ID: 1030114
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                    Remove
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1">$19.00</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

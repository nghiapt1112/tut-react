import React from "react";
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import AcUnitIcon from '@material-ui/icons/AcUnit';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    typographyStyle: {
        flex: 1
    }
}));
const Header = () => {
    const classes = useStyles();
    return <AppBar position="static">
        <Toolbar>
            <Typography className={classes.typographyStyle}> This is our header</Typography>
            <AcUnitIcon/>
        </Toolbar>
    </AppBar>
}

export default Header;
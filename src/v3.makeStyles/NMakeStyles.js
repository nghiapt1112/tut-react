import React from "react";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
const useStyles = makeStyles({
    buttonStyle: props => {
        return {
            color: props.cool ? "blue" : "red",
            backgroundColor: props.cool ? "orange" : "pink"
        }
    },
    textStyle: {
        color: "green"
    }
})
const NMakeStyles = (props) => {
    const classes = useStyles(props);
    return (
        <>
            <Button className={classes.buttonStyle}>asasas</Button>
            <h1 className={classes.textStyle}> This is text style</h1>
        </>
    )
}

export default NMakeStyles;
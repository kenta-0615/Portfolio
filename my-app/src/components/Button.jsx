import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    button: (props) => ({
        width: props.width,
        height: props.height,
        backgroundColor: props.backgroundColor
    })
});

export const Button = (props) => {
    const classes = useStyles(props);
    return (
    <button className={classse.button} oncClick={props.oncClick}>
        {props.class}
    </button>
    );
};

export default Button;
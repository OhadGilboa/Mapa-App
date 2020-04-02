import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import { inject, observer } from 'mobx-react';


const useStyles = makeStyles((theme) => ({
    root: {
        width: 180 + theme.spacing(3) * 2,
    },
    margin: {
        height: theme.spacing(3),
    },
}));

function ValueLabelComponent(props) {
    const { children, open, value } = props;

    return (
        <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
            {children}
        </Tooltip>
    );
}

ValueLabelComponent.propTypes = {
    children: PropTypes.element.isRequired,
    open: PropTypes.bool.isRequired,
    value: PropTypes.number.isRequired,
};

const iOSBoxShadow =
    '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const marks = [
    {
        value: 1,
    },
    {
        value: 2,
    },
    {
        value: 5,
    },
    {
        value: 10,
    },
];

const IOSSlider = withStyles({
    root: {
        color: '#3880ff',
        height: 2,
        padding: '15px 0',
    },
    thumb: {
        height: 28,
        width: 28,
        backgroundColor: '#fff',
        boxShadow: iOSBoxShadow,
        marginTop: -14,
        marginLeft: -14,
        '&:focus, &:hover, &$active': {
            boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
                boxShadow: iOSBoxShadow,
            },
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 11px)',
        top: -22,
        '& *': {
            background: 'transparent',
            color: '#000',
        },
    },
    track: {
        height: 2,
    },
    rail: {
        height: 2,
        opacity: 0.5,
        backgroundColor: '#bfbfbf',
    },
    mark: {
        backgroundColor: '#bfbfbf',
        height: 8,
        width: 1,
        marginTop: -3,
    },
    markActive: {
        opacity: 1,
        backgroundColor: 'currentColor',
    },
})(Slider);




const CustomizedSlider = inject("userData")(observer((props) => {
    const [range, setRange] = useState(9);


    const classes = useStyles();
    console.log(props.userData.rangeValue)

    const handleChange = (e, value) => {
        props.userData.setRange(value)
        setRange(value)
    }

    useEffect(() => {
        // setRange(props.userData.user.range)
    });

    return (
        <div className={classes.root}>
            {console.log(props.userData.user.range)}
            {console.log(range)}
            <Typography gutterBottom>iOS</Typography>
            <IOSSlider max={10} aria-label="ios slider" onChangeCommitted={handleChange} defaultValue={props.userData.user.range || range} marks={marks} valueLabelDisplay="on" />
        </div>
    );
}))
export default CustomizedSlider


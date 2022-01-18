import React from 'react';

import style from './CurrentTime.module.css';
import Slider from '@material-ui/core/Slider';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import ValueLabel from "@material-ui/core/es/Slider/ValueLabel";
import withStyles from "@material-ui/core/es/styles/withStyles";
import moment from 'moment';
const StyledValueLabel = withStyles({
    offset: {

    },
    circle: {
       backgroundColor: 'rgba(0,0,0,0.5)'
        
    },
    label: {

    }
})(ValueLabel);

const muiTheme = createMuiTheme({
    overrides:{
        root: {
            width :100,
        },
        MuiSlider: {
            thumb:{
                color: "#3e6fa3",
                height: 10,
                width: 10,
                marginTop : -4,
            },
            track: {
                color: '#8098c2',
            },
            rail: {
                color: '#a0a6af',
            },
            mark: {
                backgroundColor: "#bfbfbf",
                height: 8,
                width: 1,
                marginTop: -2
            }
        }
    }
});
const CurrentTime = (props) => {
    let [state, setState] =React.useState({
        labelVisability : false
    })
    const handleChange = (event, newValue) => {
        props.onCurrentTimeChange(event,newValue);
    };
    let culcCurrentTime = (value) => {
        console.log(value)
        let currentTime = moment.duration(props.duration*value/100, "seconds").format('mm:ss', { trim: false });
        return currentTime;
    }
    let setLableVisible = () => {
        setState({...state, labelVisability: !state.labelVisability})
    }
    return (
        <div className={style.root}
             onMouseEnter={()=> setLableVisible()}
             onMouseLeave={()=> setLableVisible()}
        >
            <ThemeProvider theme={muiTheme}>
                <Slider
                    value={props.progress*100}
                    onChange={handleChange}
                    aria-labelledby="continuous-slider"
                    valueLabelDisplay={state.labelVisability}
                    ValueLabelComponent={StyledValueLabel}
                    valueLabelFormat={value => culcCurrentTime(value)}
                />
            </ThemeProvider>
        </div>
    )
}

export default CurrentTime;
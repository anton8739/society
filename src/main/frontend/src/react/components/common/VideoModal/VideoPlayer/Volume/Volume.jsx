import React from 'react';
import style from './Volume.module.css'
import Slider from '@material-ui/core/Slider';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import ValueLabel from "@material-ui/core/es/Slider/ValueLabel";
import withStyles from "@material-ui/core/es/styles/withStyles";

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
            }
        }
    }
});

const Volume = (props) => {
    let [state, setState] =React.useState({
        labelVisability : false
    })
    const handleChange = (event, newValue) => {
        props.onVolumeChange(event, newValue);
    };
    let setLableVisible = () => {
        setState({...state, labelVisability: !state.labelVisability})
    }
    return (
      <div className={style.root }
           onMouseEnter={()=> setLableVisible()}
           onMouseLeave={()=> setLableVisible()}
      >
          <ThemeProvider theme={muiTheme}>
          <Slider
              value={props.volume}
              onChange={handleChange}
              aria-labelledby="continuous-slider"
              valueLabelDisplay="on"
              valueLabelDisplay={state.labelVisability}
              ValueLabelComponent={StyledValueLabel}
          />
          </ThemeProvider>
      </div>
    )
}

export default Volume;

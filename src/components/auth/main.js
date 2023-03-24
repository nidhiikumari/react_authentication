import React, { useState, useContext, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  ToggleButtonGroup,
  ToggleButton,
  TextField
} from '@mui/material';
import { AppContext } from '../common/context';
import css from './css';
import Profile from './profile';
import Business from './business'


const Main = () => {
  const contextApi = useContext(AppContext);
  const [alignment, setAlignment] = useState('web');

  const { showNextPage } = contextApi;

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  useEffect(() => {
    if (showNextPage) {
      setAlignment([...alignment, 'android']);
    }
  }, [showNextPage]);
  return (
    <div>
      <Box sx={css.boxStyle}>
        <Box sx={showNextPage ? css.boxtoggle : css.group}>
          <ToggleButtonGroup
            value={alignment}
            exclusive
            // onChange={handleChange}
            aria-label="Platform"
            sx={showNextPage ? css.secondPageStyle : css.toggleGroup}
          >
            <ToggleButton sx={css.toggleButton} value="web"><span style={css.steper}>1</span> Your Profile</ToggleButton>
            <ToggleButton sx={showNextPage ? css.toggleButton : css.darkToggle} value="android"><span style={showNextPage ? css.steper : css.darksteper}>2</span>Business Information</ToggleButton>
            <ToggleButton disabled sx={showNextPage ? '' : css.toggleButton} value="ios"><span style={showNextPage ? css.darksteper : css.steper}>3</span>Additional Users</ToggleButton>
          </ToggleButtonGroup>
        </Box>
        {showNextPage ? <Business /> : <Profile />}
        {/* <Business /> */}
      </Box>
    </div>
  )
}

export default Main;
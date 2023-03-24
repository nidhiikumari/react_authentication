import React, { useState, useContext, useEffect } from 'react';
import {
  Box,
  ToggleButtonGroup,
  ToggleButton
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { AppContext } from '../common/context';
import css from './css';
import Profile from './profile';
import Business from './business';


const Main = () => {
  const theme = useTheme();
  const isExSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const contextApi = useContext(AppContext);
  const [alignment, setAlignment] = useState('web');

  const { showNextPage } = contextApi;

  useEffect(() => {
    if (showNextPage) {
      setAlignment([...alignment, 'android']);
    } else {
      setAlignment('web');
    }
  }, [showNextPage, alignment]);
  return (
    <div>
      <Box sx={css.boxStyle}>
        <Box sx={showNextPage ? css.boxtoggle : css.group}>
          <ToggleButtonGroup
            value={alignment}
            exclusive
            aria-label="Platform"
            sx={showNextPage ? css.secondPageStyle : css.toggleGroup}
          >
            <ToggleButton sx={css.toggleButton} value="web"><span style={css.steper}>1</span> Your Profile</ToggleButton>
            <ToggleButton sx={showNextPage ? css.toggleButton : css.darkToggle} value="android"><span style={showNextPage ? css.steper : css.darksteper}>2</span>Business Information</ToggleButton>
            {
              !isSmallScreen && !isExSmallScreen
             &&  <ToggleButton disabled sx={!showNextPage ? '' : css.toggleButton} value="ios"><span style={showNextPage ? css.darksteper : css.steper}>3</span>Additional Users</ToggleButton>
            }
          </ToggleButtonGroup>
        </Box>
        {showNextPage ? <Business /> : <Profile />}
      </Box>
    </div>
  )
}

export default Main;
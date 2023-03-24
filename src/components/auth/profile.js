import React, { useState, useContext } from 'react';
import {
  Box,
  Typography,
  InputAdornment,
  TextField,
  OutlinedInput,
  IconButton,
  FormControl,
  Grid,
  FormHelperText
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { AppContext } from '../common/context';
import css from './css';
import responsiveCss from './responsive';



const Profile = () => {
  const contextApi = useContext(AppContext);
  const [showPassword, setShowPassword] = React.useState(false);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const {
    firstName,
    lastName,
    email,
    mobile,
    password,
    confirmPsd,
    setFlag,
    setFormError,
    flag,
    formError,
    setConfirmPsd,
    setPassword,
    setMobile,
    setEmail,
    setLastName,
    setFirstName,
  } = contextApi;
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Box sx={isSmallScreen ? responsiveCss.rootProfile : css.rootProfile}>
      <Typography>Step 1</Typography>
      <Typography sx={css.profileText}>Your Profile</Typography>
      <Typography sx={css.text}>
        Enter the login information for your account.<br />
        You will be able to create additional users after registering
      </Typography>
      <Box>
        <Grid container spacing={{ xs: 0, sm: 0, md: 4 }} columns={{ xs: 1, sm: 12, md: 12 }} sx={isSmallScreen ? responsiveCss.gridStyle : css.gridStyle}>
          <Grid item xs={12} sm={12} md={6} sx={css.inputgridStyle}>
            <Typography sx={isSmallScreen ? responsiveCss.textStyle : css.textStyle}>First Name*</Typography>
            <TextField
              error={flag && formError?.name?.length}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              sx={css.inputStyle}
              id="outlined-required"
              placeholder="Input Your Name"
              helperText={flag && formError && formError.name && formError.name}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} sx={css.inputgridStyle}>
            <Typography sx={isSmallScreen ? responsiveCss.textStyle : css.textStyle}>Last Name*</Typography>
            <TextField
              error={flag && formError?.lastName?.length}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              sx={css.inputStyle}
              id="outlined-required"
              placeholder="Input Your Last Name"
              helperText={flag && formError && formError.lastName}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} sx={css.inputgridStyle}>
            <Typography sx={isSmallScreen ? responsiveCss.textStyle : css.textStyle}>Email*</Typography>
            <TextField
              error={flag && formError?.email?.length}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={css.inputStyle}
              id="outlined-required"
              placeholder="Input Your Email"
              helperText={flag && formError && formError.email}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} sx={css.inputgridStyle}>
            <Typography sx={isSmallScreen ? responsiveCss.textStyle : css.textStyle}>Phone Number*</Typography>
            <TextField
              error={flag && formError?.phone?.length}
              value={mobile}
              type='number'
              onChange={(e) => setMobile(e.target.value)}
              sx={css.inputStyle}
              id="outlined-required"
              placeholder="Input Phone Number"
              helperText={flag && formError && formError.phone}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} sx={css.inputgridStyle}>
            <Typography sx={isSmallScreen ? responsiveCss.textStyle : css.textStyle}>Password*</Typography>
            <FormControl
              variant="outlined"
              error={flag && formError?.password?.length}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={css.inputStyle}
              type={showPassword ? 'text' : 'password'}
            >
              <OutlinedInput
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                placeholder="create Your Password"
                helperText={flag && formError && formError.password}
              />
              <FormHelperText>
                {flag && formError?.password}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={6} sx={isSmallScreen ? responsiveCss.inputgridStyle : css.inputgridStyle}>
            <Typography sx={isSmallScreen ? responsiveCss.textStyle : css.textStyle}>Confirm Password*</Typography>
            <FormControl
              variant="outlined"
              error={flag && formError?.confirm_password?.length}
              value={confirmPsd}
              onChange={(e) => setConfirmPsd(e.target.value)}
              sx={css.inputStyle}
              placeholder='Confirm Your Password'
              type={showPassword ? 'text' : 'password'}
            >
              <OutlinedInput
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                placeholder="create Your Password"
              />
              <FormHelperText>
                {flag && formError && formError.confirm_password}
              </FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Profile;

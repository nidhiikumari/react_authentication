import React, { useContext, useCallback } from 'react';
import {
  Box,
  Typography,
  Button
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { AppContext } from '../common/context';
import Main from './main';
import css from './css';
import responsiveCss from './responsive';

const Index = () => {
  const contextApi = useContext(AppContext);
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
    setShowNextPage,
    showNextPage,
    brandName,
    brandType,
    address,
    city,
    pin,
    taxId,
    data,
    setBusinessError,
    setBusinessFlag,
    setFirstName,
    setLastName,
    setEmail,
    setMobile,
    setPassword,
    setConfirmPsd,
  } = contextApi;

  // validation----------
  const validate = () => {
    const Value = password.trim();
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const uppercaseRegExp = /(?=.*?[A-Z])/;
    const lowercaseRegExp = /(?=.*?[a-z])/;
    const digitsRegExp = /(?=.*?[0-9])/;
    const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
    const mobileNumberRegex = /^[0-9]{10}$/;
    if (!firstName) {
      errors.name = 'First Name is required!';
      setFlag(true);
    } else {
      setFlag(false);
    }
    if (!lastName) {
      errors.lastName = 'Last Name is required!';
      setFlag(true);
    } else {
      setFlag(false);
    }
    if (!mobile) {
      errors.phone = 'Phone Number is required!';
      setFlag(true);
    } else if (!mobileNumberRegex.test(mobile)) {
      errors.phone = 'Phone number should be 10 digit!';
      setFlag(true);
    } else {
      setFlag(false);
    }
    if (!email) {
      errors.email = 'Email is required!';
      setFlag(true);
    } else if (!regex.test(email)) {
      errors.email = 'This is not a valid email formate!';
      setFlag(true);
    } else {
      setFlag(false);
    }
    if (!password.length) {
      errors.password = 'Password is required!';
      setFlag(true);
    } else if (password.length < 4) {
      errors.password = 'Password must be more than 4 characters';
      setFlag(true);
    } else if (password.length > 12) {
      errors.password = 'Password cannot exceed more than 12 charaters';
      setFlag(true);
    } else if (!uppercaseRegExp.test(Value)) {
      errors.password = 'At least one Uppercase';
      setFlag(true);
    } else if (!lowercaseRegExp.test(Value)) {
      errors.password = 'At least one Lowercase';
      setFlag(true);
    } else if (!digitsRegExp.test(Value)) {
      errors.password = 'At least one digit';
      setFlag(true);
    } else if (!specialCharRegExp.test(Value)) {
      errors.password = 'At least one Special Characters';
      setFlag(true);
    } else {
      setFlag(false);
    }
    if (!confirmPsd) {
      errors.confirm_password = 'Password is Required';
      setFlag(true);
    } else if (confirmPsd && confirmPsd !== password) {
      errors.confirm_password = 'Password did not matched';
      setFlag(true);
    } else {
      setFlag(false);
    }
    setFormError(errors);
    return errors;
  };

  const validatesecondStep = () => {
    const errors = {};
    if (!brandName) {
      errors.name = 'Brand Name is required!';
      setBusinessFlag(true);
    }
    if (!brandType) {
      errors.brandType = 'Brand Type is required!';
      setBusinessFlag(true);
    } else if (brandType === 'Select Type of Your Brand') {
      errors.brandType = 'Select Type of Your Brand';
    }
    if (!address) {
      errors.address = 'Address is required!';
      setBusinessFlag(true);
    }
    if (!city) {
      errors.city = 'City is required!';
      setBusinessFlag(true);
    }
    if (!pin) {
      errors.pin = 'Pin is required!';
      setBusinessFlag(true);
    }
    if (!taxId) {
      errors.taxId = 'Tax Id Number is required!';
      setBusinessFlag(true);
    }
    if (data === 'Non adult beverage kroger market supplier waiver and release') {
      errors.data = 'Ducument must be signed!';
    }
    setBusinessError(errors);
    return errors;
  };

  const nextStepHandle = async () => {
    await validatesecondStep();
  };

  const PrevBtnHandle = () => {
    setShowNextPage(false);
    setFirstName('');
    setLastName('');
    setEmail('');
    setMobile('');
    setPassword('');
    setConfirmPsd('');
  };
  const checkError = useCallback(() => {
    if (formError.name) {
      setFlag(true);
    } else if (formError.lastName) {
      setFlag(true);
    } else if (formError.email) {
      setFlag(true);
    } else if (formError.phone) {
      setFlag(true);
    } else if (formError.password) {
      setFlag(true);
    } else if (formError.confirm_password) {
      setFlag(true);
    }
    else if (!flag && !formError.name && password && confirmPsd && !formError.lastName && !formError.email && !formError.password && !formError.confirm_password && !formError.phone) {
      setShowNextPage(true);
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
    }
  }, [formError, firstName, email, password, lastName, mobile, confirmPsd, flag, showNextPage, setShowNextPage, setFlag]);

  const clickHandle = async () => {
    await validate();
    await checkError();
  };

  return (
    <Box sx={isSmallScreen ? responsiveCss.isSmallScreen : css.rootStyle}>
      <Box sx={css.header}>
        <Typography sx={isSmallScreen ? responsiveCss.createAccount : css.createAccount}>Create New Account</Typography>
        <Typography sx={css.headerStyle}>Contact Us</Typography>
      </Box>
      <Box>
        <Main />
      </Box>
      <Box sx={css.footerStyles}>
        <Button sx={css.loginCss} variant="text"><ArrowBackIosIcon sx={css.loginIcon} />Back to Login</Button>
        {
          showNextPage ?
            (
              <Box sx={css.businessBtn}>
                <Button sx={css.prevBtn} variant="contained" onClick={() => PrevBtnHandle()}>Previous Step<ArrowForwardIosIcon sx={css.nextIcon} /></Button>
                <Button sx={css.nextBtn} variant="contained" onClick={() => nextStepHandle()}>Next Step<ArrowForwardIosIcon sx={css.nextIcon} /></Button>
              </Box>
            )
            : <Button sx={css.nextBtn} variant="contained" onClick={() => clickHandle()}>Next Step<ArrowForwardIosIcon sx={css.nextIcon} /></Button>
        }
      </Box>
    </Box>
  )
}

export default Index;

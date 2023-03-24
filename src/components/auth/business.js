import React, { useState, useContext } from 'react';
import {
  Box,
  Typography,
  Button,
  TextField,
  Stack,
  MenuItem,
  FormControl,
  Grid,
  Select
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { AppContext } from '../common/context';
import css from './css';

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

const Business = () => {
  const contextApi = useContext(AppContext);
  const {
    brandName,
    setBrandName,
    brandType,
    setBrandType,
    address,
    setAddress,
    city,
    setCity,
    pin,
    setPin,
    taxId,
    data,
    setTaxId,
    businessFlag,
    businessError
  } = contextApi;
  return (
    <Box sx={css.rootProfile}>
      <Typography>Step 2</Typography>
      <Typography sx={css.profileText}>Business Information</Typography>
      <Typography sx={css.text}>
        Please Enter your information about company.<br />
      </Typography>
      <Typography sx={css.businessTitleStyle}>GENERAL INFORMATION</Typography>
      <Grid container spacing={{ xs: 0, md: 4 }} columns={{ xs: 1, sm: 12, md: 12 }} sx={css.gridStyles}>
        <Grid item xs={12} sm={12} md={6} sx={css.inputgridStyle}>
          <Typography sx={css.textStyle}>Brand Name*</Typography>
          <TextField
            error={businessFlag && businessError?.name?.length}
            value={brandName}
            sx={css.inputStyle}
            id="outlined-required"
            onChange={(e) => setBrandName(e.target.value)}
            placeholder="Input Your Brand Name"
            helperText={businessFlag && businessError?.name}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} sx={css.inputgridStyle}>
          <Typography sx={css.textStyle}>Brand Type*</Typography>
          <FormControl
            size='small'
            error={businessFlag && businessError?.brandType?.length}
            helperText={businessFlag && businessError?.brandType}
          >
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              value={brandType}
              onChange={(e) => setBrandType(e.target.value)}
            >
              <MenuItem disabled value={brandType}>
                Select Type of Your Brand
              </MenuItem>

              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12} md={6} sx={css.inputgridStyle}>
          <Typography sx={css.textStyle}>Street Address*</Typography>
          <TextField
            value={address}
            error={businessFlag && businessError?.address?.length}
            helperText={businessFlag && businessError?.address}
            sx={css.inputStyle}
            id="outlined-required"
            placeholder="Input Your Email"
            onChange={(e) => setAddress(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} sx={css.inputgridStyle}>
          <Typography sx={css.textStyle}>City*</Typography>
          <TextField
            value={city}
            sx={css.inputStyle}
            id="outlined-required"
            placeholder="Input Phone Number"
            onChange={(e) => setCity(e.target.value)}
            error={businessFlag && businessError?.city?.length}
            helperText={businessFlag && businessError?.city}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} sx={css.inputgridStyle}>
          <Typography sx={css.textStyle}>Zip Code*</Typography>
          <TextField
            value={pin}
            type='number'
            sx={css.inputStyle}
            id="outlined-required"
            placeholder="create Your Password"
            onChange={(e) => setPin(e.target.value)}
            error={businessFlag && businessError?.pin?.length}
            helperText={businessFlag && businessError?.pin}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} sx={css.inputgridStyle}>
          <Typography sx={css.textStyle}>Tax Id Number*</Typography>
          <TextField
            value={taxId}
            sx={css.inputStyle}
            id="outlined-required"
            placeholder='Confirm Your Password'
            onChange={(e) => setTaxId(e.target.value)}
            error={businessFlag && businessError?.taxId?.length}
            helperText={businessFlag && businessError?.taxId}
          />
        </Grid>
      </Grid>
      <Box sx={css.documentsStyle}>
        <Typography variant="subtitle2" sx={css.infoStyle}>DOCUMENTS</Typography>
        <Typography sx={css.textStyle} variant="body2">Once the following Documents are signed, you'll be ready to get started</Typography>
        <Stack
          direction="row"
          spacing={6}
          sx={css.businessInput}
        >
          <TextField
            value='Electronically Signed the agreement(s)'
            sx={css.inputStyle}
            InputProps={{
              readOnly: true
            }}
          />
          <Button size='small' sx={css.viewBtn} variant='contained'><ArrowForwardIosIcon sx={css.nextIcon} /></Button>
        </Stack>
        <Stack
          direction="row"
          spacing={6}
          sx={css.businessInput}
        >
          <TextField
            value={data}
            // defaultValue='Non adult beverage kroger market supplier waiver and release'
            sx={css.inputStyle}
            id="outlined-required"
            InputProps={{
              readOnly: true
            }}
            error={businessFlag && businessError?.data?.length}
            helperText={businessFlag && businessError?.data}
          />
          <Button size='small' sx={css.viewBtn} variant='contained'><ArrowForwardIosIcon sx={css.nextIcon} /></Button>
        </Stack>
        <Typography sx={css.infoStyles} variant="subtitle2">COI PDF UPLOAD</Typography>
        <Typography sx={css.textStyle} variant="body2">Once the following Documents are signed, you'll be ready to get started</Typography>
        <Stack
          direction="row"
          spacing={6}
          sx={css.businessInput}
        >
          <TextField
            value='Electronically Signed the agreement(s)'
            sx={css.inputStyle}
            id="outlined-required"
            placeholder="Input Your Name"
            InputProps={{
              readOnly: true
            }}
          />
          <Button size='small' sx={css.viewBtn} variant='contained'><ArrowForwardIosIcon sx={css.nextIcon} /></Button>
        </Stack>
      </Box>
    </Box>
  )
}

export default Business;

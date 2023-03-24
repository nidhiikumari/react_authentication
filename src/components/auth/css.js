import { css } from '@emotion/react';

const Css = {
  rootStyle: css({
    backgroundColor: '#1565c0',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    padding: '43px 124px'
  }),
  loginCss: css({
    color: 'white',
    textTransform: 'capitalize',
    '@media only screen and (max-width: 600px)': {
      color: 'skyblue',
      // justifyContent: 'center',
    }
  }),
  loginIcon: css({
    height: '14px'
  }),
  steper: {
    backgroundColor: 'white',
    borderRadius: '50%',
    width: 33,
    height: 30,
    textAlign: 'center',
    color: '#117eee',
    marginRight: 9
  },
  darksteper: {
    backgroundColor: '#0d0862',
    borderRadius: '50%',
    width: 33,
    height: 30,
    textAlign: 'center',
    color: 'white',
    marginRight: 9
  },
  darkToggle: css({
    color: '#0d0862',
    '& .MuiToggleButton-root': {
      textTransform: 'capitalize',
      fontSize: 18,
      color: '#0d0862 !important',
      // backgroundColor: '#e5dfdf'
    },
  }),
  createAccount: css({
    fontSize: 22,
    color: 'white',
    // lineHeight: 1.9,
    // marginTop: '-34px'
  }),
  header: css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 33,
    // textRendering:,
    '@media only screen and (max-width: 730px)': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }
  }),
  headerStyle: css({
    position: 'absolute',
    right: 137,
    '@media only screen and (max-width: 730px)': {
      position: 'static',
      right: 0
    },
    // display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'flex-end',
    '@media only screen and (max-width: 600px)': {
      // display: 'flex',
      // justifyContent: 'center',
    }
    // paddingRight: 
  }),
  footerStyle: css({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '23px 0px',
    textTransform: 'capitalize',
    '@media only screen and (max-width: 378px)': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }
  }),
  nextBtn: ({
    textTransform: 'capitalize',
    // boxShadow: 'none',
    background: 'linear-gradient(to right, #6666ff 0%, #6600cc 100%)'
  }),
  nextIcon: css({
    height: '14px'
  }),
  // main css-----------------------
  boxStyle: css({
    backgroundColor: 'white',
    borderRadius: 10,
    boxShadow: '10px 13px 21px 14px rgb(0 0 0 / 21%)',
    alignItems: 'center',
    textAlign: 'center',
    padding: '0px',
    '@media only screen and (max-width: 600px)': {
      padding: 5,
      boxShadow: 'none'
    }
  }),
  group: css({
    backgroundColor: '#e5dfdf'
  }),
  boxtoggle: css({
    backgroundColor: '#e5dfdf'
    // background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(9,49,121,1) 100%)!important'
  }),
  secondPageStyle: css({
    width: '100%',
    height: '50px',
    paddingLeft: 0,
    paddingRight: 0,
    marginRight: 32,
    '& .MuiToggleButton-root': {
      textTransform: 'capitalize',
      fontSize: 18,
      // background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(9,49,121,1) 100%)!important',
    },
    '& .Mui-selected': {
      // background: '#117eee',
      background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(9,49,121,1) 100%)!important',
      color: 'white',
      '&:first-of-type': {
        // background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(9,49,121,1) 100%)!important',
        borderTopRightRadius: '0px',
        borderBottomRightRadius: '0px',
        boxShadow: ' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        borderRadius: 0,
        width: '100%',
        height: '50px',

        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(9,49,121,1) 100%)!important'
      },
      '&:not(:first-of-type)': {
        borderTopRightRadius: 26,
        borderBottomRightRadius: 26,
        border: 'none',
        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(9,49,121,1) 100%)!important'
      },
      '&:last-of-type': {
        borderTopRightRadius: '26px',
        borderBottomRightRadius: '26px',
      }
      // borderTopRightRadius: '26px',
      //   borderBottomRightRadius: '26px',
      // borderTopRightRadius: '26px',
      // borderBottomRightRadius: '26px',
      // background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(9,49,121,1) 100%)!important'
    },
    '& .MuiToggleButtonGroup-grouped': {
      padding: '0px',
      border: 'none',
      '&.Mui-disabled': {
        backgroundColor: '#e5dfdf'
        // borderTopRightRadius: '26px',
        // borderBottomRightRadius: '26px'
      },
      '&:not(:first-of-type)': {
        // borderTopRightRadius: 26,
        // borderBottomRightRadius: 26
      },
      '&:first-of-type': {
        // background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(9,49,121,1) 100%)!important',
        borderTopRightRadius: '0px',
        borderBottomRightRadius: '0px',
        boxShadow: ' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        borderRadius: 0,
        width: '100%',
        height: '50px'
      },
      '&:last-of-type': {
        // backgroundColor: '#e5dfdf',
        // borderTopRightRadius: '26px',
        // borderBottomRightRadius: '26px',
        // background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(9,49,121,1) 100%)!important',
        width: '100%',
        height: '50px'
      },
      '&:not(:last-of-type)': {
        // backgroundColor: '#e5dfdf',
        // borderTopRightRadius: 26,
        // borderBottomRightRadius: 26,
        // background: 'rgb(2,0,36)',
        // borderTopRightRadius: '26px',
        // borderBottomRightRadius: '26px',
        border: 'none',
        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(9,49,121,1) 100%)',
        width: '100%',
        height: '50px'
      }
    },
    textTransform: 'capitalize',
    fontSize: 18,
    flexDirection: 'row',
    alignItems: 'center'
  }),
  toggleGroup: css({
    width: '100%',
    height: '50px',
    paddingLeft: 0,
    paddingRight: 0,
    marginRight: 32,
    '& .MuiToggleButton-root': {
      textTransform: 'capitalize',
      fontSize: 18,
      color: 'white'
      // backgroundColor: '#e5dfdf'
    },
    '& .Mui-selected': {
      // background: '#117eee',
      color: 'white',
      borderTopRightRadius: '26px',
      borderBottomRightRadius: '26px',
      background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(9,49,121,1) 100%)!important'
    },
    '& .MuiToggleButtonGroup-grouped': {
      padding: '0px',
      border: 'none',
      '&.Mui-disabled': {
        // borderTopRightRadius: '26px',
        // borderBottomRightRadius: '26px'
      },
      '&:not(:first-of-type)': {
        // borderBottomLeftRadius: 26,
        '@media only screen and (max-width: 546px)': {
          display: 'hidden'
        }
      },
      '&:first-of-type': {
        color: 'white',
        borderTopRightRadius: '26px',
        borderBottomRightRadius: '26px',
        boxShadow: ' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        borderRadius: 0,
        width: '100%',
        height: '50px'
      },
      '&:last-of-type': {
        borderTopRightRadius: '26px',
        borderBottomRightRadius: '26px',
        width: '100%',
        height: '50px',
        '@media only screen and (max-width: 546px)': {
          display: 'hidden'
        }
      },
      '&:not(:last-of-type)': {
        // background: 'rgb(2,0,36)',
        borderTopRightRadius: '26px',
        borderBottomRightRadius: '26px',
        // background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(9,49,121,1) 100%)',
        width: '100%',
        height: '50px',
        '@media only screen and (max-width: 546px)': {
          display: 'hidden'
        }
      }
    },
    textTransform: 'capitalize',
    fontSize: 18,
    flexDirection: 'row',
    alignItems: 'center'
  }),
  toggleButton: css({
    color: 'white',
    '& .MuiToggleButton-root': {
      color: 'white'
    },
    '& .MuiToggleButton-root:active': {
      // borderTopRightRadius: '26px',
    },
    // '& .Mui-selected': {
    //   background: 'rgb(2,0,36)',
    //   background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(9,49,121,1) 100%)',
    //   borderTopRightRadius: '26px',
    //   borderBottomRightRadius: '26px',
    //   boxShadow: '10px 5px 5px rgb(2,0,36)'
    // }
  }),
  businessBtn: css({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }),
  prevBtn: css({
    marginLeft: '-10rem'
    // border: 'linear-gradient(to right, #6666ff 0%, #6600cc 100%)'
  }),

  // profile css--------------
  rootProfile: css({
    // textAlign: 'center',
    padding: '17px 0px 75px 0px',
    color: '#0d0862',
    '@media only screen and (max-width: 886px)': {
      padding: 5,
      rootProfile: {
        padding: 5
        /* styles for screens with a minimum width of 600px */
      },
      '@media only screen and (min-width: 600px)': {
        padding: 5
      }
    }
  }),
  profileText: css({
    fontSize: 30
  }),
  text: css({
    // width: '45%',
    marginTop: 4,
    textAlign: 'center',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  }),
  gridStyle: css({
    border: 'none',
    boxShadow: 'none',
    padding: '4px 123px',
    alignItems: 'center',
    textAlign: 'center',
    '@media only screen and (min-width: 600px)': {
      padding: 5
    },
    '@media only screen and (min-width: 880px)': {
      padding: '4px 103px',
    }

    // margin: 0,
    // padding: 0
  }),
  inputStyle: css({
    width: '100%',
    // minHeight: 45,
    // maxHeight: 70,
    flexGrow: 0,
    '.MuiOutlinedInput-input': {
      height: '0.4375em'
    },
    '.MuiInputBase-input': {
      height: '0.4375em'
    }
  }),
  inputgridStyle: css({
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    paddingTop: 0,
    '@media only screen and (max-width: 886px)': {
      padding: 15,
      rootProfile: {
        padding: 5
        /* styles for screens with a minimum width of 600px */
      },
      '@media only screen and (min-width: 600px)': {
        padding: 15
      }
    }
    // maxWidth: '40%'
  }),
  textStyle: css({
    marginTop: '1px',
    marginBottom: '5px'
  }),
  // business styles---------------------------
  documentsStyle: css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    // textAlign: 'center',
    padding: '4px 103px',
    // alignItems: 'left',
    textAlign: 'left',
    color: '#000066',
    '@media only screen and (max-width: 877px)': {
      // padding: 15,
      padding: 20,
      },
  }),
  titleStyle: css({
    marginTop: 38,
    color: '#070746c7',
  }),
  titleTextStyle: css({
    color: '#1976d2',
    textAlign: 'left',
    marginLeft: '7.7rem'
  }),
  businessTitleStyle: css({
    color: '#1976d2',
    textAlign: 'left',
    marginLeft: '6.4rem',
    marginTop: '2.5rem'
  }),
  infoStyle: css({
    color: '#1976d2',
    marginTop: 23
  }),
  infoStyles: css({
    color: '#1976d2',
    marginTop: 10
  }),
  infoTextStyle: css({
    color: '#000066'
  }),
  businessInput: css({
    marginBottom: 22,
    color: '#000066',
    zIndex: 'inherit',
    opacity: '0.5'
  }),
  viewBtn: css({
    textTransform: 'capitalize',
    // boxShadow: 'none',
    minWidth: 40,
    background: 'linear-gradient(to right, #6666ff 0%, #6600cc 100%)'
  })
};
export default Css;
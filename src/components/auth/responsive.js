import { css } from '@emotion/react';

const ResponsiveCss = {
  documentsStyle: css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    textAlign: 'left',
    color: '#000066'
  }),
  gridStyle: css({
    border: 'none',
    boxShadow: 'none',
    padding: '1rem',
    alignItems: 'center',
    textAlign: 'center'
  }),
  boxStyle: css({
    backgroundColor: 'white',
    borderRadius: 10,
    boxShadow: 'none',
    alignItems: 'center',
    textAlign: 'center',
    padding: '0px'
  }),
  rootStyle: css({
    backgroundColor: '#1565c0',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    padding: 12
  }),
  createAccount: css({
    fontSize: 22,
    color: 'rgba(0,212,255,1)',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 24
  }),
  rootProfile: css({
    // textAlign: 'center',
    padding: '17px 10px 15px 15px'
  }),
  textStyle: css({
    marginTop: '0.5rem',
    marginBottom: '0.3rem'
  }),
  inputgridStyle: css({
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    paddingTop: 0
    // maxWidth: '40%'
  }),
};
export default ResponsiveCss;
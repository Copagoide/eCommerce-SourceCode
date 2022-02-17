import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  footer : {
    color: '#fff',
    background: 'linear-gradient(to right, #05668d, #00c49a)',
    textAlign: 'center',

  },
  typographyTop: {
    letterSpacing: 1,
    display: 'inline-flex',
    padding: '24px 0 5px 0',
  },
  typographyBottom: {
    letterSpacing: 1,
    display: 'inline-flex',
    paddingBottom: '25px',
  }
}));
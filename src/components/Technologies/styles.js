import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  gridContainer: {
    padding: '24px',
    background: 'linear-gradient(165deg, #119da4, #09bc8a)',
    justifyContent: 'center'
  },
  typography: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '7px',
    letterSpacing: 1
  },
  svgContainer: {
    display: 'flex',
    justifyContent: 'center'
  }
}));
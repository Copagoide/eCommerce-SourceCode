import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  position: {
    display: 'flex',
    justifyContent: "center"
  },
  borderDecoration: {
    borderRadius: '8px',
    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.4)',
    overflow: 'hidden'
  },
  imageOuter: {
    height: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageMiddle: {
    width: '100%',
    display: 'block',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  imageInner: {
    width: '267px',
    height: 'inherit',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    overflow: 'hidden',
  },
  textContainer: {
    height: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    [theme.breakpoints.down('xs')]: {
      paddingTop: '85px'
    }
  }
}));
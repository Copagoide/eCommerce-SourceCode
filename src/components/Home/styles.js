import { makeStyles } from '@material-ui/core/styles';
import image from './images/home_image-min.jpg';

export default makeStyles(() => ({
  background: {
    background: `url(${image})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    marginTop: '56px',
    height: '56vh'
  },
  content: {
    background: 'rgba(255, 255, 255, 0.5)',
    width: 'inherit',
    height: 'inherit',
    padding: '20vh 0 0 7vw'
  },
  button: {
    letterSpacing: 2,
    'border-radius': '20px',
    'margin-top': '10px',
  }
}));
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    height: 0,
    paddingTop: '100%',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
    ['@media ( max-width:830px)']: {
      display: 'list-item',
    },
    ['@media (max-width:600px)']: {
      display: 'flex',
    }
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    color: 'white',
    width: '50%',
    height: '40px',
  },


}));

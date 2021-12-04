import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '3%',
  },
  emptyButton: {
    minWidth: '150px',
    background: '#1C2331',
    color: 'white',
    height: '40px',
    marginTop : '40px',
    '&:hover': {
      backgroundColor: '#2a344a',
      boxShadow: 'none',
      color: 'white',
    },
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '7%',
    width: '100%',
    justifyContent: 'space-between',
  },
}));

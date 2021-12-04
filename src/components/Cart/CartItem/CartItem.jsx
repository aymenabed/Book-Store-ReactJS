// Node Modules Files
import React from 'react';
import { useDispatch } from 'react-redux';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
// Local Files
import { removeBookFromCart, handleUpdateCartQtyPlus, handleUpdateCartQtyMoins } from '../../../redux/books/books_actions';
import useStyles from './styles';

const CartItem = ({ item }) => {
  const classes = useStyles();
  const dispatch = useDispatch();


  return (
    <Card className="cart-item">
      <CardMedia image={item.cover} alt={item.title} className={classes.media} />
      <CardContent className={classes.cardContent}>
        <Typography variant="h6">{item.title}</Typography>
        <Typography variant="h6" color='secondary' >{item.price * item.qty}€</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button disabled={item.qty === 1} type="button" size="small" onClick={() => dispatch(handleUpdateCartQtyMoins(item.isbn))}><b>-</b></Button>
          <Typography>&nbsp;{item.qty}&nbsp;</Typography>
          <Button type="button" size="small" onClick={() => dispatch(handleUpdateCartQtyPlus(item.isbn))}><b>+</b></Button>
        </div>
        <Button className={classes.button} variant="contained" size="small" type="button" color='secondary' onClick={() => dispatch(removeBookFromCart(item.isbn))}>Remove</Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;

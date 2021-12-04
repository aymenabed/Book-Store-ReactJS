// Node Modules Files
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
// Local Files
import { onEmptyCart, getcommercialOffers } from '../../redux/books/books_actions';
import CartItem from './CartItem/CartItem';
import useStyles from './styles';

const Cart = () => {

  const classes = useStyles();
  const dispatch = useDispatch();

  const { cart, comof } = useSelector((state) => state.books);

  // Total Price of Books
  const [totalPrice, setTotalPrice] = useState(0);
  // Offres
  const [percentage, setPercentage] = useState(0);
  const [minus, setMinus] = useState(0);
  const [slice, setSlice] = useState(0);


  useEffect(() => {
    let price = 0;
    cart.forEach((item) => {
      price += item.qty * item.price;
    });
    setTotalPrice(price);
  }, [cart]);

  useEffect(() => {
    if (cart.length >= 1) {
      dispatch(getcommercialOffers(cart))
    }
  }, [cart, dispatch]);

  // console.log("Commercial Offres", comof)

  useEffect(() => {
    if (comof.length === 1) {
      setPercentage(totalPrice - ((totalPrice * comof[0].value) / 100));
      setMinus(totalPrice);
      setSlice(totalPrice);
    }
    else {
      comof.forEach((item) => {
        if (item.type === 'percentage') {
          setPercentage(totalPrice - ((totalPrice * item.value) / 100));
        }
        if (item.type === 'minus') {
          setMinus(totalPrice - item.value);
        }
        if (item.type === 'slice') {
          setSlice(totalPrice - (item.value * Math.floor(totalPrice / item.sliceValue)));
        }
      })
    };
  }, [cart, totalPrice, comof]);

  const renderEmptyCart = () => (
    <Typography variant="subtitle1">
      You have no Books in your shopping cart,
      <Link className={classes.link} to="/"> start adding some</Link>!
    </Typography>
  );


  const renderCart = () => (
    <>
      <Grid container spacing={4}>
        {cart.map((item) => (
          <Grid item xs={12} sm={4} key={item.isbn}>
            <CartItem item={item} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <div>
          <Typography variant="h5" >Total price: <b >{totalPrice}€</b></Typography>
          <br />
          <Typography variant="h5" >Price after reduction: <b >{Math.min(percentage, minus, slice)}€</b></Typography>
        </div>
        <div>
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" onClick={() => dispatch(onEmptyCart())}>Empty cart</Button>
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h5" gutterBottom><b>Your Shopping Cart</b></Typography>
      <hr />
      {!cart.length ? renderEmptyCart() : renderCart()}
    </Container>
  );
};

export default Cart;

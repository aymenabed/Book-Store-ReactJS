// Node Modules Files
import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, Button, CardActionArea } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// Local Files
import useStyles from './styles';
import { addBookToCart } from '../../../redux/books/books_actions';


const Book = ({ book }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const {cart } = useSelector((state) => state.books);
  
  return (
    <Card className={classes.root}>
      <Link to={{pathname: `book-view/${book.isbn}`, state:{ book: book }} } >
        <CardActionArea>
          <CardMedia className={classes.media} image={book.cover} title={book.title} />
        </CardActionArea>
      </Link>
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h6">
            {book.title}
          </Typography>
          <Typography variant="h6" color="secondary">
            <b>{book.price}</b>€
          </Typography>
        </div>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <Button variant="contained" disabled={cart.findIndex((item)=>item.isbn === book.isbn)>-1} className={classes.button} endIcon={<AddShoppingCart />} onClick={() => dispatch(addBookToCart(book.isbn))} >
          <b>ADD TO CART</b>
        </Button>
      </CardActions>
    </Card>
  )
}

export default Book;
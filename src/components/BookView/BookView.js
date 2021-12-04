// Node Modules Files
import React from 'react'
import { Container, Grid, Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// Local Files
import './style.css'

const createMarkup = (text) => {
  return { __html: text };
};

const ProductView = () => {
  const location = useLocation()
  const { book } = location.state

  return (
    <Container className="book-view">
      <Grid container>
        <Grid item xs={12} md={6} className="image-wrapper">
          <img src={book.cover} alt={book.title} />
        </Grid>
        <Grid item xs={12} md={5} className="text">
          <Typography variant="h2"><b>{book.title}</b></Typography>
          <hr />
          <Typography variant="p" dangerouslySetInnerHTML={createMarkup(book.synopsis)} />
          <Typography variant="h3" color="secondary" ><b> Price: {book.price}€</b> </Typography>
          <br />
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Button size="large" className="custom-button" component={Link} to='/' >
                Continue Shopping
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductView;

// Node Modules Files
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
// Local Files
import Books from './components/Books/Books';
import BookView from './components/BookView/BookView';
import Cart from './components/Cart/Cart';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
// Redux
import { getbooks } from './redux/books/books_actions';
// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const App = () => {

  const { books, cart } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getbooks());
  }, [dispatch]);


  return (
    <>
      <Router>
        <div style={{ display: 'flex' }}>
          <CssBaseline />
          <Navbar totalBooks={cart.length} />
          <Switch>
            <Route exact path="/">
              <Books books={books} />
            </Route>
            <Route exact path="/cart">
              <Cart cart={cart} />
            </Route>
            <Route exact path="/book-view/:isbn">
              <BookView />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
    </>
  );
};

export default App;

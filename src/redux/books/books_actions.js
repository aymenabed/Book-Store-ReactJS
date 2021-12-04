import axios from 'axios';
// Local Files
import {
  GET_BOOKS,
  ADD_BOOK_TO_CART,
  REMOVE_BOOK_FROM_CART,
  ON_EMPTY_CART,
  UPDATE_CART_QTY_PLUS,
  UPDATE_CART_QTY_MOINS,
  COMMERCIAL_OFFRES,
} from './books_types';

const URL = 'https://henri-potier.techx.fr/books';

export const getbooks = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(URL);
      dispatch({ type: GET_BOOKS, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addBookToCart = (bookID) => {
  return {
    type: ADD_BOOK_TO_CART,
    payload: bookID,
  };
};

export const removeBookFromCart = (bookID) => {
  return {
    type: REMOVE_BOOK_FROM_CART,
    payload: bookID,
  };
};

export const handleUpdateCartQtyPlus = (bookID) => {
  return {
    type: UPDATE_CART_QTY_PLUS,
    payload: bookID,
  };
};

export const handleUpdateCartQtyMoins = (bookID) => {
  return {
    type: UPDATE_CART_QTY_MOINS,
    payload: bookID,
  };
};

export const onEmptyCart = () => {
  return {
    type: ON_EMPTY_CART,
  };
};

export const getcommercialOffers = (cart) => {
  let ids = "";
  for (let i = 0; i < cart.length; i++) {
    if (i !== cart.length - 1)
      ids += cart[i].isbn + ","
    else
      ids += cart[i].isbn
  }
  // console.log("ids", ids)
  return async (dispatch) => {
    try {
      const response = await axios.get("https://henri-potier.techx.fr/books/" + ids + "/commercialOffers");
      dispatch({ type: COMMERCIAL_OFFRES, payload: response.data.offers });
    } catch (error) {
      console.log(error);
    }
  };
};


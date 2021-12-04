// Local Files
import {
  GET_BOOKS,
  ADD_BOOK_TO_CART,
  REMOVE_BOOK_FROM_CART,
  UPDATE_CART_QTY_PLUS,
  UPDATE_CART_QTY_MOINS,
  ON_EMPTY_CART,
  COMMERCIAL_OFFRES,
} from './books_types';

const initialState = {
  books: [],
  cart: [],
  comof: [],
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        books: action.payload,
      };

    case ADD_BOOK_TO_CART:
      // Get Book data from books array
      const item = state.books.find(
        (book) => book.isbn === action.payload
      );

      return {
        ...state,
        cart: [...state.cart, { ...item, qty: 1 }],
      };

    case REMOVE_BOOK_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.isbn !== action.payload),
      };

    case UPDATE_CART_QTY_PLUS:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.isbn === action.payload ? { ...item, qty: item.qty + 1 } : item
        )
      };

    case UPDATE_CART_QTY_MOINS:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.isbn === action.payload ? { ...item, qty: item.qty - 1 } : item
        )
      };

    case ON_EMPTY_CART:
      return {
        ...state,
        cart: [],
      };

    case COMMERCIAL_OFFRES:
      return {
        ...state,
        comof: action.payload,
      };

    default:
      return state;
  }
};

export default booksReducer;

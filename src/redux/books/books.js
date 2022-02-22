const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const fetchData = () => (dispatch) => fetch(
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/VFbcOva4gydD84rw77of/books',
)
  .then((response) => response.json())
  .then((data) => {
    Object.keys(data).forEach((book) => {
      dispatch({
        type: ADD_BOOK,
        payload: {
          item_id: book,
          ...data[book][0],
        },
      });
    });
  });

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((b) => b.item_id !== action.payload.id);
    default:
      return state;
  }
};

export default reducer;

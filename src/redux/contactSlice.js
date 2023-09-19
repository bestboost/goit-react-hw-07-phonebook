import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

const userContactInitialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filters: '',
};

export const contactSlice = createSlice({
  name: 'userContact',
  initialState: userContactInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.items.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    removeContact(state, action) {
      const index = state.contacts.items.findIndex(
        item => item.id === action.payload
      );
      state.contacts.items.splice(index, 1);
    },
    filterContact(state, action) {
      state.filters = action.payload;
    },
  },
});

// const persistConfig = {
//   key: 'userContact',
//   storage,
//   blacklist: ['filters'],
// };

export const { addContact, removeContact, filterContact } =
  contactSlice.actions;

export const userReducer = contactSlice.reducer;

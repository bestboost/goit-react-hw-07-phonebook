import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';
import { nanoid } from 'nanoid';

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

    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { addContact, removeContact, filterContact } =
  contactSlice.actions;

export const userReducer = contactSlice.reducer;

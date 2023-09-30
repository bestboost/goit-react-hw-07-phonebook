import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.userContact.contacts.items;

export const selectIsLoading = state => state.userContact.contacts.isLoading;

export const selectError = state => state.userContact.contacts.error;

export const selectFilters = state => state.userContact.filters;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilters],
  (contacts, filters) => {
    const normolizedFilter = filters.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normolizedFilter)
    );
  }
);

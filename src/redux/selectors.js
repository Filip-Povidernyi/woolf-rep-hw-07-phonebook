import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter;
export const selectFilteredContacts = createSelector(
    [selectContacts, selectFilter],
    (contacts, filterQuery) => {
        return contacts.filter(
            contact => contact.name.toLocaleLowerCase().includes(filterQuery.toLowerCase())
        )
    });
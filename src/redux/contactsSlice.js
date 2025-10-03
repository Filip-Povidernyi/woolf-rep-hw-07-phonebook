import { createSlice, nanoid } from "@reduxjs/toolkit";
import { contactsInitialState } from "./constants"

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.items.push(action.payload);
            },
            prepare(name, number) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        number,
                    },
                };
            },
        },

        deleteContact(state, action) {
            const index = state.items.findIndex(contact => contact.name === action.payload);
            state.items.splice(index, 1);
        },
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
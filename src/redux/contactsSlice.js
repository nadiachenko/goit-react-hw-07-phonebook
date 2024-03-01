
import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations"

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null
    },
    filter: ""
  },
  reducers: {
    getFilterValue: {
      reducer(state, action) {
        state.filter = action.payload.value
      },
      prepare(value) {
        return {
          payload: {
            value
          }
        };
      }
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items = action.payload;
      })
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        if (action.payload) {
          state.contacts.items.push(action.payload);
        } else {
          console.log("Contact not added");
        }
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items = state.contacts.items.filter(contact => contact.id !== action.payload.id);
      })
      .addCase(deleteContact.rejected, handleRejected)
  }
});

export const { getFilterValue } = contactsSlice.actions;
export const rootReducer = contactsSlice.reducer






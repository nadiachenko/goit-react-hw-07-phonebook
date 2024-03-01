import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://65da1361bcc50200fcdc8a12.mockapi.io";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
  try {
    const response = await axios.get("/contacts");
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
}
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({ name, phone }, thunkAPI) => {
    const state = thunkAPI.getState();
    if (!state.contacts.items.some(contact1 => contact1.name === name)) {

      try {
        const response = await axios.post("/contacts", { name, phone });
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
    else {
      alert(name + " is already exist");
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


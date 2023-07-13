import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listArray: [],
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addToList: (state, action) => {
      state.listArray = [...state.listArray, action.payload];
    },

    deleteFromList: (state, action) => {
      state.listArray = state.listArray.filter(
        (item) => item.id !== action.payload
      );
    },

    resetList: (state) => {},

    updateItem: (state, action) => {
      state.listArray = state.listArray.map((item) =>
        item.id === action.payload
          ? { ...item, completed: !item.completed }
          : item
      );
    },

    addQuantItem: (state, action) => {
      state.listArray = state.listArray.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    },

    subQuantItem: (state, action) => {
      state.listArray = state.listArray.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    },
  },
});

export const {
  addToList,
  deleteFromList,
  resetList,
  updateItem,
  addQuantItem,
  subQuantItem,
} = listSlice.actions;
export default listSlice.reducer;

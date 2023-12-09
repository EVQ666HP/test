import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  items: [{ name: 'Deve', address: 'https://deve-bot.com/' }],
};
export const shopsSlice = createSlice({
  name: 'shops',
  initialState,
  reducers: {
    addItem(state, actions) {
      state.items.push(actions.payload);
    },
    deleteItem(state, actions) {
      state.items.splice(actions.payload, 1);
    },
    editItem(state, actions) {
      state.items[actions.payload.indx].address = actions.payload.address;
      state.items[actions.payload.indx].name = actions.payload.name;
    },
  },
});

export const { addItem, deleteItem, editItem } = shopsSlice.actions;
export default shopsSlice.reducer;

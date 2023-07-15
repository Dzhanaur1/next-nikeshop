const { createSlice } = require("@reduxjs/toolkit");

const initialState = false;
const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    setIsVisible(state, action) {
      return (state = true);
    },
    setUnvivble(state, action) {
      return (state = false);
    },
  },
});
export const { setIsVisible, setUnvivble } = popupSlice.actions;
export default popupSlice.reducer;

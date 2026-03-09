import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "User",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Add your reducers here
  },
});

export default userSlice.reducer;

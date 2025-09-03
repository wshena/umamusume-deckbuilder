import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UtilityState {
  buttonClick: {
    label: string,
    value: boolean
  }
}

const initialState: UtilityState = {
  buttonClick: {
    label: '',
    value: false
  }
};

const utilitySlice = createSlice({
  name: 'utility',
  initialState,
  reducers: {
    setButtonClick: (state, action:PayloadAction<{label: string, value:boolean}>) => {
      state.buttonClick = action.payload
    },
  },
});

export const {
  setButtonClick
} = utilitySlice.actions;
export default utilitySlice.reducer
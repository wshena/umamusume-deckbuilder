// lib/redux/slices/navigationSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NavigationState {
  isLoading: boolean;
  progress: number;
  currentPath: string;
  targetPath: string | null;
}

const initialState: NavigationState = {
  isLoading: false,
  progress: 0,
  currentPath: '/',
  targetPath: null,
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    startLoading: (state, action: PayloadAction<string>) => {
      state.isLoading = true;
      state.progress = 0;
      state.targetPath = action.payload;
    },
    updateProgress: (state, action: PayloadAction<number>) => {
      state.progress = Math.min(action.payload, 100);
    },
    finishLoading: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.progress = 100;
      state.currentPath = action.payload;
      state.targetPath = null;
      
      // Reset progress after a short delay
      setTimeout(() => {
        state.progress = 0;
      }, 200);
    },
    cancelLoading: (state) => {
      state.isLoading = false;
      state.progress = 0;
      state.targetPath = null;
    },
  },
});

export const { 
  startLoading, 
  updateProgress, 
  finishLoading, 
  cancelLoading 
} = navigationSlice.actions;

export default navigationSlice.reducer;

// Selectors
export const selectNavigationLoading = (state: { navigation: NavigationState }) => 
  state.navigation?.isLoading;
export const selectNavigationProgress = (state: { navigation: NavigationState }) => 
  state.navigation?.progress;
export const selectCurrentPath = (state: { navigation: NavigationState }) => 
  state.navigation?.currentPath;
export const selectTargetPath = (state: { navigation: NavigationState }) => 
  state.navigation?.targetPath;
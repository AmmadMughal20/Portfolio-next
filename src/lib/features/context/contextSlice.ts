import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    isDarkMode: false
}

export const contextSlice = createSlice({
    name: 'context',
    initialState,
    reducers: {
        toggleDarkMode: (state) =>
        {
            state.isDarkMode = !state.isDarkMode;
        },
    }
});
export const { toggleDarkMode } = contextSlice.actions;
export default contextSlice.reducer;
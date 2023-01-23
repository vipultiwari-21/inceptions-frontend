import { createSlice } from '@reduxjs/toolkit';

export const AccessTokenSlice = createSlice({
  name: 'accessToken',
  initialState: [],
  reducers: {
    accessTokenModifier : (state, action) => {
      const accessToken = {
        text: action.payload,
        
      };
      
      return [accessToken]

    },
   
          
    


      
  
}
});

// this is for dispatch
export const { accessTokenModifier } = AccessTokenSlice.actions;

// this is for configureStore
export default AccessTokenSlice.reducer;
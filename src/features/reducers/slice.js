import { createSlice } from '@reduxjs/toolkit';

export const Authentication = createSlice({
  name: 'auth',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const authenticator = {
        text: action.payload || false,
        
      };
      
      return [authenticator]

    },
   
          
    


      
  
}
});

// this is for dispatch
export const {addTodo} = Authentication.actions;

// this is for configureStore
export default Authentication.reducer;
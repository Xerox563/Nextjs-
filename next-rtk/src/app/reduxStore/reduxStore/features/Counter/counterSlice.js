import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:0
}

// this whole is the reducer
const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
       // below are the acions
        increement:(state) => {
            state.value+= 1
        },
        decreement:(state) => {
            state.value-= 1;
        }
    }
})

export const {increement,decreement} = counterSlice.actions;
export default counterSlice.reducer;

/* 
 :: const cnt = useSelector((state) => state.counter.count)
-> (Always same) state: This is the entire Redux state. It holds all the data for your app, like a big object.
-> (name of the slice) counter: This is the name of the slice of state we defined in counterSlice.js. In our case, counter is the part of the Redux state that handles the counter-related data.
-> (name in the initail state) count: This is the property inside the counter slice that holds the actual counter value (like 0, 1, 2, etc.).
const initialState = {
  count: 0 
}

*/
import { createSlice } from "@reduxjs/toolkit";


export let scrolSlice = createSlice({
    initialState: [],
    name: "cartSlice",
    reducers: {
            deleteFromCart: (state, action)=> {
                console.log("sss")
                return state.filter((Pro) => Pro.id !== action.payload.id)
            }
    
        }

})

export let {deleteFromCart,scroolHomeFun,scroolAbouFun, scroolServFun, scroolConFun,scroolAbouFunMOP, scroolConFunMOP} = scrolSlice.actions;

export default scrolSlice.reducer;
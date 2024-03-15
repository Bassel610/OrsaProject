import { createSlice } from "@reduxjs/toolkit";

let Start = 0

export let scrolSlice = createSlice({
    initialState: [],
    name: "scrolingSlice",
    reducers: {
        scroolHomeFun: (state, actions) => {
            window.scroll({
                top: Start,
                behavior: "smooth"
            })
        },
        scroolAbouFun: (state, actions) => {
            window.scroll({
                top: Start + (700- 110) ,
                behavior: "smooth"
            })
        },
        scroolServFun: (state, actions) => {
            window.scroll({
                top: Start + 700 + 913,
                behavior: "smooth"
            })
        },
        scroolConFun: (state, actions) => {
            window.scroll({
                top: Start + 700 + 1000,
                behavior: "smooth"
            })
        },
        scroolAbouFunMOP: (state, actions) => {
            window.scroll({
                top: Start + (700- 40) ,
                behavior: "smooth"
            })
        },
        scroolConFunMOP: (state, actions) => {
            window.scroll({
                top: Start +2500,
                behavior: "smooth"
            })
        },
        deleteFromCart: (state, action)=> {
            state.map((pro, ind) => console.log())
        }
    }
})

export let {deleteFromCart,scroolHomeFun,scroolAbouFun, scroolServFun, scroolConFun,scroolAbouFunMOP, scroolConFunMOP} = scrolSlice.actions;

export default scrolSlice.reducer;
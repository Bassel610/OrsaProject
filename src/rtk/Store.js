import { configureStore } from "@reduxjs/toolkit";
import ScroolSlice from "./Slices/Scrool-Slice";
export let store = configureStore ({
    reducer: {
        scroll: ScroolSlice
    }
})
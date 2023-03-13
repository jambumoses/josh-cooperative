import {createSlice} from "@reduxjs/toolkit";

const constantSlice = createSlice({
    name: "constant",
    initialState: {
        companyTitle: "Ongongoja",
        browserlogo: "",
        currentPageTitle: "",
        currentPage: "",
        data: "",

    },
    reducers:{
        updateConstants(state,action){
            state.data = action.payload;
        },
        updatePageTitles(state,action){
            state.currentPageTitle = action.payload;
        },
        setCurrentPage(state,action){
            state.currentPage = action.payload;
        },
    }
});

export const constantActions = constantSlice.actions;
export default constantSlice;
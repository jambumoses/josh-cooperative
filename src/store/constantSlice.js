import {createSlice} from "@reduxjs/toolkit";
import blogData from "../data/blog.json";
import galleryData from "../data/gallery.json";
import merchantData from "../data/merchant.json";
import brandsData from "../data/Brands.json";
import membersData from "../data/members.json";

const constantSlice = createSlice({
    name: "constant",
    initialState: {
        companyTitle: "Ongongoja",
        browserlogo: "",
        currentPageTitle: "",
        currentPage: "",
        data: {
            merchant: merchantData,
            blog: blogData,
            gallery: galleryData,
            brands: brandsData,
            members: membersData
        },

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
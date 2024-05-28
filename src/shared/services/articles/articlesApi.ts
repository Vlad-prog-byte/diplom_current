import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@shared/axios";
import { IArticle } from "@shared/types/articles/articlesTypes";

export const fetchArticles = createAsyncThunk<IArticle[]>("articles/get", async () => {
    const data = await axiosInstance.get("projects/1/issues").then(response => response.data);
    return data;
});
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchArticles } from "@shared/services/articles/articlesApi";
import { IArticle, IPaper } from "@shared/types/articles/articlesTypes";


export interface IPapersState {
    papers: IPaper[]
}

const initialState: IPapersState =  {
    papers: []
}



// export interface IPaper {
//     id: number,
//     subject: string,
//     createdOn?: Date,
//     updatedOn: Date
// }

export  const articlesSlice = createSlice({
    name: "articles",
    initialState: initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(fetchArticles.fulfilled, (state, action: PayloadAction<IArticle[]>) => {
            state.papers = action.payload.map(article => {
                return {
                id: article.id, 
                subject: article.subject, 
                createdOn: article.createdOn, 
                updatedOn: article.updatedOn
                }
            });
            console.log("add case state.papers=", state.papers);
        });
        builder.addCase(fetchArticles.rejected, (state) => {
            state.papers = [];
        });
    }
})

export const {actions: articlesActions, reducer: articlesReducer} = articlesSlice;
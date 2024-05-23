import type { RootState } from "@app/store";

export const getArticles = (state: RootState) => state.articles.papers;
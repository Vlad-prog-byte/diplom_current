import { useAppDispatch } from "@shared/hooks/hooks";
import { getArticles } from "@shared/selectors/articles/articlesSelectors";
import { fetchArticles } from "@shared/services/articles/articlesApi";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {  ArticleCard } from "@bauman-conference-library/mui-lib";
import { title } from "process";
import { Widget} from "@bauman-conference-library/interface";
import { props } from "@bauman-conference-library/interface"

const ArticlesPage = () => {
    const dispatch = useAppDispatch();
    const articles = useSelector( getArticles );
    useEffect(() => {
        console.log("app console", articles);
        dispatch(fetchArticles());
    }, [dispatch])

    console.log("ArticlesPage", "arcticles=", articles)
    return (
        <div>
                {articles.map(article => {
                    return <div><p>{article.subject}</p></div>
                })}
            {/* {articles.map(article => {
                const preArticle = {
                    title: article.subject,
                    creation_date: article.createdOn || article.updatedOn,
                    last_update_date: article.updatedOn,
                    review_state: "reviewed"
                }
                return (<ArticleCard {...preArticle}/>)
            })} */}
        </div>
    );
}

export default ArticlesPage;
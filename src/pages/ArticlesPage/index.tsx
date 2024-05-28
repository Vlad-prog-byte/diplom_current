import { useAppDispatch } from "@shared/hooks/hooks";
import { getArticles } from "@shared/selectors/articles/articlesSelectors";
import { fetchArticles } from "@shared/services/articles/articlesApi";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {  ArticleCard } from "@bauman-conference-library/mui-lib";
import { Button, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";

const ArticlesPage = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const articles = useSelector( getArticles );
    useEffect(() => {
        dispatch(fetchArticles());
    }, [dispatch])
    console.log(articles)
    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            {
                articles.map(article => {
                    const preArticle = {
                        title: article.subject,
                        creation_date: new Date(article.createdOn || article.updatedOn),
                        last_update_date: new Date(article.updatedOn),
                        description: article.description,
                        topic: "Искусственный интеллект в автоматизированных системах управления и обработки данных",
                        update_href: `/articles/put/${article.id}`
                    }
                    return (<div style={{marginBottom: "40px"}}><ArticleCard {...preArticle}   review_state={"not reviewed"}/></div>)
                })
            }
                <Button
                    startIcon={<AddIcon/>} 
                    variant="contained"
                    size="large"
                    onClick={() => navigate('/articles/add')}
                > 
                    <Typography variant="h2" color="white"> Добавить статью </Typography>
                </Button>
        </div>
    );
}

export default ArticlesPage;
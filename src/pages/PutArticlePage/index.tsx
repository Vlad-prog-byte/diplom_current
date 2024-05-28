import { ArticleForm } from "@bauman-conference-library/mui-lib";
import { axiosInstance } from "@shared/axios";
import { getCookie } from "@shared/cookie/getCookie";
import React, { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from "react-redux";
import { getArticles } from "@shared/selectors/articles/articlesSelectors";

const PutArticlePage = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const article = useSelector( getArticles ).filter(value => String(value.id) == id)[0]

    const handleClick = (title: string, description: string, priority: number, files: Array<any>)  => {
        const data = getCookie('csrftoken')
        const formData = new FormData()
        formData.append('subject', title)
        formData.append('description', description)
        formData.append('priority_id', String(priority))

        if (files) {
            for(let i = 0; i < files.length; i++) {
                formData.append('files', files[0])
            }
        }
        axiosInstance.put(`/projects/1/issues/${id}`, formData, { headers: {
            'X-CSRFToken': data
        }})
        console.log("PUT")
        navigate(-1)
      };
    return (
        <ArticleForm  title={article.subject} description={article.description} back_href="http://127.0.0.1:3000/arcticles" submit_callback={handleClick}/>
    );
}

export default PutArticlePage
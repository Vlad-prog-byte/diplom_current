import React, { useState } from "react";
import {  ArticleForm } from "@bauman-conference-library/mui-lib";
import { Input } from "@mui/material";
import axios from "axios";
import { axiosInstance } from "@shared/axios";
import { getCookie } from "@shared/cookie/getCookie";
import { useNavigate } from "react-router-dom";

const AddArticlePage = () => {
    const navigate = useNavigate()
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
        axiosInstance.post('/projects/1/issues', formData, { headers: {
            'X-CSRFToken': data
        }})
        navigate(-1)
      };
    return (
            <ArticleForm back_href="http://127.0.0.1:3000/arcticles"  submit_callback={handleClick}/>
    )
}

export default AddArticlePage;
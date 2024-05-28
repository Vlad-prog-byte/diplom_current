import React, { FC, useEffect } from 'react';
import Routing from "@pages/index"
import { mui, Navbar, Footer, Logo } from "@bauman-conference-library/mui-lib";
import { Link, useNavigate } from "react-router-dom"; 
import Button from '@mui/material/Button';
import "./style.css"
import { useSelector } from 'react-redux';
import { getUserIsInit } from '@shared/selectors/auth/authSelectors';
import { fetchAuth, fetchLogout } from '@shared/services/auth/authApi';
import { useAppDispatch } from '@shared/hooks/hooks';
import { AppDispatch } from './store';
import { useTheme } from '@bauman-conference-library/mui-lib';
import { ThemeProvider } from '@mui/material';

const App = () => {
    const navbar = {
        auth_href: "#",
        home_href: "#",
        logo_name: "#",
        logo_img: "eferegew",
    }

    const theme = useTheme({})
    const navigate = useNavigate();
    const footer = {
        email: "bmstuaiconf@yandex.ru",
        start_date: new Date('2024-04-27'),
        end_date: new Date('2025-04-27'),
    }

    const dispatch = useAppDispatch();
    const isInit = useSelector( getUserIsInit );
    useEffect(() => {
        dispatch(fetchAuth());
    }, [dispatch])


    const signin_callback = () => {
        const url = "http://science.iu5.bmstu.ru/sso/authorize?redirect_uri=http://127.0.0.1:8000/api/oauth/callback";
        window.location = url as unknown as Location;
    }

    const logout_callback = () => {
        navigate("/")
        dispatch(fetchLogout());
    }
    return (
        <ThemeProvider theme={theme}>
            <div className='container'>
                <Navbar 
                    is_authenticated={isInit}
                    logout_callback={logout_callback}
                    signin_callback={signin_callback}
                    home_href='#'
                    auth_href='#'
                    logo_name='#'
                    logo_img='#'
                >
                    <mui.Link underline='none' to="/organizers" component={ Link }> Организаторы </mui.Link>
                    {/* <mui.Link underline='none' to="/program" component={ Link }> Программа </mui.Link>  */}
                    <mui.Link underline='none' to="/thematics" component={ Link }> Тематика </mui.Link> 
                    {/* <mui.Link underline='none' to="/requirements" component={ Link }> Требования </mui.Link>  */}
                    {/* <mui.Link underline='none' to="/IIAS" component={ Link }> ИИАСУ’22 </mui.Link> */}
                    { isInit ? <mui.Link to="/arcticles" component={ Link }> Статьи </mui.Link> : null }
                </Navbar>
                <div className="pages">
                    <Routing isInit={ isInit }/>
                </div>
                <Footer {...footer}>
                    <Logo img={<img src='images/bmstu.png'/>} variant="h4" width='350px' children="Искусственный интеллект в автоматизированных системах управления и обработки данных"/>
                    <Logo img={<img src='images/brain.png'/>} variant='h4' width='350px' children='Искусственный интеллект в автоматизированных системах управления и обработки данных'/>
                    <Logo img={<img src='images/iu5.png'/>} variant='h4' width='350px' children='Кафедра ИУ5 Системы обработки информации и управления'/>
                </Footer>
            </div>
        </ThemeProvider>
    );
};


interface ILogin {
    isInit: boolean,
    dispatch: AppDispatch
}

export default App;

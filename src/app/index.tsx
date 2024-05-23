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

const App = () => {
    const navbar = {
        auth_href: "#",
        home_href: "#",
        logo_name: "#",
        logo_img: "eferegew",
    }

    const footer = {
        email: "vlad2mickevich@gmail.com",
        start_date: new Date('2024-04-27'),
        end_date: new Date('2024-04-27'),
    }

    const dispatch = useAppDispatch();
    const isInit = useSelector( getUserIsInit );
    console.log("App isInit=", isInit)
    useEffect(() => {
        dispatch(fetchAuth());
    }, [dispatch])
    return (
        <div className='container'>
            <Navbar {...navbar} signin_callback={() => {}} is_authenticated={true}>
                <mui.Link to="/organizers" component={ Link }> Организаторы </mui.Link>
                <mui.Link to="/program" component={ Link }> Программа </mui.Link> 
                <mui.Link to="/thematics" component={ Link }> Тематика </mui.Link> 
                <mui.Link to="/requirements" component={ Link }> Требования </mui.Link> 
                <mui.Link to="/IIAS" component={ Link }> ИИАСУ’22 </mui.Link>
                { isInit ? <mui.Link to="/arcticles" component={ Link }> Статьи </mui.Link> : null }
            </Navbar>
            <Login isInit={isInit} dispatch={dispatch}/>
            <div className="pages">
                <Routing isInit={ isInit }/>
            </div>
            <Footer {...footer}>
                {}
            </Footer>
        </div>
    );
};


interface ILogin {
    isInit: boolean,
    dispatch: AppDispatch
}



const Login: FC<ILogin> = (props) => {
    const navigate = useNavigate();
    const onOauth = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!props.isInit) {
            const url = "http://science.iu5.bmstu.ru/sso/authorize?redirect_uri=http://127.0.0.1:8000/api/oauth/callback";
            window.location = url as unknown as Location;
        } else {
            navigate("/")
            props.dispatch(fetchLogout());
        }

    }
    return (
        <div>
            <Button onClick={ onOauth }>{props.isInit ? "Выйти" : "Войти" }</Button>
        </div>
    );
}

export default App;

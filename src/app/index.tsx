import React from 'react';
import Routing from "@pages/index"
import { components } from "@bauman-conference-library/mui-lib";
import { Widget } from "@bauman-conference-library/interface";
import { Link } from "react-router-dom"; 
import "./style.css"
const App = () => {
    const navbar = {
        auth_href: "#",
        home_href: "#",
        logo_name: "#",
        logo_img: "eferegew",
        ...new Widget()
    }

    return (
        <div className='container'>
            <components.Navbar {...navbar}>
                <components.mui.Link to="#" component={ Link }> Организаторы </components.mui.Link>
                <components.mui.Link to="#" component={ Link }> Программа </components.mui.Link> 
                <components.mui.Link to="#" component={ Link }> Тематика </components.mui.Link> 
                <components.mui.Link to="#" component={ Link }> Требования </components.mui.Link> 
                <components.mui.Link to="#" component={ Link }> ИИАСУ’22 </components.mui.Link>
            </components.Navbar>
            <div className="pages">
                <Routing/>
            </div>
            <components.Footer/>
        </div>
    );
};

export default App;

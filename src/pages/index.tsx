import React from "react";
import { Routes, Route } from "react-router-dom";
import  MainPage from "@pages/MainPage";
import OrganizersPage from "@pages/OrganizersPage";
import ProgramPage from "@pages/ProgramPage";
import ThematicsPage from "@pages/ThematicsPage";
import RequirementsPage from "@pages/RequirementsPage";
import IIASPage from "@pages/IIASPage";
import ArticlesPage from "./ArticlesPage";
import AddArticlePage from "./AddArticlePage";
import PutArticlePage from "./PutArticlePage";


interface RoutingProps {
    isInit: boolean
}

const Routing = ({ isInit }: RoutingProps) => {
    return (
            <Routes>
                <Route path="/" element={ <MainPage/> }/>
                <Route path="/organizers" element={ <OrganizersPage/> }/>
                <Route path="/program" element={ <ProgramPage/> }/>
                <Route path="/thematics" element={ <ThematicsPage/> }/>
                <Route path="/requirements" element={ <RequirementsPage/> }/>
                <Route path="/IIAS" element={ <IIASPage/> }/>
                { isInit ? <Route path="/arcticles" element= { <ArticlesPage/>}/> : null }
                { isInit ? <Route path="/articles/add" element={ <AddArticlePage/>}/> : null}
                { isInit ? <Route path="/articles/put/:id" element={ <PutArticlePage/>}/> : null}
            </Routes>
    );
}

export default Routing;
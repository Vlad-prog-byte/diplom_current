import React from "react";
import { Routes, Route } from "react-router-dom";
import  MainPage from "@pages/MainPage";
// import OrganizersPage from "@pages/OrganizersPage";
// import ProgramPage from "@pages/ProgramPage";
// import ThematicsPage from "@pages/ThematicsPage";
// import RequirementsPage from "@pages/RequirementsPage";
// import IIASPage from "@pages/IIASPage";



const Routing = () => {
    return (
            <Routes>
                <Route path="/" element={ <MainPage/> }/>
                {/* <Route path="/organizers" element={ <OrganizersPage/> }/>
                <Route path="/program" element={ <ProgramPage/> }/>
                <Route path="/thematics" element={ <ThematicsPage/> }/>
                <Route path="/requirements" element={ <RequirementsPage/> }/>
                <Route path="/IIAS" element={ <IIASPage/> }/> */}
            </Routes>
    );
}

export default Routing;
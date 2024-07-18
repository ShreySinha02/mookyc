import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useKeycloak } from "@react-keycloak/web";

const PrivateRoutes =()=>{
    const { keycloak, initialized } = useKeycloak();
    const navigate = useNavigate();
    return(
        <div>
           { !!keycloak.authenticated?<Outlet/>:navigate("/")}
        </div>
    )
}

export default PrivateRoutes;
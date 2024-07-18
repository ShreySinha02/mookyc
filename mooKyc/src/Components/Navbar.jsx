import React from "react";
import { useKeycloak } from "@react-keycloak/web";
import { useNavigate } from "react-router-dom";
import logo from "../Stellapps_logo.png";
import "../App.css"

const NavBar = ()=>{
    const navigate = useNavigate();
    const { keycloak, initialized } = useKeycloak();
   

    
    
    return(
        <div
        className="nav"
        >
            <div style={{width:"75%",position:"absolute",left:"30px",top:"12px"}}>
         <img src={logo} alt="logo" style={{width:"20%", height:"100%"}}/>
         </div>
          <button
          style={{
            position: "absolute",
            top: "40px",
            right: "80px",
            borderRadius:"8px",
            padding:"5px",
            backgroundColor:"blue",
            color:"white",
            width:"70px",
            fontFamily:"cursive",
            border:"none"
        }}
           onClick={()=>keycloak.logout() 
      }>Logout</button>
          {keycloak.authenticated===false?navigate("/"):""}
        </div>
    )
}

export default NavBar;
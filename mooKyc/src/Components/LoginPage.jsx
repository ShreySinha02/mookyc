import React,{useEffect,useState} from "react";
import { useKeycloak } from "@react-keycloak/web";
import { useNavigate } from "react-router-dom";
import logo from "../Stellapps_logo.png";
import axios from "axios";



const LoginPage =()=>{
    const { keycloak, initialized } = useKeycloak();
    const [username,setUserName]=useState('')
    const navigate = useNavigate();
    console.log("keyCloak",keycloak)
    const login =()=>{
        localStorage.setItem("currentUser",keycloak.idToken);
        console.log(keycloak.authenticated,"keycloak");
        navigate("/tableview");
    }
    const url=`http://164.52.202.234:9110/approval/getApprover?approver_name=8147919971`
    const config={
        'header':{
            'accept':'application/json'
        }
    }
    const handleSubitUsername=()=>{
        axios.get(url,config).then((res)=>(console.log(res)))
       }
    const handleChange=(event)=>{
        setUserName(event.target.value)
    }

    return(
            
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",border:"2px solid white",width:"350px",margin:"140px 0px 0px 380px",padding:"30px",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"15px",backgroundColor:"white"}}>
            <img 
            style={{ width: "90%",height:"10%", margin: "1rem auto 30px ",padding:"0.2rem"}}
            src={logo} alt="no img"/>
             <input type="text" onChange={handleChange} placeholder="Enter Username"/>
            <button onClick={handleSubitUsername}>submit</button>
            <button 
            style={
                {
                    marginTop:"5px",
                    padding:"10px",
                width:"190px",
                borderRadius:"5px",
                fontFamily:"fantasy",
                color:"white",
                backgroundColor:"red",
                borderColor:"red",
                fontSize:"15px"}}
            onClick={()=>keycloak.login()}
            >
                Login
            </button>
            {keycloak.authenticated===true?login():""}
              
            </div>
            
    )
}

export default LoginPage;
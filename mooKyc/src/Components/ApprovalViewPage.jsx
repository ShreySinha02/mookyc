import React ,{useState,useEffect}from "react";
import imageIcon from "../icons8-image-48.png";
import rootIcon from "../mooKYC_Approval1.29112023.png"
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import noImg from "../noImage.png";


const ImageViewPage =()=>{
  const[imageData,setImageData]=useState(null);
  const{imageId}=useParams()
  const token = localStorage.getItem("currentUser");
  const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer"+" "+token
      }
    };
  useEffect(()=>{
      fetch(`https://mooon-staging.smartmoo.com/mooon/api/documents?objectId.equals=${imageId}&objectClass.equals=Cattle`,requestOptions)
      .then(res=>res.json()).then(res=>setImageData(res))
  },[]);
//  console.log("restt",!!imageData,imageData )
  https://mooon-staging.smartmoo.com/mooon/d/3401/2024-01-09/cattle/50579605-097b-494b-95d8-992acd5827fc.jpeg
  // const imgUrl = `https://mooon-staging.smartmoo.com/mooon${data.url}`;
 return(
    <div style={{textAlign:"center",marginTop:"150px"}}>
      
   {!!imageData?imageData.length>0?
   (
   imageData.map((data,i)=>
   
   <div style={{display:"flex",justifyContent:"center"}}>
    <div style={{border:"2px solid black"}}>
    {console.log("data",data.url)}
     <img src={`https://mooon-staging.smartmoo.com/mooon${data.url}`} key={i} alt="No Image" />
     </div>
     </div>
   )
   ):<img src={noImg} alt="no img" />:(<img src={noImg} alt="no img" />,console.log("ramas"))}

    
    </div>
 )
}

export default ImageViewPage;
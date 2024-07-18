import React, { useMemo,useEffect,useState,useCallback} from "react";
import "../App.css";
import EnhanceTable from "./Table";
import ViewIcon from "../ViewIcon";
import ColumnFilter from "./ColumnFilter";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import axios from 'axios'



const ReactTable =()=>{
    
    const [cattleInfo,setCattleInfo]=useState();
    const [filteredLrns, setFilteredLrns] = useState(null);
    const [filteredOrgs, setFilteredOrgs] = useState(null);
    const [filteredSubOrgs, setFilteredSubOrgs] = useState(null);
    const token = localStorage.getItem("currentUser");
    const navigate= useNavigate();
    const config = {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      };
    //   console.log("esed",filteredLrns)
      function multiSelectFilter(rows, columnIds, filterValue) {
        // console.log("rama",rows,"aaa",columnIds);
        // rows.filter((row) => console.log("rowed",filterValue.includes(row.values[columnIds])));
        // console.log("process",filterValue.length === 0
        // ? rows
        // : rows.filter((row) => filterValue.includes(row.original[columnIds])))
        return filterValue.length === 0
          ? rows
          : rows.filter((row) => filterValue.includes(row.values[columnIds]));
      }

 

     
    const api = "https://actisens-uat.smartmoo.com/smarthms-utils/v1/cattles?pageNumber=0&pageSize=999";

        useEffect(()=>{
            axios.get(`https://actisens-uat.smartmoo.com/smarthms-utils/v1/cattles?pageNumber=0&pageSize=999`, config)
            .then((res) => {
              // Assuming res.data.content is the array you want
              const content = res.data.content;
            //   console.log(dataArray);
              setCattleInfo(content)
            })
            .catch((e) => { 
              console.log(e);
            })
        },[]);
        
        const cattleData = useMemo(()=>cattleInfo);
        // console.log(data)
      
        
   
    const columns = useMemo(()=>[
        {
            Header:"SNo",
             id:"index",
             accessor: "",
            
             Cell: (cell) => {

                return <div>{parseInt(cell.row.id)+1}</div>;
            },
            disableSortBy: false,
    disableFilters: true,
        },
        {
            Header:"Lrn",
            accessor:"lrn",
            filter: multiSelectFilter
        },
        {
            Header:"FarmId",
            accessor:"id",
            
        },
        {
            Header:"Org",
            accessor:"rootOrg.name",
            filter: multiSelectFilter
        },
        {
            Header:"Sub-Org",
            accessor:"org.name",
            filter: multiSelectFilter,
            disableFilters:false

        },
        {
            Header:"Captured-Date",
            
            disableFilters:true
        },
        {
            Header:"CapturedBy",
        
            disableFilters:true
        },
        {
            Header:"ApprovalStatus",
        
            disableFilters:true
        },
        {
            Header:"ApprovedDate",
            
            disableFilters:true
        },
        {
            Header:"View",
            
            disableFilters:true,
            Cell:(props)=>{
                // console.log("props",props)
                return(
                    <div>
                        
                       <button style={{background:"none",border:"none"}} onClick={()=>navigate("/ApprovalViewPage/"+props.row.original.id)}>
                            
                            <ViewIcon />
                        </button>
                        
                    </div>
                )
            }
        }
        
        
    ],[]);
    //   console.log("cattleInfo",cattleInfo)
    return(
        <>
        
        
        {cattleData&&cattleData.length!==0?
        // <div style={{margin:"140px 30px 10px 40px",border:"1px solid black",width:"90%"}}>
        <EnhanceTable 
        data={cattleData}
        columns={columns}
        filteredLrns={filteredLrns}
        setFilteredLrns={setFilteredLrns}
        filteredOrgs={filteredOrgs}
        setFilteredOrgs={setFilteredOrgs}
        filteredSubOrgs={filteredSubOrgs}
        setFilteredSubOrgs={setFilteredSubOrgs}
        
        />
        // </div>
        :
        <div style={{textAlign:"center",marginTop:"320px"}}>
        <CircularProgress />
        </div>
        }

        </>
    )
}
export default ReactTable;
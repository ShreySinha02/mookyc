import React,{useMemo,useState,useEffect,useCallback} from "react";
import { useTable,useSortBy,usePagination,useGlobalFilter,useFilters } from "react-table";
// import {COLUMNS} from "./Columns"
import MOCK_DATA from "./MOCK_DATA.json";
import { Table,TableHead,TableBody,TableCell,TableRow,TableSortLabel,TablePagination,TableFooter
 } from "@mui/material";
// import { TablePaginationActions } from '@mui/material';  

import Select from "react-select";



const EnhanceTable =({columns,cattleData,setFilteredLrns,filteredLrns,filteredOrgs,setFilteredOrgs,filteredSubOrgs,setFilteredSubOrgs})=>{
    // const columns =useMemo(()=>COLUMNS,[]);
    // const data = useMemo(()=>MOCK_DATA,[]);
    // useEffect(() => {
    //   if (filteredLrns) {
    //     setFilter("lrn", filteredLrns);
    //   }
    // }, [filteredLrns, setFilter]);
    
    const[filterData,setFilterData]=useState(null);
    const [itemOffset, setItemOffset] = useState(0);

    const tableInstance =useTable(
        {columns,cattleData,initialState: { pageIndex: 0 , pageSize :5 }},useFilters,useGlobalFilter,useSortBy,usePagination);
    const {getTableProps,setFilter,page,getTableBodyProps,gotoPage,setPageSize,headerGroups,rows,preGlobalFilteredRows,setGlobalFilter,prepareRow,state: { pageIndex, pageSize, selectedRowIds,
        globalFilter }}=tableInstance;
        useEffect(() => {
          if (filteredLrns) {
            setFilter("lrn",filteredLrns);
          }
        }, [filteredLrns, setFilter]);

        useEffect(() => {
          if (filteredOrgs) {
            setFilter("rootOrg.name",filteredOrgs);
          }
        }, [filteredOrgs, setFilter]);

        useEffect(() => {
          if (filteredSubOrgs) {
            setFilter("org.name",filteredSubOrgs);
          }
        }, [filteredSubOrgs, setFilter]);
    
    const handleChangePage = (event, newPage) => {
      console.log(newPage)
        gotoPage(newPage)
      }
    
      const handleChangeRowsPerPage = event => {
        console.log(event.target.value)
        setPageSize(Number(event.target.value))
      }

      const lrns = useMemo(() => {
        const uniqueAges = [...new Set(cattleData.map((item) => item.lrn))];
        return uniqueAges.map((lrn) => {
          return { value: lrn, label: `lrn - ${lrn}` };
        });
      }, [cattleData]);

      // const lrnss = useMemo(() => {
      //   const uniqueAges = [...new Set(filterData.map((item) => item.lrn))];
      //   return uniqueAges.map((lrn) => {
      //     return { value: lrn, label: `lrn - ${lrn}` };
      //   });
      // }, [data]);

      const orgs = useMemo(() => {
        const uniqueAges = [...new Set(cattleData.map((item) => item.rootOrg.name))];
        return uniqueAges.map((lrn) => {
          return { value: lrn, label: `Org - ${lrn}` };
        });
      }, [cattleData]);
      // const orgss = useMemo(() => {
      //   const uniqueAges = [...new Set(filterData.map((item) => item.rootOrg.name))];
      //   return uniqueAges.map((lrn) => {
      //     return { value: lrn, label: `Org - ${lrn}` };
      //   });
      // }, [data]);

      const subOrgs = useMemo(() => {
        
        const uniqueAges = [...new Set(cattleData.map((item) => item.org.name))];
        return uniqueAges.map((lrn) => {
          return { value: lrn, label: `SubOrg - ${lrn}` };
        });
      }, [cattleData]);

      // const subOrgss = useMemo(() => {
        
      //   const uniqueAges = [...new Set(filterData.map((item) => item.org.name))];
      //   return uniqueAges.map((lrn) => {
      //     return { value: lrn, label: `SubOrg - ${lrn}` };
      //   });
      // }, [data]);

      const handleOnSelectChange = useCallback((selectOption) => {
        setFilteredLrns(selectOption.map((lrn) => lrn.value));
      }, []);
      const handleOnSelectChangeOrg = useCallback((selectOption) => {
        // console.log("valie",selectOption.map((lrn)=>console.log("valll",lrn)))
        setFilteredOrgs(selectOption.map((lrn) => lrn.value));
      }, []);
      const handleOnSelectChangeSubOrg = useCallback((selectOption) => {
        // setFilterData(selectOption);
        setFilteredSubOrgs(selectOption.map((lrn) => lrn.value));
      }, []);
      
    return(
        
             <div style={{boxShadow: "0 0.125rem 0.25rem 0 rgb(0 0 0 / 11%)",marginTop:"140px"}}>
              <div style={{display:"flex"}}>
              {/* <div style={{width:"160px",margin:"20px 20px 10px 20px"}}>
                <Select placeholder={"LRN FILTER "} 
                 closeMenuOnSelect={false}
                 isMulti
                 options={lrns}
                 onChange={handleOnSelectChange}
                />
                </div> */}
                <div style={{width:"160px",margin:"20px 20px 10px 20px"}}>
                <Select placeholder={"Org FILTER "} 
                 closeMenuOnSelect={false}
                 isMulti
                 options={orgs}
                 onChange={handleOnSelectChangeOrg}
                />
                </div>
                <div style={{width:"160px",margin:"20px 20px 10px 20px"}}>
                <Select placeholder={"SubOrg FILTER "} 
                 closeMenuOnSelect={false}
                 isMulti
                 options={subOrgs}
                 onChange={handleOnSelectChangeSubOrg}
                />
                </div>
                </div>
                
                {/* <TableToolbar
              
              preGlobalFilteredRows={preGlobalFilteredRows}
              setGlobalFilter={setGlobalFilter}
              globalFilter={globalFilter}
              */}
              {/* // topAdd = {topAdd}
            // deleteUserHandler={deleteUserHandler} */}
            
          {/* /> */}
          
          
        <table  {...getTableProps()}>
        <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
                <TableBody {...getTableBodyProps()}>
                    {page.map((row, i) => {
                    prepareRow(row)
                    return (
                        <TableRow {...row.getRowProps()}>
                        {row.cells.map(cell => {
                            return <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell> 
                        })}
                        </TableRow>
                    )
                    })}
                </TableBody>
            </table>


            <TableFooter>
              <TableRow >
                <TablePagination
                    rowsPerPageOptions={[
                    5,
                    10,
                    15,
                    { label: 'All', value: cattleData.length },
                  ]}
                  colSpan={3}
                  count={cattleData.length}
                  rowsPerPage={pageSize}
                  page={pageIndex}
                  SelectProps={{
                    inputProps: { 'aria-label': 'rows per page' },
                    native: true,
                  }}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                  // onRowsPerPageChange={handleChangeRowsPerPage}
                  //  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
        </div>
        
    )
}

export default EnhanceTable;
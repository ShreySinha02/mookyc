import React,{useEffect} from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { useKeycloak } from "@react-keycloak/web";
import LoginPage from "./Components/LoginPage";
import NavBar from "./Components/Navbar";
import ReactTable from "./Components/ReactTable";
import ImageViewPage from "./Components/ApprovalViewPage";
import PrivateRoutes from "./PrivateRoutes";


function App() {
  const { keycloak, initialized } = useKeycloak();
  const router= createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<LoginPage/>} />
        <Route element={<PrivateRoutes/>}>
        <Route path="/tableview" element={<><NavBar/><ReactTable/></>} exact/>
        <Route path="/ApprovalViewPage/:imageId" element={<><NavBar/><ImageViewPage/></>} exact/>
      </Route>
      </>
      
    )
  )
  return (
    <div>
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>} exact/>
        <Route element={<PrivateRoutes/>}>
        <Route path="/tableview" element={<><NavBar/><ReactTable/></>} exact/>
        <Route path="/ApprovalViewPage/:imageId" element={<><NavBar/><ImageViewPage/></>} exact/>
        </Route>
        
      </Routes>
      </BrowserRouter> */}
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;

import {Navigate, Routes, Route} from "react-router-dom";
import Layout from "./layout/layout.tsx";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout>Home Page</Layout>}/>
            <Route path="/user-profile" element={<span>USER PROFILE PAGE</span>}/>
            <Route path="*" element={<Navigate to={'/'}></Navigate>}/>
        </Routes>
    )
};

export default AppRoutes;
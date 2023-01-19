import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "../components/pages/ErrorPage";
import HomePage from "../components/pages/HomePage";

const PageRouter:React.FC = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path={"/*"} element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default PageRouter;
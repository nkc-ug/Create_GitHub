import { BrowserRouter, Route, Routes } from "react-router-dom";
import DownoladPage from "../components/pages/DownloadPage";
import ErrorPage from "../components/pages/ErrorPage";
import HomePage from "../components/pages/HomePage";
import SendPage from "../components/pages/SendPage";

const PageRouter:React.FC = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path={"/SendPage"} element={<SendPage/>}/>
                <Route path={"/DownloadPage/*"} element={<DownoladPage/>}/>
                <Route path={"/*"} element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default PageRouter;
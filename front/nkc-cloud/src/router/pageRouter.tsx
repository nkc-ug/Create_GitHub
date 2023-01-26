import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "../components/pages/ErrorPage";
import HomePage from "../components/pages/HomePage";
import SendPage from "../components/pages/SendPage";

const PageRouter:React.FC = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path={"/SendPage"} element={<SendPage/>}/>
                <Route path={"/*"} element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default PageRouter;
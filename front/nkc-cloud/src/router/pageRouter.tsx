import { BrowserRouter, Route, Routes } from "react-router-dom";

const PageRouter:React.FC = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path={"./"} element={<></>}/>
                <Route path={"./"} element={<></>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default PageRouter;
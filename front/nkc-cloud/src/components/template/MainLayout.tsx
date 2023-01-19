import { Box } from "@mui/material";
import { TsxChild } from "../../util/tsType";
import NavBar from "../organism/NavBar";

const MainLayout:React.FC<TsxChild> = (props) => {
    return(
        <Box sx={{ bgcolor:'primary.light'}}>
            <NavBar/>
            {props.children}  
        </Box>
    )
}

export default MainLayout;
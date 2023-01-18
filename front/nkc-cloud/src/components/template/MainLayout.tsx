import { Box } from "@mui/material";
import { TTsxChild } from "../../util/tsType";
import NavBar from "../organism/NavBar";

const MainLayout:React.FC<TTsxChild> = (props) => {
    return(
        <Box sx={{ bgcolor:'primary.light'}}>
            <NavBar/>
            {props.children}  
        </Box>
    )
}

export default MainLayout;
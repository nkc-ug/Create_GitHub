import { Box } from "@mui/material";
import { TsxChildType } from "../../util/tsType";
import NavBar from "../organism/NavBar";

const BaseLayout:React.FC<TsxChildType> = (props) => {
    const { children } = props;
    return(
        <Box sx={{ bgcolor:'primary.light'}}>
            <NavBar/>
            {children} 
            <Box sx={{ height:"500px" }}></Box>
        </Box>
    )
}

export default BaseLayout;
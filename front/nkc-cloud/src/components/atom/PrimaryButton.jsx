import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

const PrimaryButton= (props) => {
    return(
        <Button variant="contained"  onClick={() => {props.stateAction(!props.state)}} sx={{ p:1, px:2 }}>
            {props.icon}
            <Box sx={{ mr:1 }} />
            <Typography variant="h6" noWrap={true}>
                {props.label}
            </Typography>
        </Button>
    )
}

export default PrimaryButton;
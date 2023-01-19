import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

const SecondaryButton= (props) => {
    return(
        <Button variant="contained"  onClick={() => {props.stateAction(!props.state)}} sx={{ bgcolor:'secondary.main', color:'primary.main', p:1, px:2 }}>
            {props.icon}
            <Box sx={{ mr:1 }} />
            <Typography variant="subtitle1" noWrap={true}>
                {props.label}
            </Typography>
        </Button>
    )
}

export default SecondaryButton;
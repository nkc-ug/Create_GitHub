import { AppBar, Button, Container, IconButton, Toolbar, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import logo from "../../img/logo.png";

const NavBar:React.FC = () => {
    const navigation = useNavigate();

    const chengeUser = () => {
        navigation("/")
    }

    const chengeHome = () => {
        navigation("/")
    }
    const AppBarItemList = [
        {
            text:'NKC-Cloudとは',
            action: () => {
                navigation("/");
            }
        },
        {
            text:'使い方',
            action: () => {
                navigation("/");
            }
        },
    ]

    return(
        <AppBar position='static' sx={{ bgcolor:'secondary.main' }}>
            {/* forPC */}
            <Container maxWidth="xl">
                <Toolbar sx={{ display:{ xs:'none', md: 'flex' } }}>
                    <Button onClick={chengeHome} sx={{ my:1 }}>
                        <img src={logo} alt="logo" width={120}/>
                    </Button>
                    <Box sx={{ ml:'auto'}}>
                        <Stack direction='row' alignItems='center'>
                            {AppBarItemList.map(( AppBarItem ) => {
                                return(
                                    <Button key={AppBarItem.text} onClick={AppBarItem.action} sx={{ mr:2 }}>
                                        <Typography variant="h6">
                                            {AppBarItem.text}
                                        </Typography>
                                    </Button>
                                )
                            })}
                            <IconButton onClick={chengeUser}>
                                <AccountCircleIcon fontSize="large" sx={{ color:'primary.main' }}/>
                            </IconButton>
                        </Stack>
                    </Box>
                </Toolbar>
            </Container>
            {/* forPhone */}
            <Container disableGutters>
                <Toolbar sx={{ display:{ xs:'flex', md: 'none' } }}>
                    <IconButton size="large">
                        <MenuIcon fontSize="large"/>
                    </IconButton>
                    <Button sx={{ my:1, mx:'auto' }}>
                        <img src={logo} alt="logo" width={100}/>
                    </Button>
                    <MenuIcon fontSize="large" sx={{ color:"secondary.main" }}/>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavBar;
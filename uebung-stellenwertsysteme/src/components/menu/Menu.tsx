import AppBar from '@mui/material/AppBar';
import {IconButton, Stack, Toolbar} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';

function Menu() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Stack direction="row"
                       justifyContent="flex-end"
                       alignItems="center"
                       spacing={2}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                    >
                        <SettingsIcon/>
                    </IconButton>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}

export default Menu;

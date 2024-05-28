import AppBar from '@mui/material/AppBar';
import {IconButton, Stack, Toolbar} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import {useState} from "react";
import Settings from "../settings/Settings";

type MenuProps = {
    callBackOnSettingsChange: Function;
}

const Menu: React.FC<MenuProps> = (props: MenuProps) => {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    function handleSettingsClick() {
        setIsSettingsOpen(!isSettingsOpen);
    }

    function handleSettingsClose() {
        setIsSettingsOpen(false);
    }

    function handleSettingsChange(values: any) {
        props.callBackOnSettingsChange(values);
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <Stack direction="row"
                       justifyContent="flex-end"
                       alignItems="center"
                       spacing={2}>
                    <IconButton onClick={handleSettingsClick}
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                    >
                        <SettingsIcon/>
                        <Settings isOpen={isSettingsOpen} callBackOnClose={handleSettingsClose}
                                  callBackSettingsChange={handleSettingsChange}/>
                    </IconButton>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}

export default Menu;

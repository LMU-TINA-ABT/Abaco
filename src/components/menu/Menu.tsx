import AppBar from '@mui/material/AppBar';
import {IconButton, Stack, Toolbar} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import {useState} from "react";
import Settings from "../settings/Settings";
import PrintIcon from '@mui/icons-material/Print';
import PrintingDialog from "../printing/PrintingDialog";

type MenuProps = {
    callBackOnSettingsChange: Function;
    result: any;
}

const Menu: React.FC<MenuProps> = (props: MenuProps) => {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isPrintOpen, setIsPrintOpen] = useState(false);

    function handleSettingsClick() {
        setIsSettingsOpen(!isSettingsOpen);
    }

    function handleSettingsClose() {
        setIsSettingsOpen(false);
    }

    function handleSettingsChange(values: any) {
        props.callBackOnSettingsChange(values);
    }

    function handlePrintClick() {
        setIsPrintOpen(!isSettingsOpen);
    }

    function handlePrintClose() {
        setIsPrintOpen(false);
    }

    return (
        <>
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
                                    aria-label="settings"
                        >
                            <SettingsIcon/>
                        </IconButton>
                        <IconButton
                            disabled={true}
                            onClick={handlePrintClick}
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="print"
                        >
                            <PrintIcon/>
                        </IconButton>

                    </Stack>
                </Toolbar>
            </AppBar>
            <Settings isOpen={isSettingsOpen} callBackOnClose={handleSettingsClose}
                      callBackSettingsChange={handleSettingsChange}/>
            <PrintingDialog isOpen={isPrintOpen} callBackOnClose={handlePrintClose} result={props.result}/>
        </>
    );
}

export default Menu;

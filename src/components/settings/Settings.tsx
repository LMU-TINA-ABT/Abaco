import {Dialog, DialogContent, DialogTitle, Stack, TextField} from "@mui/material";
import React, {useEffect, useState} from "react";

type SettingsProps = {
    isOpen: boolean;
    callBackOnClose: Function;
    callBackSettingsChange: Function;
}

const Settings: React.FC<SettingsProps> = (props: SettingsProps) => {
    const [numberBase, setNumberBase] = useState(10);
    const [numberOfRows, setNumberOfRows] = useState(5);
    const [stellen, setStellen] = useState(3);

    const handleClose = () => {
        props.callBackOnClose();
    };

    useEffect(() => {
            props.callBackSettingsChange({
                numberBase: numberBase,
                numberOfRows: numberOfRows,
                stellen: stellen
            });
        }
        , [numberBase, numberOfRows, stellen]);

    return (
        <Dialog open={props.isOpen} onClose={handleClose}>
            <DialogTitle align={"center"}>Einstellungen</DialogTitle>
            <DialogContent>
                <Stack direction={"column"} spacing={2} sx={{paddingTop: "10px"}}>
                    <TextField
                        value={numberBase}
                        id="outlined-number"
                        label="Zahlenbasis"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(event) => {
                            const value = Number.parseInt(event.target.value);
                            if (!isNaN(value) && value > 0 && value < 17) {
                                setNumberBase(Number.parseInt(event.target.value));
                            }
                        }}
                    />
                    <TextField
                        value={numberOfRows}
                        id="outlined-number"
                        label="Anzahl Zeilen"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(event) => {
                            const value = Number.parseInt(event.target.value);
                            if (!isNaN(value) && value > 0 && value < 15) {
                                setNumberOfRows(Number.parseInt(event.target.value));
                            }
                        }}
                    />
                    <TextField
                        value={stellen}
                        id="outlined-number"
                        label="Anzahl Stellen"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(event) => {
                            const value = Number.parseInt(event.target.value);
                            if (!isNaN(value) && value > 0 && value < 6) {
                                setStellen(Number.parseInt(event.target.value));
                            }
                        }}
                    />
                </Stack>
            </DialogContent>
        </Dialog>
    );
}

export default Settings;

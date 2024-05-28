import {Button, Dialog, DialogContent, DialogTitle, TextField, Typography} from "@mui/material";
import React, {useState} from "react";

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

    function handleSave() {
        props.callBackSettingsChange({
            numberBase: numberBase,
            numberOfRows: numberOfRows,
            stellen: stellen
        });
        props.callBackOnClose();
    }

    return (
        <Dialog open={props.isOpen} onClose={handleClose}>
            <DialogTitle>Einstellungen</DialogTitle>
            <DialogContent>
                <Typography>Zahlenbasis</Typography>
                <TextField
                    value={numberBase}
                    defaultValue={10}
                    id="outlined-number"
                    label="Number"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(event) => setNumberBase(Number.parseInt(event.target.value))}
                />
                <Typography>Anzahl Zeilen</Typography>
                <TextField
                    value={numberOfRows}
                    defaultValue={5}
                    id="outlined-number"
                    label="Number"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(event) => setNumberOfRows(Number.parseInt(event.target.value))}
                />
                <Typography>Anzahl Stellen</Typography>
                <TextField
                    value={stellen}
                    defaultValue={3}
                    id="outlined-number"
                    label="Number"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(event) => setStellen(Number.parseInt(event.target.value))}
                />
                <Button onClick={handleSave}>
                    Speichern
                </Button>
            </DialogContent>
        </Dialog>
    );
}

export default Settings;

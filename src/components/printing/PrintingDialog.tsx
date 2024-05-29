import {Dialog, DialogContent, DialogTitle, Stack, TextField, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";

type PrintingDialogProps = {
    isOpen: boolean;
    callBackOnClose: Function;
    result: any;
}

const PrintingDialog: React.FC<PrintingDialogProps> = (props: PrintingDialogProps) => {

    const handleClose = () => {
        props.callBackOnClose();
    };

    return (
        <Dialog open={props.isOpen} onClose={handleClose}>
            <DialogTitle align={"center"}>Output</DialogTitle>
            <DialogContent>
                <Typography>{JSON.stringify(props.result)}</Typography>
            </DialogContent>
        </Dialog>
    );
}

export default PrintingDialog;

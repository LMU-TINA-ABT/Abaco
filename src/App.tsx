import React, {useState} from 'react';
import './App.css';
import Menu from "./components/menu/Menu";
import Task from "./components/task/Task";
import {Stack} from "@mui/material";

function App() {
    const [numberBase, setNumberBase] = useState(10);
    const [numberOfRows, setNumberOfRows] = useState(5);
    const [stellen, setStellen] = useState(3);
    const [result, setResult] = useState<number[][]>([]);

    function handleSettingsChange(values: any) {
        if (values["numberBase"]) setNumberBase(values["numberBase"]);
        if (values["numberOfRows"]) setNumberOfRows(values["numberOfRows"]);
        if (values["stellen"]) setStellen(values["stellen"]);
        setResult([]);
    }

    function handleStateChange(stelle: number, isAdded: boolean) {
        // implementme
    }

    return (
        <div>
            <Menu callBackOnSettingsChange={handleSettingsChange} result={result}/>
            <Stack justifyContent={"center"} direction={"column"} alignItems={"center"} sx={{paddingTop: "20px"}}>
                <Task numberBase={numberBase} numberOfRows={numberOfRows} stellen={stellen} callBackOnStateChange={handleStateChange}/>
            </Stack>
        </div>
    );
}

export default App;

import React, {useState} from 'react';
import './App.css';
import Menu from "./components/menu/Menu";
import Solution from "./components/task/Solution";
import Task from "./components/task/Task";
import {Stack} from "@mui/material";

function App() {
    const [numberBase, setNumberBase] = useState(10);
    const [numberOfRows, setNumberOfRows] = useState(5);
    const [stellen, setStellen] = useState(3);

    function handleSettingsChange(values: any) {
        if (values["numberBase"]) setNumberBase(values["numberBase"]);
        if (values["numberOfRows"]) setNumberOfRows(values["numberOfRows"]);
        if (values["stellen"]) setStellen(values["stellen"]);
    }

    return (
        <div>
            <Stack justifyContent={"center"} direction={"column"} alignItems={"center"}>
                <Menu callBackOnSettingsChange={handleSettingsChange}/>
                <Task numberBase={numberBase} numberOfRows={numberOfRows} stellen={stellen}/>
                <Solution numberBase={numberBase} numberOfRows={numberOfRows} stellen={stellen}/>
            </Stack>
        </div>
    );
}

export default App;

import React, {useEffect, useState} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {Container, Stack, Typography} from "@mui/material";
import Abaco from "./components/stellenwerttafel/Abaco";
import {AbacoSlice, setColoringId, setCurrentMove, setIsColoring, setPlaettchenHistory} from "./store";
import {DeleteButton} from "./components/utils/DeleteButton";
import SortButton from "./components/utils/SortButton";
import PrintButton from "./components/utils/PrintButton";

function AppContainer() {
    const dispatch = useDispatch();
    const [isTouching, setIsTouching] = useState(false);
    const currentColoringId = useSelector((state: AbacoSlice) => state.coloringId);
    const [blueNumber, setBlueNumber] = useState(0);
    const [redNumber, setRedNumber] = useState(0);
    const plaettchenState = useSelector((state: AbacoSlice) => state.plaettchenState);
    const plaettchenHistory = useSelector((state: AbacoSlice) => state.plaettchenHistory);

    useEffect(() => {
        setBlueNumber(plaettchenState.filter(plaettchen => plaettchen.color === "blue").length);
        setRedNumber(plaettchenState.filter(plaettchen => plaettchen.color === "red").length);
        dispatch(setPlaettchenHistory([...plaettchenHistory, plaettchenState]));
    }, [plaettchenState]);

    function handleMouseDown(event: any) {
        dispatch(setIsColoring(true));
        event.preventDefault();
    }

    function handleMouseUp() {
        dispatch(setIsColoring(false));
    }

    function handleTouchStart(event: any) {
        dispatch(setColoringId(currentColoringId + 1));
        setIsTouching(true);
    }

    function handleTouchEnd(event: React.TouchEvent<HTMLDivElement>) {
        setIsTouching(false);
    }

    function handleTouchMove(event: React.TouchEvent<HTMLDivElement>) {
        if (isTouching) {
            dispatch(setCurrentMove({x: event.touches[0].clientX, y: event.touches[0].clientY}));
        }
    }

    return (
        <Container sx={{height: "100svh"}} maxWidth={false} disableGutters
                   onTouchStart={(event) => handleTouchStart(event)}
                   onTouchEnd={(event) => handleTouchEnd(event)}
                   onTouchMove={(event) => handleTouchMove(event)}
                   onMouseUp={handleMouseUp}
                   onMouseDown={(event) => handleMouseDown(event)}>
            <Typography variant="h3" padding={"20px"} align={"center"}>ABACO</Typography>
            <Stack justifyContent={"center"} direction={"column"} alignItems={"center"} sx={{paddingTop: "20px"}}>
                <Abaco/>
                <Stack justifyContent={"center"} direction={"row"} alignItems={"center"} spacing={4}>
                    <SortButton/>
                    <DeleteButton/>
                    <PrintButton/>
                    <Typography variant="h2" color={"blue"} fontWeight={"bold"}>{blueNumber}</Typography>
                    <Typography variant="h2" color={"red"} fontWeight={"bold"}>{redNumber}</Typography>
                </Stack>
            </Stack>
        </Container>);
}

export default AppContainer;

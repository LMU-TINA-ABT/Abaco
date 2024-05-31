import React from "react";
import {Stack} from "@mui/material";
import Plaettchen from "./Plaettchen";

type AbacoProps = {}

const Abaco: React.FC<AbacoProps> = (props: AbacoProps) => {

    const getPlaettchen = (startIdentifier: number) => {
        const plaettchen = []
        for (let i = 0; i < 5; i++) {
            plaettchen.push(<Plaettchen id={startIdentifier + i}/>)
        }
        return (plaettchen);
    }

    return (
        <div>
            <Stack direction={"row"} spacing={4} sx={{padding: "10px"}}>
                <Stack direction={"column"} spacing={4} sx={{padding: "10px"}}>
                    <Stack direction={"row"} spacing={4} sx={{padding: "10px"}}>
                        {getPlaettchen(1)}
                    </Stack>
                    <Stack direction={"row"} spacing={4} sx={{padding: "10px"}}>
                        {getPlaettchen(6)}
                    </Stack>
                </Stack>
                <Stack direction={"column"} spacing={4} sx={{padding: "10px"}}>
                    <Stack direction={"row"} spacing={4} sx={{padding: "10px"}}>
                        {getPlaettchen(11)}
                    </Stack>
                    <Stack direction={"row"} spacing={4} sx={{padding: "10px"}}>
                        {getPlaettchen(16)}
                    </Stack>
                </Stack>
            </Stack>
        </div>
    );
}

export default Abaco;

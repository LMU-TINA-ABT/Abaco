import StellenWertSpalte from "./StellenWertSpalte";
import React from "react";
import {Stack} from "@mui/material";

type StellenWertTafelProps = {
    stellen: number;
    numberBase: number;
    numberOfRows: number;
    callBackOnStateChange: Function;
}

const StellenWertTafel: React.FC<StellenWertTafelProps> = (props: StellenWertTafelProps) => {

    const getHeader = (i: number) => {
        switch (i) {
            case 0:
                return "Einer";
            case 1:
                return "Zehner";
            case 2:
                return "Hunderter";
            case 3:
                return "Tausender";
            case 4:
                return "Zehntausender"
            default:
                return "x";
        }
    }

    const getColumns = () => {
        const columns = [];
        for (let i = 0; i < props.stellen; i++) {
            columns.push(<StellenWertSpalte stelle={i} base={props.numberBase} header={getHeader(i)}
                                            numberOfRows={props.numberOfRows}
                                            callBackOnStateChange={props.callBackOnStateChange}/>);
        }

        return columns;
    }

    return (
        <div>
            <Stack direction={"row-reverse"} spacing={4} sx={{padding: "10px"}}>
                {getColumns()}
            </Stack>
        </div>
    );
}

export default StellenWertTafel;

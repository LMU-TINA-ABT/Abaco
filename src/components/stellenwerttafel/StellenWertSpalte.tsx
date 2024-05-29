import Plaettchen from "./Plaettchen";
import {Stack, Typography} from "@mui/material";
import React, {useState} from "react";

type StellenWertSpalteProps = {
    numberOfRows: number;
    base: number;
    header: string;
    callBackOnStateChange: Function;
    stelle: number;
}

export const StellenWertSpalte: React.FC<StellenWertSpalteProps> =
    (props: StellenWertSpalteProps) => {
        const [number, setNumber] = useState(0);

        const handleStateChangeOfPlaettchen = (isActivated: boolean) => {
            if (isActivated) {
                setNumber(number + 1);
                props.callBackOnStateChange(props.stelle, true);
            } else {
                setNumber(number - 1);
                props.callBackOnStateChange(props.stelle, false);
            }
        }

        const getRow = (stelle: number) => {
            const row = [];
            for (let i = 0; i < props.base; i++) {
                row.push(<Plaettchen stelle={stelle} id={i} callBackOnStateChange={handleStateChangeOfPlaettchen}/>);
            }

            return (
                <Stack direction={"row"} spacing={1}>
                    {row}
                </Stack>
            );
        }

        const getRows = () => {
            const rows = [];
            for (let i = 0; i < props.numberOfRows; i++) {
                rows.push(getRow(i));
            }
            return (
                <Stack spacing={1}>
                    {rows}
                </Stack>);
        }

/*        function getText(number: number) {
            if (number < 10 || (props.base > 10 && number > props.base)) {
                return number;
            } else {
                return String.fromCharCode(97 + number - 10).toUpperCase();
            }
        }*/

        return (
            <div>
                <Typography align={"center"} sx={{paddingBottom: "15px"}}>{props.header}</Typography>
                {getRows()}
                <Typography align={"center"} sx={{paddingTop: "15px"}}>{number}</Typography>
            </div>
        );
    }

export default StellenWertSpalte;

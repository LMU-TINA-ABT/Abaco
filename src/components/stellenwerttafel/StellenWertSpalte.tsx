import Plaettchen from "./Plaettchen";
import {Stack, Typography} from "@mui/material";
import React, {useState} from "react";

type StellenWertSpalteProps = {
    numberOfRows: number;
    base: number;
    header: string;
}

export const StellenWertSpalte: React.FC<StellenWertSpalteProps> =
    (props: StellenWertSpalteProps) => {
        const [number, setNumber] = useState(0);

        const handleStateChangeOfPlaettchen = (isActivated: boolean) => {
            if (isActivated) {
                setNumber(number + 1);
            } else {
                setNumber(number - 1);
            }
        }

        const getRow = () => {
            const row = [];
            for (let i = 0; i < props.base; i++) {
                row.push(<Plaettchen callBackOnStateChange={handleStateChangeOfPlaettchen}/>);
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
                rows.push(getRow());
            }
            return (
                <Stack spacing={1}>
                    {rows}
                </Stack>);
        }

        return (
            <div>
                <Typography align={"center"}>{props.header}</Typography>
                {getRows()}
                <Typography align={"center"}>{number}</Typography>
            </div>
        );
    }

export default StellenWertSpalte;

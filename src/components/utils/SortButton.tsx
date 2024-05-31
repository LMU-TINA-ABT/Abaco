import SwapVertIcon from '@mui/icons-material/SwapVert';
import {useDispatch, useSelector} from "react-redux";
import {IconButton} from "@mui/material";
import {useState} from "react";
import {AbacoSlice, PlaettchenSlice, setPlaettchen} from "../../store";

export const SortButton: React.FC<any> = (props: any) => {
    const dispatch = useDispatch();
    const [sortingStrategy, setSortingStrategy] = useState("row");
    const plaettchenState = useSelector((state: AbacoSlice) => state.plaettchenState);

    const handleClick = () => {
        const currentSortingStrategy = sortingStrategy === "bloc" ? "row" : "bloc";
        setSortingStrategy(currentSortingStrategy);

        const countBlue = plaettchenState.filter(plaettchen => plaettchen.color === "blue").length;
        const countRed = plaettchenState.filter(plaettchen => plaettchen.color === "red").length;

        let array: PlaettchenSlice[] = [];
        for (let i = 1; i < 21; i++) {
            const color = countBlue > i - 1 ? "blue" : countBlue + countRed > i - 1 ? "red" : "grey";
            array.push({id: i, color: color});
        }

        if (currentSortingStrategy === "row") {
            const twistedArray = [];
            for (let i = 1; i < 6; i++) {
                twistedArray.push({id: i, color: array.find(plaettchen => plaettchen.id === i)!.color});
            }
            for (let i = 6; i < 11; i++) {
                twistedArray.push({id: i, color: array.find(plaettchen => plaettchen.id === i + 5)!.color});
            }
            for (let i = 11; i < 16; i++) {
                twistedArray.push({id: i, color: array.find(plaettchen => plaettchen.id === i - 5)!.color});
            }
            for (let i = 16; i < 21; i++) {
                twistedArray.push({id: i, color: array.find(plaettchen => plaettchen.id === i)!.color});
            }
            array = twistedArray;
        }

        dispatch(setPlaettchen(array));
    }

    return (
        <IconButton onClick={handleClick}>
            <SwapVertIcon sx={{fontSize: 80, color: "black"}}/>
        </IconButton>
    );
}

export default SortButton;
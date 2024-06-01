import {IconButton} from "@mui/material";
import PanToolAltIcon from '@mui/icons-material/PanToolAlt';
import {useDispatch, useSelector} from "react-redux";
import {AbacoSlice, setColor} from "../../store";

type FingerButtonProps = {}

export const FingerButton: React.FC<FingerButtonProps> = (props: FingerButtonProps) => {
    const dispatch = useDispatch();
    const color = useSelector((state: AbacoSlice) => state.color);


    function handleClick() {
        dispatch(setColor(color === "variable" ? "blue" : color === "blue" ? "red" : color === "red" ? "grey" : "variable"));
    }

    function getColor() {
        if (color === "variable") {
            return "#d6d6d6";
        } else return color;
    }

    return (
        <IconButton onClick={handleClick}>
            <PanToolAltIcon sx={{fontSize: 80, color: getColor()}}/>
        </IconButton>
    );
}

export default FingerButton;

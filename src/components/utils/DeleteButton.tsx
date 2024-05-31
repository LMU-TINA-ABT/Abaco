import {IconButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import {useDispatch} from "react-redux";
import {colorAllPlaettchenGrey} from "../../store";

export const DeleteButton: React.FC<any> = (props: any) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(colorAllPlaettchenGrey());
    }

    return (
        <IconButton onClick={handleClick}>
            <DeleteIcon sx={{fontSize: 80, color: "black"}}/>
        </IconButton>
    );
}

export default DeleteButton;

import {IconButton} from "@mui/material";
import PrintIcon from '@mui/icons-material/Print';
import {useDispatch, useSelector} from "react-redux";
import {AbacoSlice} from "../../store";

export const PrintButton: React.FC<any> = (props: any) => {
    const dispatch = useDispatch();
    const plaettchenHistory = useSelector((state: AbacoSlice) => state.plaettchenHistory);


    function handleClick() {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(plaettchenHistory, null, 2));
        const anchor = document.getElementById('downloadAnchorElement');
        if (anchor) {
            anchor.setAttribute("href", dataStr);
            anchor.setAttribute("download", "scene.json");
            anchor.click();
        }
    }

    return (
        <IconButton onClick={handleClick}>
            <PrintIcon sx={{fontSize: 80, color: "black"}}/>
            <a id={"downloadAnchorElement"}/>
        </IconButton>
    );
}

export default PrintButton;

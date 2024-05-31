import {styled} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {AbacoSlice, setPlaettchenColor} from "../../store";
import {useEffect, useState} from "react";

const Kreis = styled("span")({
    height: "25px",
    width: "25px",
    backgroundColor: "#bbb",
    borderRadius: "50%",
    display: "inline-block",
});

type PlaettchenProps = {
    id: number;
}

export const Plaettchen: React.FC<PlaettchenProps> = (props: PlaettchenProps) => {
    const dispatch = useDispatch();
    const isColoring = useSelector((state: AbacoSlice) => state.isColoring);
    const currentColoringId = useSelector((state: AbacoSlice) => state.coloringId);
    const [lastColoringId, setLastColoringId] = useState(-1);
    const color = useSelector((state: AbacoSlice) => state.plaettchenState.find(plaettchen => plaettchen.id === props.id)?.color);

    const currentMove = useSelector((state: AbacoSlice) => state.currentMove);

    const [xValueMin, setXValueMin] = useState(0);
    const [xValueMax, setXValueMax] = useState(0);
    const [yValueMin, setYValueMin] = useState(0);
    const [yValueMax, setYValueMax] = useState(0);

    useEffect(() => {
        if (currentMove) {
            if (currentMove.x >= xValueMin && currentMove.x <= xValueMax &&
                currentMove.y >= yValueMin && currentMove.y <= yValueMax &&
                currentColoringId !== lastColoringId) {
                handleClick();
                setLastColoringId(currentColoringId);
            }
        }
    }, [currentMove]);

    useEffect(() => {
        const element = document.getElementById(props.id.toString());
        if (element) {
            const values = element.getBoundingClientRect();
            setXValueMin(values.left);
            setYValueMin(values.top);
            setXValueMax(values.right);
            setYValueMax(values.bottom);
        }
    }, [])

    function handleClick() {
        if (color === "grey") {
            dispatch(setPlaettchenColor({id: props.id, color: "blue"}));
        } else if (color == "blue") {
            dispatch(setPlaettchenColor({id: props.id, color: "red"}));
        } else {
            dispatch(setPlaettchenColor({id: props.id, color: "grey"}));
        }
    }

    function handleMouseEnter() {
        if (isColoring) {
            handleClick();
        }
    }

    return (
        <>
            <Kreis id={props.id.toString()} style={{backgroundColor: color}}
                   onClick={handleClick}
                   onMouseEnter={handleMouseEnter}
            />
        </>
    );
}

export default Plaettchen;

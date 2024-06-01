import {styled} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {AbacoSlice, setPlaettchenColor} from "../../store";
import {useEffect, useState} from "react";

const Kreis = styled("span")({
    height: "50px",
    width: "50px",
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
    const color = useSelector((state: AbacoSlice) => state.color);
    const [lastColoringId, setLastColoringId] = useState(-1);
    const currentColor = useSelector((state: AbacoSlice) => state.plaettchenState.find(plaettchen => plaettchen.id === props.id)?.color);

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
                setLastColoringId(currentColoringId);
                handleClick();
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
        if(color === "variable") {
            if (currentColor === "grey") {
                dispatch(setPlaettchenColor({id: props.id, color: "blue"}));
            } else if (currentColor == "blue") {
                dispatch(setPlaettchenColor({id: props.id, color: "red"}));
            } else {
                dispatch(setPlaettchenColor({id: props.id, color: "grey"}));
            }
        } else {
            dispatch(setPlaettchenColor({id: props.id, color: color}));
        }
    }

    function handleMouseEnter() {
        if (isColoring) {
            handleClick();
        }
    }

    return (
        <>
            <Kreis id={props.id.toString()} style={{backgroundColor: currentColor}}
                   onClick={handleClick}
                   onMouseEnter={handleMouseEnter}
            />
        </>
    );
}

export default Plaettchen;

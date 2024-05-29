import {styled} from "@mui/material";
import {useState} from "react";

const Kreis = styled("span")({
    height: "15px",
    width: "15px",
    backgroundColor: "#bbb",
    borderRadius: "50%",
    display: "inline-block",
});

type PlaettchenProps = {
    callBackOnStateChange: Function;
    stelle: number;
    id: number;
}

export const Plaettchen: React.FC<PlaettchenProps> = (props: PlaettchenProps) => {
    const [colour, setColour] = useState("grey");

    function handleClick() {
        if (colour === "grey") {
            setColour("blue");
            props.callBackOnStateChange(true);
        } else {
            setColour("grey")
            props.callBackOnStateChange(false);
        }
    }

    return (
        <Kreis style={{backgroundColor: colour}} onTouchMove={handleClick} onClick={handleClick} onDragOver={handleClick
        }/>
    );
}

export default Plaettchen;

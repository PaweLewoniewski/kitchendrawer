import { useState } from "react";
import Draggable from "react-draggable";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import styled from "styled-components";
import { MM } from "../data/dictionary";

interface HorizontalProps {
    dimensionY: number;
}

const HorizontalLine = ({ dimensionY }: HorizontalProps) => {

    let [linePositionY, setLinePositionY] = useState<number>(0);

    const handleStart = () => {
        setLinePositionY(++linePositionY);

    };
    const handleStop = () => {
        setLinePositionY(--linePositionY);
    };

    const handleDrag = (e: any, ui: { deltaX: any; deltaY: any; }) => {
        setLinePositionY(linePositionY + ui.deltaY);
        console.log(linePositionY);
    };

    return (
        <>
            <Draggable
                axis={`y`}
                handle=".handle"
                defaultPosition={{ x: 0, y: 0 }}
                grid={[1, 1]}
                scale={1}
                bounds={{
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: dimensionY
                }}
                onDrag={handleDrag}
                onStart={handleStart}
                onStop={handleStop}
            >
                <HorizontalLineBox>
                    <HorizontalLinear />
                    <HorizontalLineText className="handle">
                        <span><AiOutlineArrowUp size={10} /></span>{linePositionY} {MM}<span><AiOutlineArrowDown size={10} /></span>
                    </HorizontalLineText>
                </HorizontalLineBox>
            </Draggable>
        </>
    );
};
export default HorizontalLine;

const HorizontalLineBox = styled.div`
    /* display:flex; */
    position:absolute;
    left:0;
    top:0;
    width:100%;
    z-index:45;
    cursor:pointer;
`;

const HorizontalLineText = styled.div`
    display:flex;
    flex-direction:column ;
    width:100%;
`;

const HorizontalLinear = styled.div`
        border-top:1px dotted black;
        width:100%;
        height:1px;       
`;
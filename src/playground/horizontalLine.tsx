import { useState } from "react";
import Draggable from "react-draggable";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import styled from "styled-components";
import { CM } from "../data/dictionary";

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
        <HorizontalContener>
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
                <HorizontalLineBox className="handle">
                    <HorizontalLinear />
                </HorizontalLineBox>
            </Draggable>
            <HorizontalLineText>
                <span><AiOutlineArrowUp size={10} /></span>{linePositionY} {CM}<span><AiOutlineArrowDown size={10} /></span>
            </HorizontalLineText>
        </HorizontalContener>
    );
};
export default HorizontalLine;


const HorizontalContener = styled.div`
    position:relative;
`;


const HorizontalLineBox = styled.div`
    position:absolute;
    left:-10%;
    top:0;
    height:1px;
    width:110%;
    z-index:45;
    cursor:pointer;
`;

const HorizontalLineText = styled.div`
    position:absolute;
    top:-100px;
    left:0;
    display:flex;
    flex-direction:column;
    width:100%;
`;

const HorizontalLinear = styled.div`
        position:absolute;
        top:0;
        left:0;
        border-top:1px dotted black;
        width:100%;
        height:1px;  
        z-index:450;     
        &:hover{
            border-top:1px solid green;
        }
`;
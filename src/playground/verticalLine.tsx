import { useState } from "react";
import Draggable from "react-draggable";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import styled from "styled-components";
import { CM } from "../data/dictionary";

interface VerticalProps {
    dimensionX: number;
}

const VerticalLine = ({ dimensionX }: VerticalProps) => {

    let [linePositionX, setLinePositionX] = useState<number>(0);

    const handleStart = () => {
        setLinePositionX(++linePositionX);

    };
    const handleStop = () => {
        setLinePositionX(--linePositionX);
    };

    const handleDrag = (e: any, ui: { deltaX: any; deltaY: any; }) => {
        setLinePositionX(linePositionX + ui.deltaX);
        console.log(linePositionX);
    };

    return (
        <>
            <Draggable
                axis={`x`}
                handle=".handle"
                defaultPosition={{ x: 0, y: 0 }}
                grid={[1, 1]}
                scale={1}
                bounds={{
                    left: 0,
                    top: 0,
                    right: dimensionX,
                    bottom: 0
                }}
                onDrag={handleDrag}
                onStart={handleStart}
                onStop={handleStop}
            >
                <VerticalLineBox>
                <VerticalLinear />
                    <VerticalLineText className="handle">
                        <span><AiOutlineArrowLeft size={10} /></span>{linePositionX} {CM}<span><AiOutlineArrowRight size={10} /></span>
                    </VerticalLineText>
                </VerticalLineBox>
            </Draggable>
        </>
    );
};
export default VerticalLine;

const VerticalLineBox = styled.div`
    display:flex;
    position:absolute;
    top:-70px;
    height:100%;
    z-index:45;
    cursor:pointer;
`;

const VerticalLineText = styled.div`
    display:flex;
`;

const VerticalLinear = styled.div`
        border-left:1px dotted black;
        width:1px;
        height:150%;       
`;
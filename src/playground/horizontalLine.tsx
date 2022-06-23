import { useState } from "react";
import Draggable from "react-draggable";
import styled from "styled-components";
import { MM } from "../data/dictionary";

interface HorizontalProps {
    dimensionY:number;
}

const HorizontalLine = ({dimensionY}:HorizontalProps) => {

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
                    <HorizontalLineText className="handle">{linePositionY} {MM}</HorizontalLineText>
                </HorizontalLineBox>
            </Draggable>
        </>
    );
};
export default HorizontalLine;

const HorizontalLineBox = styled.div`
    display:flex;
    position:absolute;
    left:0;
    top:0;
    width:100%;
    z-index:200;
    cursor:pointer;
`;

const HorizontalLineText = styled.div`
    display:flex;
    flex-direction:column ;
    width:100%;
    &:before{
        content: '';
        border-top:1px dotted black;
        width:100%;
        height:1px;       
    }
`;

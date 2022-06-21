import { useState } from "react";
import Draggable from "react-draggable";
import styled from "styled-components";

interface VerticalProps {
    dimensionX: number;
}

const VerticalLine = ({ dimensionX  }: VerticalProps) => {

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
                    <VerticalLineText className="handle">Dist. {linePositionX}</VerticalLineText>
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
    z-index:200;
    cursor:pointer;
`;

const VerticalLineText = styled.div`
    display:flex;
    flex-direction:column ;
    height:100%;
    //width:100px;
    &:after{
        content: '';
        border-left:1px dotted black;
        width:1px;
        height:100%;       
    }
`;

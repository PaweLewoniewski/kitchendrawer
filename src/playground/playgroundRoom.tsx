import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { RoomData } from "../types/types";

const PlaygroundRoom = () => {

    const state = useLocation().state as RoomData;
    const depth = state && state.depth;
    const width = state && state.width;
    console.log(depth);

    const roomWidth = width / 4; //przy /5 to: 200 px to 1 metr
    const roomDepth = depth / 4;

    return (
        <Room width={width !== null ? roomWidth : 0} depth={depth !== null ? roomDepth : 0}>Playground Room</Room>
    );
};
export default PlaygroundRoom;

const Room = styled.div<RoomData>`
    width:${props => props.width !== 0 ? `${props.width}px` : '0px'};
    height:${props => props.depth !== 0 ? `${props.depth}px` : '0px'};
    border:2px solid black;
    box-sizing: border-box;
`;
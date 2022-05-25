import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppSelector } from "../store/reducer";
import { RoomData } from "../types/types";

const PlaygroundRoom = () => {

    const roomDimensions = useAppSelector((store: any) => store.localData);
    const [loadData, setLoadData] = useState<RoomData[]>();
    const localData: string | null = localStorage.getItem("data");
    const dataObj = JSON.parse(localData);
    setLoadData(dataObj);

    useEffect(() => {
    }, []);

    // const roomWidth = loadData.width / 4; //przy /5 to: 200 px to 1 metr
    // const roomDepth = loadData.depth / 4;
    return (
        <>
            {loadData && loadData.length > 0 ? loadData.map((item: RoomData, index) =>
            (<Room key={index} roomWidth={item.roomWidth} roomDepth={item.roomDepth}>Dimensions Playground Room</Room>
            )) : 'Set Room Dimensions'}
        </>
    );
};
export default PlaygroundRoom;

const Room = styled.div<RoomData>`
    width:${props => props.roomWidth !== 0 ? `${props.roomWidth}px` : '0px'};
    height:${props => props.roomDepth !== 0 ? `${props.roomDepth}px` : '0px'};
    border:2px solid black;
    box-sizing: border-box;
`;

const NoRoom = styled.div`
    width:100px;
    height:80px;
    border:2px solid black;
    box-sizing: border-box;
`;
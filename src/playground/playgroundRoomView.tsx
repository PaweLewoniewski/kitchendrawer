import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../store/reducer";
import { RootState } from "../store/store";
import { RoomData } from "../store/types";

const PlaygroundRoomView = () => {

    const { roomData } = useAppSelector((store: RootState) => store.multiReducers.localDataReducer);
    const localData: string | null = localStorage.getItem("data");
    const [loadData, setLoadData] = useState<RoomData[]>();
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (localData !== null && loadData === undefined) {
            const dataObj = JSON.parse(localData);
            setLoadData(dataObj);
            dispatch({ type: "ROOM_DIMENSIONS", payload: dataObj });
        }
        if (loadData?.length !== roomData) {
            setLoadData(roomData);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loadData, localData]);

    // const roomWidth = loadData.width / 4; //przy /5 to: 200 px to 1 metr
    // const roomDepth = loadData.depth / 4;
    return (
        <>
            {loadData && loadData.length > 0 ? loadData.map((item: RoomData, index) =>
            (<Room key={index} roomWidth={item.roomWidth} roomDepth={item.roomDepth}>
                Dimensions Playground Room
                
            </Room>
            )) : 'Set Room Dimensions'}
        </>
    );
};
export default PlaygroundRoomView;

const Room = styled.div<RoomData>`
    width:${props => props.roomWidth !== 0 ? `${props.roomWidth}px` : '0px'};
    height:${props => props.roomDepth !== 0 ? `${props.roomDepth}px` : '0px'};
    border:2px solid black;
    box-sizing: border-box;
`;

// const NoRoom = styled.div`
//     width:100px;
//     height:80px;
//     border:2px solid black;
//     box-sizing: border-box;
// `;

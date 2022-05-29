// import Draggable from 'react-draggable';
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../store/reducer";
import { RootState } from "../store/store";
import { RoomData } from "../store/types";
//import CabinetBox from "./cabinetBox";
import RestrictionBox from "./restrictionBox";

const PreviewView = () => {

    const { roomData } = useAppSelector((store: RootState) => store.multiReducers.localDataReducer);
    const { restrictions } = useAppSelector((store: RootState) => store.multiReducers.localDataReducer);
    const localData: string | null = localStorage.getItem("roomDim");
    const restlocalData: string | null = localStorage.getItem("restDim");
    const [loadData, setLoadData] = useState<RoomData[]>();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (localData !== null && loadData === undefined) {
            const roomDataObj = JSON.parse(localData);
            setLoadData(roomDataObj);
            dispatch({ type: "ROOM_DIMENSIONS", payload: roomDataObj });
        }
        if (restlocalData !== null) {
            const restDataObj = JSON.parse(restlocalData);
            dispatch({ type: "ADD_RESTRICTIONS", payload: restDataObj });
        }
        if (loadData?.length !== roomData) {
            setLoadData(roomData);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loadData, localData]);

    console.log(loadData)
    // const roomWidth = loadData.width / 4; //przy /5 to: 200 px to 1 metr
    // const roomDepth = loadData.depth / 4;
    return (
        <>
            {loadData && loadData.length > 0 ? loadData.map((item: RoomData, index) =>
            (<Room key={index} roomWidth={item.roomWidth} roomDepth={item.roomDepth}>
                {restrictions !== null ? <RestrictionBox elementsData={restrictions} /> : ''}
            </Room>
            )) : 'Set Room Dimensions'}
        </>
    );
};
export default PreviewView;

const Room = styled.div<RoomData>`
    width:${props => props.roomWidth !== 0 ? `${props.roomWidth}px` : '0px'};
    height:${props => props.roomDepth !== 0 ? `${props.roomDepth}px` : '0px'};
    border:2px solid black;
    box-sizing: border-box;
    display:flex;
`;

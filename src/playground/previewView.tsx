import Draggable from 'react-draggable';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../store/reducer";
import { RootState } from "../store/store";
import { AllkitchenData, RoomDimension } from '../store/types';
import RestrictionBox from './restrictionBox';
import BottomView from './bottomView';
import TopView from './topView';

const PreviewView = () => {
    const { id } = useParams();
    const { kitchenData } = useAppSelector((store: RootState) => store.multiReducers.localDataReducer);
    const localData: string | null = localStorage.getItem("kitchenData");
    const [loadData, setLoadData] = useState<AllkitchenData[]>();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (localData !== null && loadData === undefined) {
            const roomDataObj = JSON.parse(localData);
            setLoadData(roomDataObj);
            dispatch({ type: "ROOM_DIMENSIONS", payload: roomDataObj });
        }
        if (loadData !== kitchenData) {
            setLoadData(kitchenData);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loadData, localData]);

    const mainData = loadData?.find((item: AllkitchenData) => item.roomDimension?.roomWidth && item.roomDimension.roomDepth);
    const roomWidth = mainData?.roomDimension?.roomWidth ? mainData?.roomDimension?.roomWidth / 1 : 0;
    const roomDepth = mainData?.roomDimension?.roomDepth ? mainData?.roomDimension?.roomDepth / 1 : 0;

    // console.log(loadData);
    return (
        <>
            {roomWidth !== 0 ?
                <Room roomWidth={roomWidth} roomDepth={roomDepth}>
                    {loadData && loadData.length > 0 ? loadData.map((item: AllkitchenData, index) =>
                    (
                        <>
                            {id === 'bottomCabinets' ?
                                <BottomView data={item.botCabinets} index={index} positionX={item.botCabinets?.xAxis} positionY={item.botCabinets?.yAxis} />
                                : ''}
                        </>
                    )) : ''}

                    {loadData && loadData.length > 0 ? loadData.map((item: AllkitchenData, index) =>
                    (
                        <>
                            {id === 'topCabinets' ?
                                <TopView data={item.topCabinets} index={index} positionX={item.topCabinets?.xAxis} positionY={item.topCabinets?.yAxis} />
                                : ''}
                        </>
                    )) : ''}

                    {loadData && loadData.length > 0 ? loadData.map((item: AllkitchenData, index) =>
                    (
                        <>
                            {id === 'preview' ?
                                <>
                                    <BottomView data={item.botCabinets} index={index} positionX={item.botCabinets?.xAxis} positionY={item.botCabinets?.yAxis} />
                                    <TopView data={item.topCabinets} index={index} positionX={item.topCabinets?.xAxis} positionY={item.topCabinets?.yAxis} />
                                </>
                                : ''}
                        </>
                    )) : ''}
                    {loadData && loadData.length > 0 ? loadData.map((item: AllkitchenData) =>
                    (
                        <Draggable
                            axis="both"
                            handle=".handle"
                            defaultPosition={{ x: 0, y: 0 }}
                            grid={[5, 5]}
                            bounds="parent"
                        >
                            <Runner className="handle">
                                <RestrictionBox elementsData={item.restrictions} />
                            </Runner>
                        </Draggable>
                    )) : ''}
                </Room>
                : 'Set Room Dimensions'}
        </>
    );
};
export default PreviewView;

const Room = styled.div<RoomDimension>`
    width:${props => props.roomWidth !== 0 ? `${props.roomWidth}px` : '0px'};
    height:${props => props.roomDepth !== 0 ? `${props.roomDepth}px` : '0px'};
    border:2px solid black;
    box-sizing: border-box;
    display:flex;
    position:relative;
`;

const Runner = styled.div`
display:flex;
position:absolute;
`;


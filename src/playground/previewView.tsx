import Draggable from 'react-draggable';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../store/reducer";
import { RootState } from "../store/store";
import { AllkitchenData, CurrentTarget, RoomDimension } from '../store/types';
import CabinetBox from './cabinetBox';
import RestrictionBox from './restrictionBox';
import BottomView from './bottomView';


const PreviewView = () => {
    const { id } = useParams();
    const { kitchenData } = useAppSelector((store: RootState) => store.multiReducers.localDataReducer);
    const localData: string | null = localStorage.getItem("kitchenData");
    const [loadData, setLoadData] = useState<AllkitchenData[]>();
    const dispatch = useAppDispatch();
    // const { currentTarget } = useAppSelector((store: RootState) => store.multiReducers.localDataReducer);

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
                    {loadData && loadData.length > 0 ? loadData.map((item: AllkitchenData) =>
                    (
                        <>
                            {id === 'bottomCabinets' ?
                                <BottomView data={item.botCabinets} />
                                : ''}
                        </>
                    )) : ''}

                    {loadData && loadData.length > 0 ? loadData.map((item: AllkitchenData) =>
                    (
                        <>
                            {id === 'topCabinets' ?
                                <Draggable
                                    axis="both"
                                    handle=".handle"
                                    defaultPosition={{ x: 0, y: 0 }}
                                    grid={[10, 10]}
                                    bounds="parent"
                                // scale={1}
                                // onStart={handleStart}
                                // onDrag={handleDrag}
                                // onStop={handleStop}
                                >
                                    <Runner className="handle">
                                        <CabinetBox elementsData={item.topCabinets} />
                                    </Runner>
                                </Draggable>
                                : ''}
                        </>
                    )) : ''}

                    {loadData && loadData.length > 0 ? loadData.map((item: AllkitchenData) =>
                    (
                        <>
                            {id === 'preview' ?
                                <Draggable
                                    axis="both"
                                    handle=".handle"
                                    defaultPosition={{ x: 0, y: 0 }}
                                    grid={[10, 10]}
                                    bounds="parent"
                                // scale={1}
                                // onStart={handleStart}
                                // onDrag={handleDrag}
                                // onStop={handleStop}
                                >
                                    <Runner className="handle">
                                        <CabinetBox elementsData={item.botCabinets} />
                                        <CabinetBox elementsData={item.topCabinets} />
                                    </Runner>
                                </Draggable>
                                : ''}
                        </>
                    )) : ''}
                    {loadData && loadData.length > 0 ? loadData.map((item: AllkitchenData) =>
                    (
                        <Draggable
                            axis="both"
                            handle=".handle"
                            defaultPosition={{ x: 0, y: 0 }}
                            grid={[10, 10]}
                            bounds="parent"
                        // bounds={{ left: 0, top: 0, right: roomWidth, bottom: roomDepth }}
                        // scale={1}
                        // onStart={handleStart}
                        // onDrag={handleDrag}
                        // onStop={handleStop}
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


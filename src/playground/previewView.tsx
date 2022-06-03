import Draggable from 'react-draggable';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../store/reducer";
import { RootState } from "../store/store";
import { AllkitchenData, RoomDimension } from '../store/types';


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
    const roomDepth = mainData?.roomDimension?.roomDepth ? mainData?.roomDimension?.roomDepth / 1 : 0 ;
    
    console.log(roomWidth, roomDepth);

    return (
        <>

            <Room roomWidth={roomWidth} roomDepth={roomDepth}>
                <Draggable
                    axis="both"
                    handle=".handle"
                    defaultPosition={{ x: 0, y: 0 }}
                    grid={[10, 10]}
                    bounds={{ left: 0, top: 0, right: roomWidth , bottom: roomDepth }}
                // scale={1}
                // onStart={handleStart}
                // onDrag={handleDrag}
                // onStop={handleStop}
                >
                    <div className="handle">
                        <div>DIv do latania</div>
                        {/* <CabinetBox elementsData={botCabinets} name={'botCabinDim'} /> */}
                    </div>
                </Draggable>
            </Room>

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
`;

/* width:${props => props.roomWidth !== 0 ? `${props.roomWidth}px` : '0px'};
height:${props => props.roomDepth !== 0 ? `${props.roomDepth}px` : '0px'}; */

// const Box = styled.div`
// display:flex;
// `;


// {/* {id === 'bottomCabinets' ? <>
//     {restrictions !== null ? <RestrictionBox elementsData={restrictions} /> : ''}
//     {botCabinets !== null ? <CabinetBox elementsData={botCabinets} name={'botCabinDim'} /> : ''}
// </>
//     : ''}
// {id === 'topCabinets' ? <>
//     {restrictions !== null ? <RestrictionBox elementsData={restrictions} /> : ''}
//     {topCabinets !== null ? <CabinetBox elementsData={topCabinets} name={'topCabinDim'} /> : ''}
// </>
//     : ''}
// {id === 'preview' ? <>
//     {restrictions !== null ? <RestrictionBox elementsData={restrictions} /> : ''}
//     {botCabinets !== null ? <CabinetBox elementsData={botCabinets} name={'botCabinDim'} /> : ''}
//     {topCabinets !== null ? <CabinetBox elementsData={topCabinets} name={'topCabinDim'} /> : ''}
// </>
//     : ''} */}

{/* <div className="handle">
    <CabinetBox elementsData={botCabinets} name={'botCabinDim'} />
</div> */}



{/* // {loadData && loadData.length > 0 ? loadData.map((item: RoomData, index) =>
                //     (<Room> </Room> )) : ''} */}

                   // width:${props => props.roomWidth !== 0 ? `${props.roomWidth}px` : '0px'};
   // height:${props => props.roomDepth !== 0 ? `${props.roomDepth}px` : '0px'};
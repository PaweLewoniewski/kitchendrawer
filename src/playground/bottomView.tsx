import { SetStateAction, useEffect, useState } from "react";
import Draggable from "react-draggable";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../store/reducer";
import { RootState } from "../store/store";
import { AllkitchenData, Cabinets } from "../store/types";
import CabinetBox from "./cabinetBox";

interface BottomViewProp {
    data?: Cabinets;
    index?: number;
    positionX?: number;
    positionY?: number;
}


const BottomView = ({ data, index, positionX, positionY }: BottomViewProp) => {

    const dispatch = useAppDispatch();
    const { kitchenData } = useAppSelector((store: RootState) => store.multiReducers.localDataReducer);
    const { playgroundScale } = useAppSelector((store: RootState) => store.multiReducers.localDataReducer);
    const datakit: AllkitchenData[] = kitchenData;
    const [currentData, setCurrentData] = useState<Cabinets>();

    useEffect(() => {
        if (index) {
            setCurrentData(kitchenData[index]);
        }
    }, [index, kitchenData]);

    const allOtherData = datakit.filter(item => item !== currentData);
    const mainDim = datakit.find((item:AllkitchenData) => item.roomDimension?.roomWidth);
    const roomWidth = mainDim?.roomDimension?.roomWidth;
    const roomDepth = mainDim?.roomDimension?.roomDepth;

    const handleStop = (event: any, dragElement: { x: SetStateAction<number>; y: SetStateAction<number>; }) => {
        event.preventDefault();
        event.stopPropagation();
        if (data !== undefined) {
            const updateData = [{ 'botCabinets': { 'id':data.id , 'cabinWidth': data.cabinWidth, 'cabinDepth': data.cabinDepth, 'name': data.name, 'xAxis': dragElement.x, 'yAxis': dragElement.y, 'side': data.side, 'image':data.image } }];
            const sumUpdatedData = [...allOtherData, ...updateData];
            localStorage.setItem("kitchenData", JSON.stringify(sumUpdatedData.flat()));
            dispatch({ type: "ROOM_DIMENSIONS", payload: sumUpdatedData.flat() });
        }
    };

    return (
        <>
            {data && positionX !== undefined && positionY !== undefined ?
                <Draggable
                    axis="both"
                    handle='.handle'
                    defaultPosition={{ x: positionX, y: positionY }}
                    position={{ x: positionX, y: positionY }}
                    positionOffset={{x:'0', y:'0'}}
                    grid={[1, 1]}
                    scale={playgroundScale}
                    bounds={data.side !== 0 ? 
                    {left:-data.cabinWidth / 3.6, 
                    top: data.cabinWidth /4, 
                    right: roomWidth? roomWidth - (data.cabinWidth / 1.3) : 700, 
                    bottom: roomDepth ? roomDepth - (data.cabinDepth * 1.7) : 400 
                } : `parent`}
                    onStop={handleStop}
                >
                    <Runner className={'handle'}>
                        <CabinetBox elementsData={data} />
                    </Runner>
                </Draggable>
                : ''}
        </>
    );
};
export default BottomView;


const Runner = styled.div`
display:flex;
position:absolute;
z-index: 50;
`;
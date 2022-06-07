import { SetStateAction, useEffect, useState } from "react";
import Draggable from "react-draggable";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../store/reducer";
import { RootState } from "../store/store";
import { AllkitchenData, Cabinets } from "../store/types";
import CabinetBox from "./cabinetBox";

interface BottomViewProp {
    data?: Cabinets;
    index?:number;
    positionX?:number;
    positionY?:number;
}


const BottomView = ({ data, index ,positionX ,positionY}: BottomViewProp) => {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const dispatch = useAppDispatch();
    const [loadData, setLoadData] = useState<AllkitchenData[]>();
    const { kitchenData } = useAppSelector((store: RootState) => store.multiReducers.localDataReducer);
    const localData: string | null = localStorage.getItem("kitchenData");


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

    const handleStop = (event: any, dragElement: { x: SetStateAction<number>; y: SetStateAction<number>; }) => {
        event.preventDefault();
        event.stopPropagation();
        if (loadData !== undefined && index !== undefined) {
            setX(dragElement.x);
            setY(dragElement.y);
            const currentData = loadData.at(index);
            const allOtherData = loadData.filter(item => item !== currentData);
            const updateData = [{ botCabinets: {'cabinWidth': data?.cabinWidth, 'cabinDepth': data?.cabinDepth, 'name': 'botCabinDim', 'xAxis': dragElement.x, 'yAxis': dragElement.y } }];
            const sumUpdatedData = [allOtherData, ...updateData];
            localStorage.setItem("kitchenData", JSON.stringify(sumUpdatedData.flat()));
            dispatch({ type: "ROOM_DIMENSIONS", payload: sumUpdatedData.flat() });
        }
    };

    return (
        <>
        {positionX !== undefined && positionY !== undefined ?
            <Draggable
                axis="both"
                handle=".handle"
                position={{ x: positionX, y: positionY }}
                grid={[10, 10]}
                bounds="parent"
               onStop={handleStop}
            >
                <Runner className="handle">
                    <CabinetBox elementsData={data} index={index}/>
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
`;
import { SetStateAction, useEffect, useState } from "react";
import Draggable from "react-draggable";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../store/reducer";
import { RootState } from "../store/store";
import { AllkitchenData, CornerCabinets } from "../store/types";
import CornerCabinetBox from "./cornerCabinetBox";

interface CornersViewProp {
    data?: CornerCabinets;
    index?: number;
    positionX?: number;
    positionY?: number;
}


const CornersTopView = ({ data, index, positionX, positionY }: CornersViewProp) => {

    const dispatch = useAppDispatch();
    const { kitchenData } = useAppSelector((store: RootState) => store.multiReducers.localDataReducer);
    const datakit: AllkitchenData[] = kitchenData;
    const [currentData, setCurrentData] = useState<CornerCabinets>();


    useEffect(() => {
        if (index) {
            setCurrentData(kitchenData[index]);
        }
    }, [index, kitchenData]);

    const allOtherData = datakit.filter(item => item !== currentData);

    const handleStop = (event: any, dragElement: { x: SetStateAction<number>; y: SetStateAction<number>; }) => {
        event.preventDefault();
        event.stopPropagation();
        if (data !== undefined) {
            const updateData = [{ 'cornersTop': { 'id': data.id , 'cabinWidth': data.cabinWidth, 'cabinDepth': data.cabinDepth, 'name': data.name, 'xAxis': dragElement.x, 'yAxis': dragElement.y, 'side': data.side } }];
            const sumUpdatedData = [...allOtherData, ...updateData];
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
                    defaultPosition={{ x: positionX, y: positionY }}
                    position={{ x: positionX, y: positionY }}
                    grid={[5, 5]}
                    bounds="parent"
                    onStop={handleStop}
                >
                    <Runner className="handle">
                        <CornerCabinetBox elementsData={data} />
                    </Runner>
                </Draggable>
                : ''}
        </>
    );
};
export default CornersTopView;


const Runner = styled.div`
display:flex;
position:absolute;
z-index: 99;
`;
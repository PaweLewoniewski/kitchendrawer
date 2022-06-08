import { SetStateAction, useEffect, useState } from "react";
import Draggable from "react-draggable";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../store/reducer";
import { RootState } from "../store/store";
import { AllkitchenData, Cabinets } from "../store/types";
import CabinetBox from "./cabinetBox";

interface TopViewProp {
    data?: Cabinets;
    index?: number;
    positionX?: number;
    positionY?: number;
}


const TopView = ({ data, index, positionX, positionY }: TopViewProp) => {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const dispatch = useAppDispatch();
    const { kitchenData } = useAppSelector((store: RootState) => store.multiReducers.localDataReducer);
    const datakit: AllkitchenData[] = kitchenData;
    const [currentData, setCurrentData] = useState<Cabinets>();


    useEffect(() => {
        if (index) {
            setCurrentData(kitchenData[index]);
        }
    }, [index, kitchenData]);

    const allOtherData = datakit.filter(item => item !== currentData);

    // console.log(datakit);
    const handleStop = (event: any, dragElement: { x: SetStateAction<number>; y: SetStateAction<number>; }) => {
        event.preventDefault();
        event.stopPropagation();
        if (data !== undefined) {
            setX(dragElement.x);
            setY(dragElement.y);
            const updateData = [{ topCabinets: { 'cabinWidth': data?.cabinWidth, 'cabinDepth': data?.cabinDepth, 'name': 'botCabinDim', 'xAxis': dragElement.x, 'yAxis': dragElement.y } }];
            const sumUpdatedData = [...allOtherData, ...updateData];
            localStorage.setItem("kitchenData", JSON.stringify(sumUpdatedData.flat()));
            dispatch({ type: "ROOM_DIMENSIONS", payload: sumUpdatedData.flat() });
            //  console.log(allOtherData)
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
                        <CabinetBox elementsData={data} index={index} />
                    </Runner>
                </Draggable>
                : ''}
        </>
    );
};
export default TopView;


const Runner = styled.div`
display:flex;
position:absolute;
`;
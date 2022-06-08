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
            const updateData = [{ botCabinets: { 'cabinWidth': data?.cabinWidth, 'cabinDepth': data?.cabinDepth, 'name': 'botCabinDim', 'xAxis': dragElement.x, 'yAxis': dragElement.y } }];
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
                    grid={[10, 10]}
                    bounds="parent"
                    onStop={handleStop}
                //    onStop={(e, data) => { saveState ({defaultposition: { x: data.x y: data.y })}};
                >
                    <Runner className="handle">
                        <CabinetBox elementsData={data} index={index} />
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
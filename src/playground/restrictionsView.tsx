import { SetStateAction, useEffect, useState } from "react";
import Draggable from "react-draggable";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../store/reducer";
import { RootState } from "../store/store";
import { AllkitchenData, Cabinets, Restrictions } from "../store/types";
import RestrictionBox from "./restrictionBox";

interface RestrictionsViewProp {
    data?: Restrictions;
    index?: number;
    positionX?: number;
    positionY?: number;
}


const RestrictionView = ({ data, index, positionX, positionY }: RestrictionsViewProp) => {

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

    const handleStop = (event: any, dragElement: { x: SetStateAction<number>; y: SetStateAction<number>; }) => {
        event.preventDefault();
        event.stopPropagation();
        if (data !== undefined) {
            const updateData = [{ 'restrictions': { 'id':data.id , 'cabinWidth': data.cabinWidth, 'cabinDepth': data.cabinDepth, 'name': data.name, 'xAxis': dragElement.x, 'yAxis': dragElement.y } }];
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
                        <RestrictionBox  elementsData={data}/>
                    </Runner>
                </Draggable>
                : ''}
        </>
    );
};
export default RestrictionView;


const Runner = styled.div`
display:flex;
position:absolute;
`;
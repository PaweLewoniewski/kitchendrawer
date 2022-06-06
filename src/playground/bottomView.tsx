import { SetStateAction, useEffect, useState } from "react";
import Draggable from "react-draggable";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../store/reducer";
import { RootState } from "../store/store";
import { AllkitchenData, Cabinets } from "../store/types";
import CabinetBox from "./cabinetBox";

interface BottomViewProp {
    data?: Cabinets;
}


const BottomView = ({ data }: BottomViewProp) => {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const dispatch = useAppDispatch();
    const [loadData, setLoadData] = useState<AllkitchenData[]>();
    const { kitchenData } = useAppSelector((store: RootState) => store.multiReducers.localDataReducer);

    useEffect(() => {
        if (loadData === undefined) {
            setLoadData(kitchenData);
        }
    }, [loadData]);


    const handleStop = (event: any, dragElement: { x: SetStateAction<number>; y: SetStateAction<number>; }) => {
        if (loadData !== undefined) {
            setX(dragElement.x);
            setY(dragElement.y);
            // const allOtherElement = loadData.filter((i: AllkitchenData) => i.botCabinets?.id !== data?.id);
            // const updateData = [{ botCabinets: { 'id': data?.id, 'cabinWidth': data?.cabinWidth, 'cabinDepth': data?.cabinDepth, 'name': 'botCabinDim', 'xAxis': dragElement.x, 'yAxis': dragElement.y } }];
            // const sumUpdatedData = [...allOtherElement, ...updateData];
            // localStorage.setItem("kitchenData", JSON.stringify(sumUpdatedData));
            // dispatch({ type: "ROOM_DIMENSIONS", payload: sumUpdatedData });
            console.log(loadData);
        }
    };

    return (
        <>
            <Draggable
                axis="both"
                handle=".handle"
                // defaultPosition={{ x: 0, y: 0 }}
                position={{ x: x, y: y }}
                grid={[10, 10]}
                bounds="parent"
                onStop={handleStop}
            >
                <Runner className="handle">
                    <CabinetBox elementsData={data} />
                </Runner>
            </Draggable>
        </>
    );
};
export default BottomView;


const Runner = styled.div`
display:flex;
position:absolute;
`;
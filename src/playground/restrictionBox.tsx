//import { useEffect, useState } from "react";
import styled from "styled-components";
//import { useAppSelector } from "../store/reducer";
import { Restrictions } from "../store/types";

interface ElementsData {
    elementsData: Restrictions[];
}

const RestrictionBox = ({ elementsData }: ElementsData) => {

    return (
        <>
            {elementsData && elementsData.length > 0 ? elementsData.map((item: Restrictions, index) =>
            (
                <RestrictBox key={index} restWidth={item.restWidth} restDepth={item.restDepth}>
                    <DimensionsBoxLines />
                    <DimensionsBoxNames>
                        <DimensionText>{item.restWidth}</DimensionText>
                    </DimensionsBoxNames>
                    <CrossLine />
                </RestrictBox>
            )) : ''}
        </>
    );
};
export default RestrictionBox;

const RestrictBox = styled.div<Restrictions>`
    /* width:150px;
    height:60px; */
    width:${props => props.restWidth !== 0 ? `${props.restWidth}px` : '0px'};
    height:${props => props.restDepth !== 0 ? `${props.restDepth}px` : '0px'};
    /* transform: rotate(0.25turn); */
    border:2px solid black;
    box-sizing: border-box;
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;
    background:#f4f4f4;
`;

const DimensionsBoxLines = styled.div`
    width:100%;
    height:15px;
    border:1px solid black;
    border-top:none;
    border-bottom:none;
    position:absolute;
    top:-16px;
    left:-1px;
    background:white;
`;

const DimensionsBoxNames = styled.div`
    width:100%;
    height:10px;
    border:1px solid black;
    display:flex;
    align-items:center;
    text-align:center;
    justify-content:center;
    position:absolute;
    top:-27px;
    left:-1px;
    text-align:center;
    border-top:none;
    padding-bottom:3px;
    background:white;
    text-shadow:1px 1px 1px white;
`;

const DimensionText = styled.p`
    font-size:16px;
    text-shadow:1px 1px 1px white;
    position:absolute;
    top:-23px;
`;

const CrossLine = styled.div`
    width:100%;
    height:1px;
    background:black;
    transform: rotate(0.54turn);
    position:relative;
    &:after{
        content:'';
        width:100%;
        height:1px;
        background:black;
        position:absolute;
        transform: rotate(-0.58turn);
    }
`;




// const Room = styled.div<RoomData>`
//     width:${props => props.roomWidth !== 0 ? `${props.roomWidth}px` : '0px'};
//     height:${props => props.roomDepth !== 0 ? `${props.roomDepth}px` : '0px'};
//     border:2px solid black;
//     box-sizing: border-box;
// `;


    // const { restrictions } = useAppSelector((store: RootState) => store.multiReducers.localDataReducer);
    //  const [loadData, setLoadData] = useState<Restrictions[]>();

    // useEffect(() => {
    //     if (localData !== null && loadData === undefined) {
    //         const dataObj = JSON.parse(localData);
    //         setLoadData(dataObj);
    //         dispatch({ type: "ROOM_DIMENSIONS", payload: dataObj });
    //     }
    //     if (loadData?.length !== roomData) {
    //         setLoadData(roomData);
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [loadData, localData]);
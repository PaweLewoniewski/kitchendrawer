import styled from "styled-components";
import { useAppDispatch } from "../store/reducer";
import { Cabinets } from "../store/types";

interface ElementsData {
    elementsData: Cabinets[];
    name: string;
}

const CabinetBox = ({ elementsData, name }: ElementsData) => {

    const dispatch = useAppDispatch();
    const removeElement = (item: any) => {
        const removelement = elementsData.filter(i => i.id !== item);
        localStorage.setItem(name, JSON.stringify(removelement));
        console.log(item);
        if (name === 'botCabinDim') {
            dispatch({ type: "BOTTOM_CABIN", payload: removelement });
        }
        if (name === 'topCabinDim') {
            dispatch({ type: "TOP_CABIN", payload: removelement });
        }
    }

    return (
        <>
            {elementsData && elementsData.length > 0 ? elementsData.map((item: Cabinets, index) =>
            (
                <CabinBox key={item.id} cabinWidth={item.cabinWidth} cabinDepth={item.cabinDepth} onClick={() => removeElement(item.id)}>
                    <DimensionsBoxLines />
                    <DimensionsBoxNames>
                        <DimensionText>{item.cabinWidth} i:{index}</DimensionText>
                    </DimensionsBoxNames>
                </CabinBox>
            )) : ''}
        </>
    );
};
export default CabinetBox;

const CabinBox = styled.div<Cabinets>`
    width:${props => props.cabinWidth !== 0 ? `${props.cabinWidth}px` : '0px'};
    height:${props => props.cabinDepth !== 0 ? `${props.cabinDepth}px` : '0px'};
    /* transform: rotate(0.25turn); */
    border:2px solid black;
    border-bottom:6px solid black;
    box-sizing: border-box;
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;
    background:#f4f4f4;
    margin:0px 1px;
    transition:0.3s ease-in-out;
    cursor:pointer;
    &:hover{
        border:2px solid #00d624;
        border-bottom:6px solid #00d624;
        transition:0.3s ease-in-out;
    }
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

// const CrossLine = styled.div`
//     width:100%;
//     height:1px;
//     background:black;
//     transform: rotate(0.54turn);
//     position:relative;
//     &:after{
//         content:'';
//         width:100%;
//         height:1px;
//         background:black;
//         position:absolute;
//         transform: rotate(-0.58turn);
//     }
// `;




// const Room = styled.div<RoomData>`
//     width:${props => props.roomWidth !== 0 ? `${props.roomWidth}px` : '0px'};
//     height:${props => props.roomDepth !== 0 ? `${props.roomDepth}px` : '0px'};
//     border:2px solid black;
//     box-sizing: border-box;
// `;
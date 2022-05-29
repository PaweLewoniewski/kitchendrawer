import styled from "styled-components";
import { Cabinets } from "../store/types";

interface ElementsData {
    elementsData: Cabinets[];
}

const CabinetBox = ({ elementsData }: ElementsData) => {
    return (
        <>
            {elementsData && elementsData.length > 0 ? elementsData.map((item: Cabinets, index) =>
            (
                <CabinBox key={index} cabinWidth={item.cabinWidth} cabinDepth={item.cabinDepth}>
                    <DimensionsBoxLines />
                    <DimensionsBoxNames>
                        <DimensionText>{item.cabinWidth}</DimensionText>
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
    border-bottom:4px solid black;
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
        border-bottom:4px solid #00d624;
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
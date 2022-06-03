import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../store/reducer";
import { RootState } from "../store/store";
import { Cabinets } from "../store/types";


interface ElementsDataProps {
    elementsData?: Cabinets;
}

const CabinetBox = ({ elementsData }: ElementsDataProps) => {

    const dispatch = useAppDispatch();
    //    const { currentTarget } = useAppSelector((store: RootState) => store.multiReducers.localDataReducer);

    //     const removeElement = (item: any) => {
    //         dispatch({ type: "CURRENT_TARGET", payload: item });
    //     }

    return (
        <>
            {elementsData !== undefined ?
                <CabinBox key={elementsData.id} cabinWidth={elementsData.cabinWidth} cabinDepth={elementsData.cabinDepth}>
                    <DimensionsBoxLines />
                    <DimensionsBoxNames>
                        <DimensionText>{elementsData.cabinWidth}</DimensionText>
                    </DimensionsBoxNames>
                </CabinBox>
                : ''}
        </>
    );
};
export default CabinetBox;

const CabinBox = styled.div<Cabinets>`
    /* width:100px;
    height:50px; */
    /* transform: rotate(0.25turn); */
      width:${props => props.cabinWidth !== 0 ? `${props.cabinWidth}px` : '0px'};
    height:${props => props.cabinDepth !== 0 ? `${props.cabinDepth}px` : '0px'};
    border:2px solid #06151f;
    border-bottom:6px solid #06151f;
    box-sizing: border-box;
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;
    background:#fbffca;
    margin:0px 1px;
    transition:0.3s ease-in-out;
    cursor:pointer;
    &:hover{
        border:2px solid #ff8800;
        border-bottom:6px solid #ff8800;
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


/* background: ${(props) => (props.active ? "lightblue" : "orange")}; */

// const Room = styled.div<RoomData>`
//     width:${props => props.roomWidth !== 0 ? `${props.roomWidth}px` : '0px'};
//     height:${props => props.roomDepth !== 0 ? `${props.roomDepth}px` : '0px'};
//     border:2px solid black;
//     box-sizing: border-box;
// `;


/* width:${props => props.cabinWidth !== 0 ? `${props.cabinWidth}px` : '0px'};
height:${props => props.cabinDepth !== 0 ? `${props.cabinDepth}px` : '0px'}; */
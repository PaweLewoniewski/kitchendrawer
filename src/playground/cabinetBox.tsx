import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../store/reducer";
import { RootState } from "../store/store";
import { AllkitchenData, Cabinets } from "../store/types";
import { AiOutlineClose } from 'react-icons/ai';
import { useEffect, useState } from "react";
import Stove from '../image/stove.jpg';
import Sink from '../image/sink.jpg';

interface ElementsDataProps {
    elementsData?: Cabinets;
}

const CabinetBox = ({ elementsData }: ElementsDataProps) => {

    const dispatch = useAppDispatch();
    const { currentTarget } = useAppSelector((store: RootState) => store.multiReducers.localDataReducer);
    const { kitchenData } = useAppSelector((store: RootState) => store.multiReducers.localDataReducer);
    const [loadData, setLoadData] = useState<AllkitchenData[]>();
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

    const currentElement = (item: {}) => {
        dispatch({ type: "CURRENT_TARGET", payload: item });
    }
    const { id } = currentTarget;

    const removeElement = (item: any) => {
        if (loadData !== undefined) {
            if (item.name === 'Bottom cabinets') {
                const filteredELements = loadData.filter(item => item.botCabinets?.id !== id);
                localStorage.setItem("kitchenData", JSON.stringify(filteredELements));
                dispatch({ type: "ROOM_DIMENSIONS", payload: filteredELements });
            }
            if (item.name === 'Top cabinets') {
                const filteredELements = loadData.filter(item => item.topCabinets?.id !== id);
                localStorage.setItem("kitchenData", JSON.stringify(filteredELements));
                dispatch({ type: "ROOM_DIMENSIONS", payload: filteredELements });
            }
        }
    }

    return (
        <>
            {elementsData !== undefined ?
                <CabinBox 
                id={elementsData.id} 
                cabinWidth={elementsData.cabinWidth} 
                cabinDepth={elementsData.cabinDepth} 
                side={elementsData.side}
                image={elementsData.image}
                    onClick={() => { currentElement(elementsData) }} 
                    className={currentTarget === elementsData ? "activeCabin" : undefined}
                >
                    <DimensionsBoxLines />
                    <DimensionsBoxNames>
                        <DimensionText>{elementsData.cabinWidth}</DimensionText>
                    </DimensionsBoxNames>
                    <OptionsBtnsBox className={currentTarget === elementsData ? "show" : 'hide'}>
                        <OptionsBtn onClick={() => { removeElement(elementsData) }}
                        ><AiOutlineClose size={20} /></OptionsBtn>
                    </OptionsBtnsBox>
                </CabinBox>
                : ''}
        </>
    );
};
export default CabinetBox;

const CabinBox = styled.div<Cabinets>`
    transform:${props => props.side !== 0 ? `rotate(${props.side}turn)` : 'rotate(0turn)'};
    width:${props => props.cabinWidth !== 0 ? `${props.cabinWidth}px` : '0px'};
    height:${props => props.cabinDepth !== 0 ? `${props.cabinDepth}px` : '0px'};
    background:${props => props.image === 'Stove' ? `url(${Stove})no-repeat !important` : `#fbffca;`};
    background:${props => props.image === 'Sink' ? `url(${Sink})no-repeat !important` : `#fbffca;` };
    background-size: contain !important;
    background-position: center !important;
    border:2px solid #06151f;
    border-bottom:6px solid #06151f;
    box-sizing: border-box;
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;
    /* background:#fbffca; */
    /* margin:0px 1px; */
    /* transition:0.3s ease-in-out; */
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

const OptionsBtnsBox = styled.div`
    position:absolute;
    width:25px;
    height:50px;
    bottom:-58px;
    left:0px;
    z-index:99;
    padding:1px;
`;

const OptionsBtn = styled.div`
 border:1px solid black;
 border-radius:3px;
 display:flex;
 justify-content:center;
 align-items:center;
`;
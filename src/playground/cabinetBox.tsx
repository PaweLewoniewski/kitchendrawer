import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../store/reducer";
import { RootState } from "../store/store";
import { AllkitchenData, Cabinets } from "../store/types";
import { AiOutlineClose } from 'react-icons/ai';
import { useEffect, useState } from "react";

interface ElementsDataProps {
    elementsData?: Cabinets;
}

const CabinetBox = ({ elementsData }: ElementsDataProps) => {

    const dispatch = useAppDispatch();
    const { currentTarget } = useAppSelector((store: RootState) => store.multiReducers.localDataReducer);
    const { kitchenData } = useAppSelector((store: RootState) => store.multiReducers.localDataReducer);
    const [loadData, setLoadData] = useState<AllkitchenData[]>();

    useEffect(() => {
        if (loadData === undefined) {
            setLoadData(kitchenData);
        }
    }, [loadData]);

    const currentElement = (item: {}) => {
        dispatch({ type: "CURRENT_TARGET", payload: item });
        console.log(item)
    }

    const removeElement = (item: any) => {
        if (loadData !== undefined) {
            if (item.name === 'botCabinDim') {
                const filteredBotELements = loadData.filter((i: AllkitchenData) => i.botCabinets?.id !== item.id);
                localStorage.setItem("kitchenData", JSON.stringify(filteredBotELements));
                dispatch({ type: "ROOM_DIMENSIONS", payload: filteredBotELements });
            }
            if (item.name === 'topCabinDim') {
                const filteredTopELements = loadData.filter((i: AllkitchenData) => i.topCabinets?.id !== item.id);
                localStorage.setItem("kitchenData", JSON.stringify(filteredTopELements));
                dispatch({ type: "ROOM_DIMENSIONS", payload: filteredTopELements });
            }
        }
    }

    // const blurFromElement = () => {
    //     dispatch({ type: "CURRENT_TARGET", payload: undefined });
    //     console.log('blur');
    // }

    return (
        <>
            {elementsData !== undefined ?
                <CabinBox key={elementsData.id} cabinWidth={elementsData.cabinWidth} cabinDepth={elementsData.cabinDepth}
                    onClick={() => { currentElement(elementsData) }} className={currentTarget === elementsData ? "activeCabin" : undefined}
                // onBlur={()=>{blurFromElement(); setActive(undefined)}}
                >
                    <DimensionsBoxLines />
                    <DimensionsBoxNames>
                        <DimensionText>{elementsData.cabinWidth}</DimensionText>
                    </DimensionsBoxNames>
                    <OptionsBtnsBox className={currentTarget === elementsData ? "show" : 'hide'}>
                        <OptionsBtn onClick={() => { removeElement(elementsData) }}><AiOutlineClose size={20} /></OptionsBtn>
                    </OptionsBtnsBox>
                </CabinBox>
                : ''}
        </>
    );
};
export default CabinetBox;

const CabinBox = styled.div<Cabinets>`
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

        // const { id, name } = currentTarget;
        // const { botCabinets, topCabinets } = kitchenData;

        // const removeTarget = () => {
        //     if (name === 'botCabinDim') {
        //       setBotCabin(botCabinets);
        //       console.log(botCabins)
        //       const removelement = botCabins.filter((i: any) => i.id !== id);
        //       localStorage.setItem(name, JSON.stringify(removelement));
        //       dispatch({ type: "ROOM_DIMENSIONS", payload: removelement });
        //     }
        //     if (name === 'topCabinDim') {
        //       setTopCabin(topCabinets)
        //       const removelement = topCabins.filter((i: any) => i.id !== id);
        //       localStorage.setItem(name, JSON.stringify(removelement));
        //       dispatch({ type: "ROOM_DIMENSIONS", payload: removelement });
        //     }
        //   }
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../store/reducer";
import { RootState } from "../store/store";
import { AllkitchenData, Cabinets, CornerCabinets } from "../store/types";
import { AiOutlineClose } from 'react-icons/ai';
import { useEffect, useState } from "react";

interface ElementsDataProps {
    elementsData?: Cabinets;
}

const CornerCabinetBox = ({ elementsData }: ElementsDataProps) => {

    const dispatch = useAppDispatch();
    const { currentTarget } = useAppSelector((store: RootState) => store.multiReducers.localDataReducer);
    const { kitchenData } = useAppSelector((store: RootState) => store.multiReducers.localDataReducer);
    const [loadData, setLoadData] = useState<AllkitchenData[]>();

    useEffect(() => {
        if (loadData === undefined) {
            setLoadData(kitchenData);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loadData]);

    const currentElement = (item: {}) => {
        dispatch({ type: "CURRENT_TARGET", payload: item });
        // console.log(item)
    }
    const { id } = currentTarget;


    const removeElement = (item: any) => {
        if (loadData !== undefined) {
            if (item.name === 'cornersBot') {
                const filteredELements = loadData.filter(item => item.cornersBot?.id !== id);
                localStorage.setItem("kitchenData", JSON.stringify(filteredELements));
                dispatch({ type: "ROOM_DIMENSIONS", payload: filteredELements });
            }
            if (item.name === 'cornersTop') {
                const filteredELements = loadData.filter(item => item.cornersTop?.id !== id);
                localStorage.setItem("kitchenData", JSON.stringify(filteredELements));
                dispatch({ type: "ROOM_DIMENSIONS", payload: filteredELements });
            }
            console.log(id)
        }
    }


    return (
        <>
            {elementsData !== undefined ?
                <CornerCabinBox id={elementsData.id} cabinWidth={elementsData.cabinWidth}
                    cabinDepth={elementsData.cabinDepth} side={elementsData.side}
                    onClick={() => { currentElement(elementsData) }}
                    className={currentTarget === elementsData ? "activeCabin" : undefined}>
                    <DimensionsBoxLines />
                    <DimensionsBoxNames>
                        <DimensionText>{elementsData.cabinWidth}</DimensionText>
                    </DimensionsBoxNames>
                    <LeftDimensions id={elementsData.id} side={elementsData.side} cabinWidth={elementsData.cabinWidth}
                        cabinDepth={elementsData.cabinDepth}>
                        <DimensionsSecBoxLines />
                        <DimensionsSecBoxNames>
                            <DimensionSecText>{elementsData.cabinDepth}</DimensionSecText>
                        </DimensionsSecBoxNames>
                    </LeftDimensions>
                    <RightDimensions id={elementsData.id} side={elementsData.side} cabinWidth={elementsData.cabinWidth}
                        cabinDepth={elementsData.cabinDepth}>
                        <DimensionsSecLeftBoxLines />
                        <DimensionsSecLeftBoxNames>
                            <DimensionSecLeftText>{elementsData.cabinDepth}</DimensionSecLeftText>
                        </DimensionsSecLeftBoxNames>
                    </RightDimensions>
                    <OptionsBtnsBox className={currentTarget === elementsData ? "show" : 'hide'}>
                        <OptionsBtn
                            onClick={() => { removeElement(elementsData) }}
                        ><AiOutlineClose size={20} /></OptionsBtn>
                    </OptionsBtnsBox>
                </CornerCabinBox>
                : ''}
        </>
    );
};
export default CornerCabinetBox;

const LeftDimensions = styled.div<CornerCabinets>`
  opacity:${props => props.side === 1 ? `1` : `0`};
`;

const RightDimensions = styled.div<CornerCabinets>`
  opacity:${props => props.side === 0 ? `1` : `0`};
`;

const CornerCabinBox = styled.div<CornerCabinets>`
    width:${props => props.cabinWidth !== 0 ? `${props.cabinWidth}px` : '0px'};
    height:${props => props.cabinDepth !== 0 ? `${props.cabinDepth}px` : '0px'};
    border:2px solid #06151f;
    box-sizing: border-box;
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;
    background:#fbffca;
    cursor:pointer;
    /* transform:rotate(0turn) ; */
    &:before{
        display:${props => props.side === 1 ? `block` : 'none'};
        content:'';
        position:absolute;
        bottom:-2px;
        left:-2px;
        width:${props => props.cabinWidth !== 0 ? `${props.cabinWidth / 2}px` : '0px'};
        height:${props => props.cabinDepth !== 0 ? `${props.cabinDepth / 2}px` : '0px'};
        background:#f4f4f4;
        border:2px solid #06151f;
        border-bottom:2px solid white;
        border-left:2px solid white;
    }
    &:after{
        display:${props => props.side === 0 ? `block` : 'none'};
        content:'';
        position:absolute;
        bottom:-2px;
        right:-2px;
        width:${props => props.cabinWidth !== 0 ? `${props.cabinWidth / 2}px` : '0px'};
        height:${props => props.cabinDepth !== 0 ? `${props.cabinDepth / 2}px` : '0px'};
        background:#f4f4f4;
        border:2px solid #06151f;
        border-bottom:2px solid white;
        border-right:2px solid white;
    }
    &:hover {
        border:2px solid #ff8800;
        transition:0.3s ease-in-out;
        &:before{
        border-top:2px solid #ff8800;
        border-right:2px solid #ff8800;
    }
        &:after{
        border-top:2px solid #ff8800;
        border-left:2px solid #ff8800;
    }
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
`;

const DimensionSecText = styled.p`
    font-size:16px;
    text-shadow:1px 1px 1px white;
    transform:rotate(0.25turn) ;
    background:white;
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

const DimensionsSecBoxLines = styled.div`
    width:15px;
    height:100%;
    border:1px solid black;
    border-left:none;
    border-right:none;
    position:absolute;
    right:-16px;
    top:0;
`;

const DimensionsSecBoxNames = styled.div`
    width:10px;
    height:105%;
    border-left:1px solid black;
    border-right:none;
    display:flex;
    align-items:center;
    text-align:center;
    justify-content:center;
    position:absolute;
    top:-5px;
    right:-22px;
    text-align:center;
    padding-bottom:3px;
    text-shadow:1px 1px 1px white;
`;


const DimensionsSecLeftBoxLines = styled.div`
    width:25px;
    height:100%;
    border:1px solid black;
    border-left:none;
    border-right:none;
    position:absolute;
    left:-25px;
    top:0;
`;

const DimensionsSecLeftBoxNames = styled.div`
    width:10px;
    height:105%;
    border-left:1px solid black;
    border-right:none;
    display:flex;
    align-items:center;
    text-align:center;
    justify-content:center;
    position:absolute;
    top:-5px;
    left:-22px;
    text-align:center;
    padding-bottom:3px;
    /* background:white; */
    text-shadow:1px 1px 1px white;
`;

const DimensionSecLeftText = styled.p`
    font-size:16px;
    text-shadow:1px 1px 1px white;
    transform:rotate(-0.25turn) ;
    background:white;
`;

        // const { id, name } = currentTarget;
        // const { botCabinets, topCabinets } = kitchenData;

        // const removeElement = (item: any) => {
        //     if (loadData !== undefined) {
        //         if (item.name === 'botCabinDim') {
        //             const filteredBotELements = loadData.filter(item => item.botCabinets?.id !== id);
        //             localStorage.setItem("kitchenData", JSON.stringify(filteredBotELements));
        //             dispatch({ type: "ROOM_DIMENSIONS", payload: filteredBotELements });
        //         }
        //         if (item.name === 'topCabinDim') {
        //             const filteredTopELements = loadData.filter(item => item.topCabinets?.id !== id);
        //             localStorage.setItem("kitchenData", JSON.stringify(filteredTopELements));
        //             dispatch({ type: "ROOM_DIMENSIONS", payload: filteredTopELements });
        //         }
        //     }
        // }
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../store/reducer";
import { RootState } from "../store/store";
import { AllkitchenData, CornerCabinets, CornerCabinetsNames } from "../store/types";
import { AiOutlineClose } from 'react-icons/ai';
import { useEffect, useState } from "react";

interface ElementsDataProps {
    elementsData?: CornerCabinets;
}

const CornerCabinetBox = ({ elementsData }: ElementsDataProps) => {

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
            if (item.name === 'Bottom corners') {
                const filteredELements = loadData.filter(item => item.cornersBot?.id !== id);
                localStorage.setItem("kitchenData", JSON.stringify(filteredELements));
                dispatch({ type: "ROOM_DIMENSIONS", payload: filteredELements });
            }
            if (item.name === 'Top corners') {
                const filteredELements = loadData.filter(item => item.cornersTop?.id !== id);
                localStorage.setItem("kitchenData", JSON.stringify(filteredELements));
                dispatch({ type: "ROOM_DIMENSIONS", payload: filteredELements });
            }
        }
    }


    return (
        <>
            {elementsData !== undefined ?
                <CornerCabinBox 
                    id={elementsData.id} 
                    cabinWidth={elementsData.cabinWidth}
                    cabinDepth={elementsData.cabinDepth} 
                    side={elementsData.side}
                    sideA={elementsData.sideA}
                    sideB={elementsData.sideB}
                    onClick={() => { currentElement(elementsData) }}
                    className={currentTarget === elementsData ? "activeCabin" : undefined}>
                    <DimensionsBoxLines name={elementsData.name}/>
                    <DimensionsBoxNames name={elementsData.name}>
                        <DimensionText>{elementsData.cabinWidth}</DimensionText>
                    </DimensionsBoxNames>
                    <LeftDimensions 
                        id={elementsData.id} 
                        side={elementsData.side} 
                        cabinWidth={elementsData.cabinWidth}
                        cabinDepth={elementsData.cabinDepth}
                        sideA={elementsData.sideA}
                        sideB={elementsData.sideB}
                        name={elementsData.name}
                        >
                        <DimensionsSecBoxLines name={elementsData.name}/>
                        <DimensionsSecBoxNames name={elementsData.name}>
                            <DimensionSecText>{elementsData.cabinDepth}</DimensionSecText>
                        </DimensionsSecBoxNames>
                    </LeftDimensions>
                    <RightDimensions 
                        id={elementsData.id} 
                        side={elementsData.side} 
                        cabinWidth={elementsData.cabinWidth}
                        cabinDepth={elementsData.cabinDepth}
                        sideA={elementsData.sideA}
                        sideB={elementsData.sideB}
                        name={elementsData.name}
                        >
                        <DimensionsSecLeftBoxLines name={elementsData.name}/>
                        <DimensionsSecLeftBoxNames name={elementsData.name}>
                            <DimensionSecLeftText>{elementsData.cabinDepth}</DimensionSecLeftText>
                        </DimensionsSecLeftBoxNames>
                    </RightDimensions>
                    <OptionsBtnsBox className={currentTarget === elementsData ? "show" : 'hide'}>
                        <OptionsBtn
                            onClick={() => removeElement(elementsData)}
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
        width:${props => props.cabinWidth !== 0 ? `${props.cabinWidth - props.sideB}px` : '0px'};
        height:${props => props.cabinDepth !== 0 ? `${props.cabinDepth - props.sideA}px` : '0px'};
        background:#f4f4f4;
        border:6px solid #06151f;
        border-bottom:2px solid white;
        border-left:2px solid white;
    }
    &:after{
        display:${props => props.side === 0 ? `block` : 'none'};
        content:'';
        position:absolute;
        bottom:-2px;
        right:-2px;
        width:${props => props.cabinWidth !== 0 ? `${props.cabinWidth - props.sideB}px` : '0px'};
        height:${props => props.cabinDepth !== 0 ? `${props.cabinDepth - props.sideA}px` : '0px'};
        background:#f4f4f4;
        border:6px solid #06151f;
        border-bottom:2px solid white;
        border-right:2px solid white;
    }
    &:hover {
        border:2px solid #ff8800;
        transition:0.3s ease-in-out;
        &:before{
        border-top:6px solid #ff8800;
        border-right:6px solid #ff8800;
    }
        &:after{
        border-top:6px solid #ff8800;
        border-left:6px solid #ff8800;
    }
    }
`;

const DimensionsBoxLines = styled.div<CornerCabinetsNames>`
    width:100%;
    height:${props => props.name === `Top corners` ? `15px` : `40px`};
    border:1px solid black;
    border-top:none;
    border-bottom:none;
    position:absolute;
    top:${props => props.name === `Top corners` ? `-16px` : `-40px`};
    left:-1px;
    z-index:-1;
`;

const DimensionsBoxNames = styled.div<CornerCabinetsNames>`
    width:100%;
    height:10px;
    border:1px solid black;
    display:flex;
    align-items:center;
    text-align:center;
    justify-content:center;
    position:absolute;
    top:${props => props.name === `Top corners` ? `-30px` : `-50px`};
    left:-1px;
    text-align:center;
    border-top:none;
    padding-bottom:3px;
    background:white;
`;

const DimensionText = styled.p`
    font-size:16px;
`;

const DimensionSecText = styled.p`
    font-size:16px;
    transform:rotate(0.25turn);
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

const DimensionsSecBoxLines = styled.div<CornerCabinetsNames>`
    width:${props => props.name === `Top corners` ? `15px` : `40px`};
    height:100%;
    border:1px solid black;
    border-left:none;
    border-right:none;
    position:absolute;
    right:${props => props.name === `Top corners` ? `-16px` : `-40px`};
    top:0;
    z-index:-1;
`;

const DimensionsSecBoxNames = styled.div<CornerCabinetsNames>`
    width:10px;
    height:105%;
    border-left:1px solid black;
    border-right:none;
     display:flex;
    position:absolute;
    top:-3px;
    right:${props => props.name === `Top corners` ? `-22px` : `-45px`};
    text-align:center;
    padding-bottom:3px;
`;


const DimensionsSecLeftBoxLines = styled.div<CornerCabinetsNames>`
    width:${props => props.name === `Top corners` ? `25px` : `50px`};
    height:100%;
    border:1px solid black;
    border-left:none;
    border-right:none;
    position:absolute;
    left:${props => props.name === `Top corners` ? `-25px` : `-45px`};
    top:0;
    z-index:-1;
`;

const DimensionsSecLeftBoxNames = styled.div<CornerCabinetsNames>`
    width:${props => props.name === `Top corners` ? `10px` : `50px`};
    height:105%;
    border-left:1px solid black;
    border-right:none;
    display:flex;
    position:absolute;
    top:-2px;
    left:${props => props.name === `Top corners` ? `-22px` : `-40px`};
    text-align:center;
    padding-bottom:3px;
    
`;

const DimensionSecLeftText = styled.p`
    font-size:16px;
    transform:rotate(-0.25turn) ;
`;
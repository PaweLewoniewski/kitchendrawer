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
    // const { id } = currentTarget;
    


    return (
        <>
            {/* {elementsData !== undefined ? */}
                <CornerCabinBox className={currentTarget === elementsData ? "activeCabin" : undefined}>
                    <DimensionsBoxLines />
                    <DimensionsBoxNames>
                        <DimensionText>250</DimensionText>
                    </DimensionsBoxNames>
                    <DimensionsSecBoxLines />
                    <DimensionsSecBoxNames>
                        <DimensionText>270</DimensionText>
                    </DimensionsSecBoxNames>
                    <OptionsBtnsBox className={currentTarget === elementsData ? "show" : 'hide'}>
                        <OptionsBtn 
                        // onClick={() => { removeElement(elementsData) }}
                        ><AiOutlineClose size={20} /></OptionsBtn>
                    </OptionsBtnsBox>
                </CornerCabinBox>
                {/* : ''} */}
        </>
    );
};
export default CornerCabinetBox;

const CornerCabinBox = styled.div`
    width:250px;
    height:250px;
    border:2px solid #06151f;
    box-sizing: border-box;
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;
    background:#fbffca;
    cursor:pointer;
    transform:rotate(0turn) ;
    &:after{
        content:'';
        position:absolute;
        bottom:-2px;
        right:-2px;
        width:100px;
        height:100px;
        background:#f4f4f4;
        border:2px solid #06151f;
        border-bottom:2px solid white;
        border-right:2px solid white;
    }
    &:hover {
        border:2px solid #ff8800;
        transition:0.3s ease-in-out;
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

const DimensionsSecBoxLines = styled.div`
    width:100%;
    height:15px;
    border:1px solid black;
    border-top:none;
    border-bottom:none;
    position:absolute;
    right:-132px;
    top:115px;
    transform:rotate(0.25turn);
`;

const DimensionsSecBoxNames = styled.div`
    width:100%;
    height:10px;
    border:1px solid black;
    display:flex;
    align-items:center;
    text-align:center;
    justify-content:center;
    position:absolute;
    /* top:0px; */
    right:-143px;
    text-align:center;
    border-top:none;
    padding-bottom:3px;
    background:white;
    text-shadow:1px 1px 1px white;
    transform:rotate(0.25turn);
`;

// transform:${props => props.side !== 0 ? `rotate(${props.side}turn)` : 'rotate(0turn)'};
// width:${props => props.cabinWidth !== 0 ? `${props.cabinWidth}px` : '0px'};
// height:${props => props.cabinDepth !== 0 ? `${props.cabinDepth}px` : '0px'};

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
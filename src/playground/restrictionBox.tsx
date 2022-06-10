import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../store/reducer";
import { RootState } from "../store/store";
import { AllkitchenData, Restrictions } from "../store/types";
import CrossLines from '../image/crossLines.png';
 
interface ElementsDataProps {
    elementsData?: Restrictions;
    index?: number;
}

const RestrictionBox = ({ elementsData, index }: ElementsDataProps) => {


    const dispatch = useAppDispatch();
    const { currentTarget } = useAppSelector((store: RootState) => store.multiReducers.localDataReducer);
    const [loadData, setLoadData] = useState<AllkitchenData[]>();
    const { kitchenData } = useAppSelector((store: RootState) => store.multiReducers.localDataReducer);

    useEffect(() => {
        if (loadData === undefined) {
            setLoadData(kitchenData);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loadData]);

    const currentElement = (item: {}) => {
        dispatch({ type: "CURRENT_TARGET", payload: item });
    }

    const { id } = currentTarget;

    const removeElement = (item: any) => {
        if (loadData !== undefined) {
            if (item.name === 'restrictions') {
                const filteredELements = loadData.filter(item => item.restrictions?.id !== id);
                localStorage.setItem("kitchenData", JSON.stringify(filteredELements.flat()));
                dispatch({ type: "ROOM_DIMENSIONS", payload: filteredELements.flat() });
            }
        }
        console.log(item.name)
    }

    return (
        <>
            {elementsData !== undefined ?
                <RestrictBox id={elementsData.id} restWidth={elementsData.restWidth} restDepth={elementsData.restDepth}
                onClick={() => { currentElement(elementsData) }} className={currentTarget === elementsData ? "activeCabin" : undefined}
                >
                    <DimensionsBoxLines />
                    <DimensionsBoxNames>
                        <DimensionText>{elementsData.restWidth}</DimensionText>
                    </DimensionsBoxNames>
                    <CrossLine />
                    <OptionsBtnsBox className={currentTarget === elementsData ? "show" : 'hide'}>
                        <OptionsBtn onClick={() => { removeElement(elementsData) }}
                        ><AiOutlineClose size={20} /></OptionsBtn>
                    </OptionsBtnsBox>
                </RestrictBox>
                : ''}
        </>
    );
};
export default RestrictionBox;

const RestrictBox = styled.div<Restrictions>`
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
    transition:0.3s ease-in-out;
    cursor:pointer;
    &:hover{
        border:2px solid #ff8800;
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

const CrossLine = styled.div`
    width:100%;
    height:100%;
    position:absolute ;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background: url(${CrossLines}) no-repeat;
    background-size:cover;
    background-position:center;
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
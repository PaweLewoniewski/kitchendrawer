import styled from "styled-components";
import { useAppDispatch } from "../store/reducer";
import { Restrictions } from "../store/types";

interface ElementsDataProps {
    elementsData?: Restrictions;
}

const RestrictionBox = ({ elementsData }: ElementsDataProps) => {


    const dispatch = useAppDispatch();
    //    const { currentTarget } = useAppSelector((store: RootState) => store.multiReducers.localDataReducer);

    //     const removeElement = (item: any) => {
    //         dispatch({ type: "CURRENT_TARGET", payload: item });
    //     }

    return (
        <>
            {elementsData !== undefined ?
                <RestrictBox key={elementsData.id} restWidth={elementsData.restWidth} restDepth={elementsData.restDepth}>
                    <DimensionsBoxLines />
                    <DimensionsBoxNames>
                        <DimensionText>{elementsData.restWidth}</DimensionText>
                    </DimensionsBoxNames>
                    <CrossLine />
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
        border:2px solid #00d624;
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
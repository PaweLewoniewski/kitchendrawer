import styled from "styled-components";
import { CurrentTarget } from "../store/types";

interface PlaygroundTargetProps {
    targetProp: CurrentTarget;
}

const PlaygroundTarget = ({targetProp}:PlaygroundTargetProps) => {
    return (
        <InfoBox>{targetProp.name === 'topCabinDim' ? 'Top Cabins' : 'Bottom Cabins'} | width:{targetProp.cabinWidth} | depth:{targetProp.cabinDepth}</InfoBox>
    );
};
export default PlaygroundTarget;

const InfoBox = styled.p`
    display:flex;
    flex-direction:column;
    width:100%;
    height:100%;
    padding:0 25px;
    margin:0;
    font-size:16px;
    color:black;
    border-bottom:1px dotted black;
`;
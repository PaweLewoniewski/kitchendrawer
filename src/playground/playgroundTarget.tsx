import styled from "styled-components";
import { Cabinets, CornerCabinets, CurrentTarget, Restrictions } from "../store/types";

interface PlaygroundTargetProps {
    targetProp: CurrentTarget & Restrictions & CornerCabinets & Cabinets;
}

const PlaygroundTarget = ({targetProp}:PlaygroundTargetProps) => {
    console.log(targetProp)

    // const targetPanelDisplay = (cabin: string) => {
    //     switch (cabin) {
    //         case 'cabinets':
    //             return <InfoBox>{targetProp.name} | width:{targetProp.cabinWidth} | depth:{targetProp.cabinDepth}</InfoBox>;
    //         default:
    //             return <RoomWallsPanel />;
    //     }
    // }
    return (
        <InfoBox>{targetProp.name} | width:{targetProp.cabinWidth} | depth:{targetProp.cabinDepth}</InfoBox>
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
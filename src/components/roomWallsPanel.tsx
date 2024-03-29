import { useState } from "react";
import styled from "styled-components";
import SingleBtn from "../assets/SingleBtn/SingleBtn";
import SingleNumberField from "../assets/SingleNumberFiled/SingleNumberFiled";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/reducer";
import { ADD, CM, DEPTH, WALL_DISTANCE, WIDTH } from "../data/dictionary";

const RoomWallsPanel = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [widthPlayground, setWidthPlayground] = useState<number | undefined>();
    const [depthPlayground, setDepthPlayground] = useState<number | undefined>();
    const [wallDistance, setWallDistance] = useState<number | undefined>(0);
    const localData: string | null = localStorage.getItem("kitchenData");

    const setUpRoomPlayground = () => {
        if (localData === null) {
        const data = [{roomDimension:{roomWidth: widthPlayground, roomDepth: depthPlayground, distance:wallDistance }}]
        localStorage.setItem("kitchenData", JSON.stringify(data));
        dispatch({ type: "ROOM_DIMENSIONS", payload: data });
        navigate('/bottomCabinets');
        }
        else return console.log('clear room !')
    }

    return (
        <Contener>
            <FiledBox>
                <SingleNumberField text={CM} placeholder={WIDTH} onChange={(e: any) => { setWidthPlayground(e.target.value) }} />
                <SingleNumberField text={CM} placeholder={DEPTH} onChange={(e: any) => { setDepthPlayground(e.target.value) }} />
                <SingleNumberField text={CM} placeholder={WALL_DISTANCE} onChange={(e: any) => { setWallDistance(e.target.value) }} />
            </FiledBox>
            <BtnBoxEnd>
                <SingleBtn btnName={ADD} onClick={setUpRoomPlayground}></SingleBtn>
            </BtnBoxEnd>
        </Contener>
    );
};
export default RoomWallsPanel;

const Contener = styled.div`
    padding:10px;
`;

const FiledBox = styled.div`
  display: flex;
  width:100%;
  flex-direction:column;
  flex-wrap:wrap;
`;

const BtnBoxEnd = styled.div`
  display: flex;
  width:100%;
  justify-content:flex-end;
`;









import { useState } from "react";
import styled from "styled-components";
import SingleBtn from "../assets/SingleBtn/SingleBtn";
import SingleNumberField from "../assets/SingleNumberFiled/SingleNumberFiled";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/reducer";

const RoomWallsPanel = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [widthPlayground, setWidthPlayground] = useState<number | undefined>();
    const [depthPlayground, setDepthPlayground] = useState<number | undefined>();

    const setUpRoomPlayground = () => {
        const data = [{'roomWidth': widthPlayground,'roomDepth': depthPlayground}]
        localStorage.setItem("roomDim", JSON.stringify(data));
        dispatch({ type: "ROOM_DIMENSIONS", payload: data });
        navigate('/bottomCabinets');
    }

    return (
        <Contener>
            <FiledBox>
                <SingleNumberField text={"mm"} placeholder={'Width'} onChange={(e: any) => { setWidthPlayground(e.target.value) }} />
                <SingleNumberField text={"mm"} placeholder={'Depth'} onChange={(e: any) => { setDepthPlayground(e.target.value) }} />
            </FiledBox>
            <BtnBoxEnd>
                <SingleBtn btnName={"Add"} onClick={setUpRoomPlayground}></SingleBtn>
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









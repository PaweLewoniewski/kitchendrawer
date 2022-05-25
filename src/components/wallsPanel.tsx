import { useEffect,  useState } from "react";
import styled from "styled-components";
import SingleBtn from "../assets/SingleBtn/SingleBtn";
import SingleNumberField from "../assets/SingleNumberFiled/SingleNumberFiled";
import { RoomData } from "../types/types";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/reducer";
// import { useAppDispatch, useAppSelector } from "../store/reducer";

const WallsPanel = () => {
    const navigate = useNavigate();
    let localData: string | null = localStorage.getItem("data");
    const [loadData, setLoadData] = useState<RoomData>();
    const [widthPlayground, setWidthPlayground] = useState<number | undefined>(loadData?.roomWidth);
    const [depthPlayground, setDepthPlayground] = useState<number | undefined>(loadData?.roomDepth);
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        if (localData !== null && loadData === undefined) {
            setLoadData(JSON.parse(localData))
        }
    }, [loadData, localData]);

    const setUpRoomPlayground = () => {
        const data = [{'roomWidth': widthPlayground,'roomDepth': depthPlayground}]
        localStorage.setItem("data", JSON.stringify(data));
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
export default WallsPanel;

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









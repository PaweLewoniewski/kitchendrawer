import styled from "styled-components";
import SingleBtn from "../assets/SingleBtn/SingleBtn";
import SingleNumberField from "../assets/SingleNumberFiled/SingleNumberFiled";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/reducer";
import { useState } from "react";


const ConstructionRestrictionPanel = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [widthRestrict, setWidthRestrict] = useState<number | undefined>();
    const [depthRestrict, setDepthRestrict] = useState<number | undefined>();
 
    const addRoomRestrictions = () => {
        const localData: string | null = localStorage.getItem("kitchenData");
        const hashgen: string = Math.random().toString(36).slice(2, 7);
        if (localData !== null) {
            const data = [{'restrictions':{ 'id': hashgen, 'restWidth': widthRestrict, 'restDepth': depthRestrict, 'name': 'restrictions', 'xAxis': 0, 'yAxis': 0, }}];
            const summData = localData ? JSON.parse(localData) : [];
            const summaringData = [...summData, ...data];
            localStorage.setItem("kitchenData", JSON.stringify(summaringData));
            dispatch({ type: "ROOM_DIMENSIONS", payload: summaringData });
            navigate('/preview');
        }
        else
       return console.log('setup room');
    }

    return (
        <Contener>
            <FiledBox>
                <SingleNumberField text={"mm"} placeholder={'Width'} onChange={(e: any) => { setWidthRestrict(e.target.value) }} />
                <SingleNumberField text={"mm"} placeholder={'Depth'} onChange={(e: any) => { setDepthRestrict(e.target.value) }} />
            </FiledBox>
            <BtnBoxEnd>
                <SingleBtn btnName={"Add"} onClick={addRoomRestrictions}></SingleBtn>
            </BtnBoxEnd>
        </Contener>
    );
};
export default ConstructionRestrictionPanel;

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






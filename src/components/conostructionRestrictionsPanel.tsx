import styled from "styled-components";
import SingleBtn from "../assets/SingleBtn/SingleBtn";
import { AiOutlineBorderOuter } from 'react-icons/ai';
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
        const data = [{'restWidth': widthRestrict,'restDepth': depthRestrict}]
        localStorage.setItem("data", JSON.stringify(data));
        dispatch({ type: "ROOM_DIMENSIONS", payload: data });
        navigate('/bottomCabinets');
    }

    return (
        <Contener>
            <FiledBox>
                <SingleBtn btnName={""}><AiOutlineBorderOuter size={25} className='turnLeft' /></SingleBtn>
                <SingleNumberField text={"mm"} placeholder={'Width'} onChange={(e: any) => { setWidthRestrict(e.target.value) }}/>
                <SingleNumberField text={"mm"} placeholder={'Depth'} onChange={(e: any) => { setDepthRestrict(e.target.value) }}/>
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






import styled from "styled-components";
import SingleBtn from "../assets/SingleBtn/SingleBtn";
import { AiOutlineBorderBottom } from 'react-icons/ai';
import SingleNumberField from "../assets/SingleNumberFiled/SingleNumberFiled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/reducer";
import ActionBtnSmall from "../assets/ActionBtnSmall/ActionBtnSmall";

const CabinetsPanel = () => {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [widthCabin, setWidthCabin] = useState<number | undefined>();
  const [depthCabin, setDepthCabin] = useState<number | undefined>();
  const [topbotSwapper, settopbotSwapper] = useState<boolean>(true); // top - false | bot = true
  const [cabinRotate, setCabinRotate] = useState<boolean | null>(null); /// false - lewa | null - prosto | true - prawa

  const addRoomCabins = () => {
    if (topbotSwapper === true) {
      const localData: string | null = localStorage.getItem("roomDim");
      const bottomCabinlocalData: string | null = localStorage.getItem("botCabinDim");
      if (localData !== null) {
        const data = [{ 'cabinWidth': widthCabin, 'cabinDepth': depthCabin }];
        const summData = bottomCabinlocalData ? JSON.parse(bottomCabinlocalData) : [];
        summData.push(...data);
        localStorage.setItem("botCabinDim", JSON.stringify(summData));
        dispatch({ type: "ADD_BOTTOM_CABIN", payload: summData });
        navigate('/bottomCabinets');
      }
    }
    else {
      const localData: string | null = localStorage.getItem("roomDim");
      const topCabinlocalData: string | null = localStorage.getItem("topCabinDim");
      if (localData !== null) {
        const data = [{ 'cabinWidth': widthCabin, 'cabinDepth': depthCabin }];
        const summData = topCabinlocalData ? JSON.parse(topCabinlocalData) : [];
        summData.push(...data);
        localStorage.setItem("topCabinDim", JSON.stringify(summData));
        dispatch({ type: "ADD_TOP_CABIN", payload: summData });
        navigate('/topCabinets');
      }
    }
  }

  return (
    <>
      <ActionBtnsWidth>
        <ActionBtnSmall btnName={'Top'} onClick={() => settopbotSwapper(false)} />
        <ActionBtnSmall btnName={'Bottom'} onClick={() => settopbotSwapper(true)} />
      </ActionBtnsWidth>
      <Contener>
        <BtnBox>
          <SingleBtn btnName={""}><AiOutlineBorderBottom size={25} className='turnLeft' onClick={() => setCabinRotate(false)} /></SingleBtn>
          <SingleBtn btnName={""}><AiOutlineBorderBottom size={25} onClick={() => setCabinRotate(null)} /></SingleBtn>
          <SingleBtn btnName={""}><AiOutlineBorderBottom size={25} className='turnRight' onClick={() => setCabinRotate(true)} /></SingleBtn>
        </BtnBox>
        <FiledBox>
          <SingleNumberField text={"mm"} placeholder={'Width'} onChange={(e: any) => { setWidthCabin(e.target.value) }} />
          <SingleNumberField text={"mm"} placeholder={'Depth'} onChange={(e: any) => { setDepthCabin(e.target.value) }} />
        </FiledBox>
        <BtnBoxEnd>
          <SingleBtn btnName={"Add"} onClick={addRoomCabins}></SingleBtn>
        </BtnBoxEnd>
      </Contener>
    </>
  );
};
export default CabinetsPanel;

const Contener = styled.div`
padding:10px;
`;

const BtnBox = styled.div`
  display: flex;
  width:100%;
  justify-content:space-around;
  flex-wrap:wrap;
`;

const ActionBtnsWidth = styled.div`
  display: flex;
`;

const BtnBoxEnd = styled.div`
  display: flex;
  width:100%;
  justify-content:flex-end;
`;

const FiledBox = styled.div`
  display: flex;
  width:100%;
    padding:10px;
  flex-direction:column;
  flex-wrap:wrap;
`;









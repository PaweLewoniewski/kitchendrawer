import styled from "styled-components";
import SingleBtn from "../assets/SingleBtn/SingleBtn";
import { AiOutlineBorderBottom } from 'react-icons/ai';
import SingleNumberField from "../assets/SingleNumberFiled/SingleNumberFiled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/reducer";
import ActionBtnSmall from "../assets/ActionBtnSmall/ActionBtnSmall";

const CornerCabinetsPanel = () => {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [widthCabin, setWidthCabin] = useState<number | undefined>();
  const [depthCabin, setDepthCabin] = useState<number | undefined>();
  const [sideCabin, setSideCabin] = useState<number>(0);
  const [active, setActive] = useState<string>('Bottom');


  const addRoomCabins = () => {
    const localData: string | null = localStorage.getItem("kitchenData");
    const hashgen: string = Math.random().toString(36).slice(2, 7);
    
    if (active === 'Bottom') {
      if (localData !== null) {
        const summData = localData ? JSON.parse(localData) : [];
        const data = [{ 'cornersBot': { 'id': hashgen, 'cabinWidth': widthCabin, 'cabinDepth': depthCabin, 'name': 'Bottom corners', 'xAxis': 250, 'yAxis': 150, 'side': sideCabin } }];
        const summaringData = [...summData, ...data];
        localStorage.setItem("kitchenData", JSON.stringify(summaringData.flat()));
        dispatch({ type: "ROOM_DIMENSIONS", payload: summaringData.flat() });
        navigate('/preview');
      }
    }
    if (active === 'Top') {
      if (localData !== null) {
        const summData = localData ? JSON.parse(localData) : [];
        const data = [{ 'cornersTop': { 'id': hashgen, 'cabinWidth': widthCabin, 'cabinDepth': depthCabin, 'name': 'Top corners', 'xAxis': 250, 'yAxis': 150, 'side': sideCabin } }];
        const summaringData = [...summData, ...data];
        localStorage.setItem("kitchenData", JSON.stringify(summaringData.flat()));
        dispatch({ type: "ROOM_DIMENSIONS", payload: summaringData.flat() });
        navigate('/preview');
      }
    }
  }

  return (
    <>
      <ActionBtnsWidth>
        <ActionBtnSmall onClick={() => setActive('Top')} className={active === 'Top' ? 'activeTab' : ''} btnName={'Top'} />
        <ActionBtnSmall onClick={() => setActive('Bottom')} className={active === 'Bottom' ? 'activeTab' : ''} btnName={'Bottom'} />
      </ActionBtnsWidth>
      <Contener>
        <BtnBox>
          <SingleBtn onClick={() => { setSideCabin(0) }} className={sideCabin === 0 ? 'activeTab' : ''} btnName={""}>
            <AiOutlineBorderBottom size={25} className='turnLeft' />
          </SingleBtn>
          <SingleBtn onClick={() => { setSideCabin(1) }} className={sideCabin === 1 ? 'activeTab' : ''} btnName={""}>
            <AiOutlineBorderBottom size={25} className='turnRight' />
          </SingleBtn>
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
export default CornerCabinetsPanel;

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






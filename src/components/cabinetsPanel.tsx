import styled from "styled-components";
import SingleBtn from "../assets/SingleBtn/SingleBtn";
import { AiOutlineBorderBottom } from 'react-icons/ai';
import SingleNumberField from "../assets/SingleNumberFiled/SingleNumberFiled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/reducer";
import ActionBtnSmall from "../assets/ActionBtnSmall/ActionBtnSmall";
import Checkbox from "../assets/CheckBox/Checkbox";
import SelectBtn from "../assets/SelectBtn/SelectBtn";

const CabinetsPanel = () => {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [widthCabin, setWidthCabin] = useState<number | undefined>();
  const [depthCabin, setDepthCabin] = useState<number | undefined>();
  const [sideCabin, setSideCabin] = useState<number>(0);
  const [active, setActive] = useState<string>('Bottom');
  const [activeSide, setActiveSide] = useState<string>('Stright');
  const [img, setImg] = useState<string>('');

  const cabinsOption = [{id:1, name:'Normal', val:''},{ id:2, name:'Stove',val:'Stove'},{ id:3, name:'Sink',val:'Sink'}];

  const addRoomCabins = () => {
    const localData: string | null = localStorage.getItem("kitchenData");
    const hashgen: string = Math.random().toString(36).slice(2, 7);
    if (active === 'Bottom') {
      if (localData !== null) {
        const summData = localData ? JSON.parse(localData) : [];
        const data = [{ 'botCabinets': { 'id': hashgen, 'cabinWidth': widthCabin, 'cabinDepth': depthCabin, 'name': 'botCabinDim', 'xAxis': 250, 'yAxis': 150, 'side': sideCabin, 'image': img } }];
        const summaringData = [...summData, ...data];
        localStorage.setItem("kitchenData", JSON.stringify(summaringData.flat()));
        dispatch({ type: "ROOM_DIMENSIONS", payload: summaringData.flat() });
        navigate('/preview');
      }
    }
    if (active === 'Top') {
      if (localData !== null) {
        const summData = localData ? JSON.parse(localData) : [];
        const data = [{ 'topCabinets': { 'id': hashgen, 'cabinWidth': widthCabin, 'cabinDepth': depthCabin, 'name': 'topCabinDim', 'xAxis': 250, 'yAxis': 150, 'side': sideCabin } }];
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
          <SingleBtn onClick={() => { setSideCabin(-0.25); setActiveSide('LeftSide') }} className={activeSide === 'LeftSide' ? 'activeTab' : ''} btnName={""}>
            <AiOutlineBorderBottom size={25} className='turnLeft' />
          </SingleBtn>
          <SingleBtn onClick={() => { setSideCabin(0); setActiveSide('Stright') }} className={activeSide === 'Stright' ? 'activeTab' : ''} btnName={""}>
            <AiOutlineBorderBottom size={25} />
          </SingleBtn>
          <SingleBtn onClick={() => { setSideCabin(0.25); setActiveSide('RightSide') }} className={activeSide === 'RightSide' ? 'activeTab' : ''} btnName={""}>
            <AiOutlineBorderBottom size={25} className='turnRight' />
          </SingleBtn>
        </BtnBox>
        <FiledBox>
          <SingleNumberField text={"mm"} placeholder={'Width'} onChange={(e: any) => { setWidthCabin(e.target.value) }} />
          <SingleNumberField text={"mm"} placeholder={'Depth'} onChange={(e: any) => { setDepthCabin(e.target.value) }} />
        </FiledBox>
        <ActionBtnsWidth>
          <SelectBtn selectOptions={cabinsOption} text={'Accessories'} onChange={(e:any) => setImg(e.target.value)}/>
        </ActionBtnsWidth>
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
  padding:20px 0;
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






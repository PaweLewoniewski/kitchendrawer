import styled from "styled-components";
import SingleBtn from "../assets/SingleBtn/SingleBtn";
import { AiOutlineBorderBottom } from 'react-icons/ai';
import SingleNumberField from "../assets/SingleNumberFiled/SingleNumberFiled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/reducer";
import ActionBtnSmall from "../assets/ActionBtnSmall/ActionBtnSmall";

const CabinetsPanel = () => {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [widthCabin, setWidthCabin] = useState<number | undefined>();
  const [depthCabin, setDepthCabin] = useState<number | undefined>();
  const [idIterator, setIdIterator] = useState<number>(1);
  const [active, setActive] = useState<string>('Bottom');


  const addRoomCabins = () => {
    setIdIterator(idIterator + 1)
    const localData: string | null = localStorage.getItem("kitchenData");
    if (active === 'Bottom') {
      if (localData !== null) {
        const data = [{ botCabinets: { 'id': idIterator, 'cabinWidth': widthCabin, 'cabinDepth': depthCabin, 'name': 'botCabinDim' } }];
        const summData = localData ? JSON.parse(localData) : [];
        const summaringData = [...summData, ...data];
        localStorage.setItem("kitchenData", JSON.stringify(summaringData));
        dispatch({ type: "ROOM_DIMENSIONS", payload: summaringData });
        navigate('/bottomCabinets');
      }
    }
    if (active === 'Top') {
      if (localData !== null) {
        const data = [{ topCabinets: { 'id': idIterator, 'cabinWidth': widthCabin, 'cabinDepth': depthCabin, 'name': 'topCabinDim' } }];
        const summData = localData ? JSON.parse(localData) : [];
        const summaringData = [...summData, ...data];
        localStorage.setItem("kitchenData", JSON.stringify(summaringData));
        dispatch({ type: "ROOM_DIMENSIONS", payload: summaringData });
        navigate('/bottomCabinets');
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
          <SingleBtn btnName={""}><AiOutlineBorderBottom size={25} className='turnLeft' /></SingleBtn>
          <SingleBtn btnName={""}><AiOutlineBorderBottom size={25} /></SingleBtn>
          <SingleBtn btnName={""}><AiOutlineBorderBottom size={25} className='turnRight' /></SingleBtn>
        </BtnBox>
        <FiledBox>
          <SingleNumberField text={"mm"} placeholder={'Width'} onChange={(e: any) => { setWidthCabin(e.target.value) }} />
          <SingleNumberField text={"mm"} placeholder={'Depth'} onChange={(e: any) => { setDepthCabin(e.target.value) }} />
        </FiledBox>
        <BtnBoxEnd>
          {/* <SingleBtn danger={'danger'} btnName={"Remove"} onClick={removeTarget} /> */}
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


  // const { id, name } = currentTarget;

  // const removeTarget = () => {
  //   if (name === 'botCabinDim') {
  //     const removelement = botCabinets.filter((i: any) => i.id !== id);
  //     localStorage.setItem(name, JSON.stringify(removelement));
  //     dispatch({ type: "BOTTOM_CABIN", payload: removelement });
  //   }
  //   if (name === 'topCabinDim') {
  //     const removelement = topCabinets.filter((i: any) => i.id !== id);
  //     localStorage.setItem(name, JSON.stringify(removelement));
  //     dispatch({ type: "TOP_CABIN", payload: removelement });
  //   }
  // }






import styled from "styled-components";
import SingleBtn from "../assets/SingleBtn/SingleBtn";
import { AiOutlineBorderBottom } from 'react-icons/ai';
import SingleNumberField from "../assets/SingleNumberFiled/SingleNumberFiled";

const CabinetsPanel = () => {
    return (
        <Contener>
            <BtnBox>
                <SingleBtn btnName={""}><AiOutlineBorderBottom size={25} className='turnLeft' /></SingleBtn>
                <SingleBtn btnName={""}><AiOutlineBorderBottom size={25} /></SingleBtn>
                <SingleBtn btnName={""}><AiOutlineBorderBottom size={25} className='turnRight' /></SingleBtn>
            </BtnBox>
            <FiledBox>
                <SingleNumberField text={"mm"} placeholder={'Width'} />
                <SingleNumberField text={"mm"} placeholder={'Depth'} />
            </FiledBox>
            <BtnBoxEnd>
                <SingleBtn btnName={"Add"}></SingleBtn>
            </BtnBoxEnd>
        </Contener>
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









import styled from "styled-components";
import SingleBtn from "../assets/SingleBtn/SingleBtn";
import { AiOutlineBorderBottom } from 'react-icons/ai';
import SingleNumberField from "../assets/SingleNumberFiled/SingleNumberFiled";

const CabinetsPanel = () => {
    return (
        <Contener>
            <SingleBtn btnName={""}><AiOutlineBorderBottom size={25} className='turnLeft' /></SingleBtn>
            <SingleBtn btnName={""}><AiOutlineBorderBottom size={25} /></SingleBtn>
            <SingleBtn btnName={""}><AiOutlineBorderBottom size={25} className='turnRight' /></SingleBtn>
            <SingleNumberField text={"mm"} placeholder={'Width'} />
            <SingleNumberField text={"mm"} placeholder={'Depth'} />
        </Contener>
    );
};
export default CabinetsPanel;

const Contener = styled.div`
  display: flex;
  width:100%;
  justify-content:space-around;
  flex-wrap:wrap ;
`;









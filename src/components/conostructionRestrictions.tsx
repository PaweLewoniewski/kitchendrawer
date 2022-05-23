import styled from "styled-components";
import SingleBtn from "../assets/SingleBtn/SingleBtn";
import { AiOutlineBorderBottom } from 'react-icons/ai';
import SingleNumberField from "../assets/SingleNumberFiled/SingleNumberFiled";

const ConstructionRestriction = () => {
    return (
        <Contener>
            <SingleBtn btnName={""}><AiOutlineBorderBottom size={25} className='turnLeft' /></SingleBtn>
            <SingleNumberField text={"mm"} placeholder={'Width'} />
            <SingleNumberField text={"mm"} placeholder={'Depth'} />
        </Contener>
    );
};
export default ConstructionRestriction;

const Contener = styled.div`
  display: flex;
  width:100%;
  justify-content:space-around;
  flex-wrap:wrap ;
`;









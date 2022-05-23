import styled from "styled-components";
import SingleBtn from "../assets/SingleBtn/SingleBtn";
import { AiOutlineBorderOuter } from 'react-icons/ai';
import SingleNumberField from "../assets/SingleNumberFiled/SingleNumberFiled";

const ConstructionRestriction = () => {
    return (
        <Contener>
            <FiledBox>
                <SingleBtn btnName={""}><AiOutlineBorderOuter size={25} className='turnLeft' /></SingleBtn>
                <SingleNumberField text={"mm"} placeholder={'Width'} />
                <SingleNumberField text={"mm"} placeholder={'Depth'} />
            </FiledBox>
            <BtnBoxEnd>
                <SingleBtn btnName={"Add"}></SingleBtn>
            </BtnBoxEnd>
        </Contener>
    );
};
export default ConstructionRestriction;

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






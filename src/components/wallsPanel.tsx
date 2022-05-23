import styled from "styled-components";
import SingleBtn from "../assets/SingleBtn/SingleBtn";
import SingleNumberField from "../assets/SingleNumberFiled/SingleNumberFiled";

const WallsPanel = () => {
    return (
        <Contener>
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
export default WallsPanel;

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









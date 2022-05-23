import styled from "styled-components";
import SingleNumberField from "../assets/SingleNumberFiled/SingleNumberFiled";

const WallsPanel = () => {
    return (
        <Contener>
            <SingleNumberField text={"mm"} placeholder={'Width'}/>
            <SingleNumberField text={"mm"} placeholder={'Depth'} />
        </Contener>
    );
};
export default WallsPanel;

const Contener = styled.div`
  display: flex;
  width:100%;
  justify-content:space-around;
  flex-wrap:wrap ;
`;









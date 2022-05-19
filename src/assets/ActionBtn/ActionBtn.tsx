import styled from "styled-components";

interface ActionBtnProps {
    btnName: string;
}

const ActionBtn = ({ btnName }: ActionBtnProps) => {
    return (
        <Contener>
            <Btn>{btnName}</Btn>
        </Contener>
    );
};
export default ActionBtn;

const Contener = styled.div`
  display: flex;
  width:100%;
`;

const Btn = styled.button`
  border:1px solid white;
  color:white;
  background:none;
  cursor: pointer;
  width:100%;
`;








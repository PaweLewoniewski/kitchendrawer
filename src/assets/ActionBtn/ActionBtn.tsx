import styled from "styled-components";

interface ActionBtnProps {
    btnName: string;
    onClick?:() => void;
}

const ActionBtn = ({ btnName, onClick }: ActionBtnProps) => {
    return (
        <Contener>
            <Btn onClick={onClick} >{btnName}</Btn>
        </Contener>
    );
};
export default ActionBtn;

const Contener = styled.div`
  display: flex;
  width:100%;
`;

const Btn = styled.button`
  border:none;
  border-bottom:1px dotted #06151f;
  color:#06151f;
  background:none;
  cursor: pointer;
  width:100%;
  padding:10px;
  transition:0.3s ease-in-out;
  font-family: 'Josefin Sans', sans-serif;
  background:#3abfa5;
  &:hover{
    border-bottom:1px solid #06151f;
    transition:0.3s ease-in-out;
    background:#B0FFEE;
  }
  &:active{
    border-bottom:1px solid #06151f;
    transition:0.3s ease-in-out;
    background:#B0FFEE;
  }
`;








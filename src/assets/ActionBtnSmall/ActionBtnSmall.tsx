import styled from "styled-components";

interface ActionBtnSmallProps {
    btnName: string;
    onClick?:() => void;
    className:any;
}

const ActionBtnSmall = ({ btnName, onClick, className }: ActionBtnSmallProps) => {
    return (
        <Contener >
            <Btn className={className} onClick={onClick} >{btnName}</Btn>
        </Contener>
    );
};
export default ActionBtnSmall;

const Contener = styled.div`
  display: flex;
  width:100%;
`;

const Btn = styled.button`
  border:none;
  border-bottom:1px dotted #06151f;
  border-top:1px dotted #06151f;
  color:#06151f;
  background:none;
  cursor: pointer;
  width:100%;
  padding:10px;
  transition:0.3s ease-in-out;
  font-family: 'Josefin Sans', sans-serif;
  background:#3abfa5;
  margin:5px;
  &:hover{
    border-bottom:1px solid #06151f;
    transition:0.3s ease-in-out;
    background:#ffcc00;
  }
  &:active{
    border-bottom:1px solid #06151f;
    transition:0.3s ease-in-out;
    background:#ffcc00;
  }
`;








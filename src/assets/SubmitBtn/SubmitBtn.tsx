import styled from "styled-components";

interface SubmitBtnProps {
    onClick?: ()=> void;
}

const SubmitBtn = ({ onClick }: SubmitBtnProps) => {
    return (
        <Contener>
            <Btn type="submit" onClick={onClick} value="Submit"></Btn>
        </Contener>
    );
};
export default SubmitBtn;

const Contener = styled.div`
  display: flex;
`;

const Btn = styled.input`
  border:none;
  border-bottom:1px dotted #06151f;
  color:#06151f;
  background:none;
  cursor: pointer;
  padding:10px 15px 10px 15px;
  transition:0.3s ease-in-out;
  font-family: 'Josefin Sans', sans-serif;
  background:#3abfa5;
  margin:5px 2px;
  &:hover{
    border-bottom:1px solid #06151f;
    transition:0.3s ease-in-out;
    background:#B0FFEE;
  }
`;








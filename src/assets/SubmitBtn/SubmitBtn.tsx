import styled from "styled-components";

interface SubmitBtnProps {
    btnName: string;
    onClick?: ()=> void;
}

const SubmitBtn = ({ btnName, onClick }: SubmitBtnProps) => {
    return (
        <Contener>
            <Btn onClick={onClick}>{btnName}</Btn>
        </Contener>
    );
};
export default SubmitBtn;

const Contener = styled.div`
  display: flex;
  max-width:250px;
`;

const Btn = styled.button`
  border:1px solid white;
  color:white;
  padding:7px 15px 7px 15px;
  border-radius: 25px;
  background:none;
  cursor: pointer;
  width:100%;
`;








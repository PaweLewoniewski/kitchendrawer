import styled from "styled-components";

interface SingleBtnProps {
    btnName: string;
    children: any;
}

const SingleBtn = ({ btnName, children }: SingleBtnProps) => {
    return (
        <Contener>
            <Btn>{btnName ? btnName : children}</Btn>
        </Contener>
    );
};
export default SingleBtn;

const Contener = styled.div`
  display: flex;
`;

const Btn = styled.button`
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








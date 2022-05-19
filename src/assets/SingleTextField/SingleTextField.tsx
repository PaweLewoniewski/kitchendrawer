import styled from "styled-components";

interface SingleTextFieldProps {
    text?: string;
}

const SingleTextField = ({ text }: SingleTextFieldProps) => {
    return (
        <Contener>
            <ContenerBox>
                <CheckBox><Name><label htmlFor={text}>{text}</label></Name><input type="text" id={text} name={text}></input>
                </CheckBox>
                <Line></Line>
            </ContenerBox>
        </Contener>
    );
};
export default SingleTextField;

const Contener = styled.div`
  display: flex;
  /* width: 250px; */
  flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5px;
`;

const ContenerBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const CheckBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  padding:5px 10px 0px 0px;
  user-select:none;
  margin: 6px;
  input {
      margin:0px 10px;
      padding:0;
      background:none;
      outline:none;
      border:none;
      font-size:16px;
  }
`;

const Name = styled.h3`
  font-size: 16px;
  font-weight: 500;
  padding:0;
  margin:0;
`;

const Line = styled.div`
  height:1px;
  width: 100%;
  background: black;
`;

import styled from "styled-components";

interface SingleNumberFieldProps {
    text?: string;
    placeholder?:string;
}

const SingleNumberField = ({ text, placeholder }: SingleNumberFieldProps) => {
    return (
        <ContenerBox>
            <CheckBox>
                <input type="number" id={text} name={text} placeholder={placeholder}></input>
                <Name>
                    <label htmlFor={text}>{text}</label>
                </Name>
            </CheckBox>
            <Line></Line>
        </ContenerBox>
    );
};
export default SingleNumberField;

const ContenerBox = styled.div`
  display: flex;
  flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width:80px;
`;

const CheckBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  user-select:none;
  margin: 6px;
  width:80px;
  input {
      padding:0;
      background:none;
      outline:none;
      border:none;
      font-size:18px;
      width:80px;
      font-family: 'Josefin Sans', sans-serif;
  }
  input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none; 
}
`;

const Name = styled.p`
  font-size: 20px;
  font-weight: 500;
  padding:0;
  margin:0;
  font-family: 'Josefin Sans', sans-serif;
  color:#06151f;
  width:80px;
`;

const Line = styled.div`
  height:2px;
  width: 100%;
  background: #06151f;
`;


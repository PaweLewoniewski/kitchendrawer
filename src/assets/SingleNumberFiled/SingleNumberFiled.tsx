import styled from "styled-components";

interface SingleNumberFieldProps {
    text?: string;
    placeholder?:string;
    onChange?: (e:any)=> void;
    value?:number;
}

const SingleNumberField = ({ text, placeholder, onChange, value }: SingleNumberFieldProps) => {
    return (
        <ContenerBox>
            <CheckBox>
                <input onChange={onChange} type="number" id={text} placeholder={placeholder} value={value}></input>
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
  margin: 1px;
  width:80px;
  input {
      padding:6px 0;
      background:none;
      outline:none;
      border:none;
      font-size:18px;
      width:80px;
      font-family: 'Josefin Sans', sans-serif;
      &:focus{
        background:#ffcc00;
      }
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


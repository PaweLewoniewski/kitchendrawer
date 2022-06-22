import styled from "styled-components";

interface CheckboxProps {
    text?: string;
    onChange?:()=> void;
    checked?:string;
}

const Checkbox = ({ text, onChange, checked }: CheckboxProps) => {
    return (
        <Contener>
            <ContenerBox>
                <CheckBox><input type="checkbox" id={text} name={text} onChange={onChange}></input>
                    <Name><label htmlFor={text}>{text}</label></Name>
                </CheckBox>
                <Line></Line>
            </ContenerBox>
        </Contener>
    );
};
export default Checkbox;

const Contener = styled.div`
  display: flex;
  /* width: 250px; */
  flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ContenerBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const CheckBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding:5px 10px 0px 0px;
  user-select:none;
  margin: 5px;
  input {
      margin:5px;
      padding:0;
  }
`;

const Name = styled.h3`
  font-size: 16px;
  width: 100%;
  font-weight: 500;
  padding:0;
  margin:0;
`;

const Line = styled.div`
  height:1px;
  width: 100%;
  background: black;
`;

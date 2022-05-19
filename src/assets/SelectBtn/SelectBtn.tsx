import styled from "styled-components";

interface SelectBtnProps {
    text?: string;
    selectOptions: any[];
}

type SelectBtnData = {
  id:number;
  wearSize:string;
}

const SelectBtn = ({ text, selectOptions }: SelectBtnProps) => {
    return (
        <Contener>
            <ContenerBox>
                <CheckBox><Name><label htmlFor={text}>{text}</label></Name><Select name={text} id={text}>
                    <Option value="">Choose {text}</Option>
                    {selectOptions.map((item: SelectBtnData) => (
                        <Option value={item.id}>{item.wearSize}</Option>
                    ))}
                </Select>
                </CheckBox>
                <Line></Line>
            </ContenerBox>
        </Contener>
    );
};
export default SelectBtn;

const Contener = styled.div`
  display: flex;
  flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5px;
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
  margin: 6px;
  input {
      margin:0px;
      padding:0;
      background:none;
      outline:none;
      border:none;
      font-size:16px;
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

const Select = styled.select`
 background:none;
 border:none;
 outline:none;
`;

const Option = styled.option`

`;

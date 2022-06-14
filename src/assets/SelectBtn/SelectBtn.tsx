import styled from "styled-components";

interface SelectBtnProps {
    text?: string;
    selectOptions: any[];
    onChange?: (e:any)=> void;
}

type SelectBtnData = {
  id:number;
  name:string;
  val:string;
}

const SelectBtn = ({ text, selectOptions, onChange }: SelectBtnProps) => {
    return (
        <Contener>
            <ContenerBox>
                <CheckBox><Name><label htmlFor={text}>{text}</label></Name>
                <Select name={text} id={text} onChange={onChange}>
                    {/* <Option value="">Choose {text}</Option> */}
                    {selectOptions.map((item: SelectBtnData) => (
                        <Option key={item.id} value={item.val}>{item.name}</Option>
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
    margin: 5px 10px;
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
  /* padding:5px 10px 0px 0px; */
  user-select:none;
  margin: 0 6px;
  font-family: 'Josefin Sans', sans-serif;
  input {
      margin:0px;
      padding:0;
      background:none;
      outline:none;
      border:none;
      font-size:18px;
      font-family: 'Josefin Sans', sans-serif;
  }
`;

const Name = styled.h3`
  font-size: 18px;
  width: 100%;
  font-weight: 500;
  padding:0;
  margin:0;
  font-family: 'Josefin Sans', sans-serif;
`;

const Line = styled.div`
  height:2px;
  width: 100%;
  background: black;
`;

const Select = styled.select`
  font-size: 18px;
 background:none;
 border:none;
 outline:none;
`;

const Option = styled.option`
  font-weight: 500;
  font-size: 18px;
  font-family: 'Josefin Sans', sans-serif;
`;

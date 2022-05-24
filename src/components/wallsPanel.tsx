import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import SingleBtn from "../assets/SingleBtn/SingleBtn";
import SingleNumberField from "../assets/SingleNumberFiled/SingleNumberFiled";
import { RoomData } from "../types/types";

const WallsPanel = () => {
    const navigate = useNavigate();
    const state = useLocation().state as RoomData;
    const width = state && state.width;
    const depth = state && state.depth;

    const [widthPlayground, setWidthPlayground] = useState<number>(width);
    const [heightPlayground, setHeightPlayground] = useState<number>(depth);

    const setUpRoomPlayground = () => {
        navigate('/preview',
            {
                state: {
                    width: widthPlayground,
                    depth: heightPlayground,
                }
            });
    }
    return (
        <Contener>
            <FiledBox>
                <SingleNumberField value={widthPlayground} text={"mm"} placeholder={'Width'} onChange={(e:any)=> {setWidthPlayground(e.target.value)}} />
                <SingleNumberField value={heightPlayground} text={"mm"} placeholder={'Depth'} onChange={(e:any)=> {setHeightPlayground(e.target.value)}} />
            </FiledBox>
            <BtnBoxEnd>
                <SingleBtn btnName={"Add"} onClick={setUpRoomPlayground}></SingleBtn>
            </BtnBoxEnd>
        </Contener>
    );
};
export default WallsPanel;

const Contener = styled.div`
padding:10px;
`;

const FiledBox = styled.div`
  display: flex;
  width:100%;
  flex-direction:column;
  flex-wrap:wrap;
`;

const BtnBoxEnd = styled.div`
  display: flex;
  width:100%;
  justify-content:flex-end;
`;









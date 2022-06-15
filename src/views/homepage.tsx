import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useSound from 'use-sound';
import styled from "styled-components";
import ActionBtn from '../assets/ActionBtn/ActionBtn';
import SingleBtn from '../assets/SingleBtn/SingleBtn';
import CabinetsPanel from '../components/cabinetsPanel';
import ConstructionRestrictionPanel from '../components/conostructionRestrictionsPanel';
import CornerCabinetsPanel from '../components/cornerCabinPanel';
import RoomWallsPanel from '../components/roomWallsPanel';
import PlaygroundTarget from '../playground/playgroundTarget';
import PreviewView from '../playground/playgroundView';
import { useAppDispatch, useAppSelector } from '../store/reducer';
import { RootState } from '../store/store';
import NavSound from '../assets/sounds/slight_click.wav';

const HomePage = () => {

    const { currentTarget } = useAppSelector((store: RootState) => store.multiReducers.localDataReducer);
    const [panel, setPanel] = useState<string>('walls');
    const [active, setActive] = useState<string>('Walls');
    const dispatch = useAppDispatch();
    const [play] = useSound(NavSound);

    const usePanel = (panel: string) => {
        switch (panel) {
            case 'cabinets':
                return <CabinetsPanel />;
            case 'cornerCabinets':
                return  <CornerCabinetsPanel />;
            case 'restrictions':
                return <ConstructionRestrictionPanel />
            default:
                return <RoomWallsPanel />;
        }
    }

    const clearAllData = () => {
        localStorage.removeItem('kitchenData');
        dispatch({ type: "ROOM_DIMENSIONS", payload: [] });
     }

    return (
        <PageContener>
            <PageName>Homepage</PageName>
            <PlaygroundContener>
                <PlaygroundBoxContener>
                    <PlaygroundTopLine>
                        <PlaygroundNavList>
                            <PlaygroundNavListItem>
                                <NavLink onClick={()=> play()} className={({ isActive }) => isActive ? 'activeTab' : ''} to='/bottomCabinets'>Bottom Cabinets</NavLink>
                            </PlaygroundNavListItem>
                            <PlaygroundNavListItem>
                                <NavLink onClick={()=> play()} className={({ isActive }) => isActive ? 'activeTab' : ''} to='/topCabinets'>Top Cabinets</NavLink>
                            </PlaygroundNavListItem>
                            <PlaygroundNavListItem>
                                <NavLink onClick={()=> play()} className={({ isActive }) => isActive ? 'activeTab' : ''} to='/preview'>Preview</NavLink>
                            </PlaygroundNavListItem>
                        </PlaygroundNavList>
                        <PlaygroundInfoBox>
                            <PlaygroundTarget targetProp={currentTarget} />
                        </PlaygroundInfoBox>
                    </PlaygroundTopLine>
                    <PlaygroundBox>
                        <PreviewView />
                    </PlaygroundBox>
                </PlaygroundBoxContener>
                <PlaygroundActions>
                    <ActionButtonsBox>
                        <ActionBtn active={active} btnName={'Walls'} onClick={() => { setPanel('walls'); setActive('Walls') }} />
                        <ActionBtn active={active} btnName={'Construction restrictions'} onClick={() => { setPanel('restrictions'); setActive('Construction restrictions') }} />
                        <ActionBtn active={active} btnName={'Cabinets'} onClick={() => { setPanel('cabinets'); setActive('Cabinets') }} />
                        <ActionBtn active={active} btnName={'Corner cabinets'} onClick={() => { setPanel('cornerCabinets'); setActive('Corner cabinets') }} />
                    </ActionButtonsBox>
                    <PanelButtonsResults>
                        {usePanel(panel)}
                    </PanelButtonsResults>
                    <ActionButtonsBoxBottom>
                            <SingleBtn danger={'danger'} btnName={"Reset All"} onClick={clearAllData} />
                    </ActionButtonsBoxBottom>
                </PlaygroundActions>
            </PlaygroundContener>
        </PageContener>
    );
};
export default HomePage;

const PageContener = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    height:100%;
    padding:10px;
`;

const PageName = styled.h2`
    padding:0 10px;
    font-size:18px;
    font-weight:300;
    font-family: 'Josefin Sans', sans-serif;
    border-bottom:1px dotted black;
    color:#06151f;
`;

const PlaygroundContener = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    padding:0 0 10px 0;
`;

const PlaygroundNavList = styled.ul`
    display:flex;
    margin:0;
`;

const PlaygroundNavListItem = styled.li`
    display:flex;
    border:1px solid black;
    transition:0.5s ease-in-out;
    font-family: 'Josefin Sans', sans-serif;
    background:#3abfa5;
    &:hover{
        transition:0.3s ease-in-out;
        background:#fff5b2;
        z-index:1;
    }
    &:first-of-type{
        border-top-left-radius:5px; 
    }
    &:last-of-type{
        border-top-right-radius:5px; 
    }
    a{
    text-decoration:none;
    color:#06151f;
    padding:10px;
    border-radius:5px 5px 0 0; 
    }
`;

const PlaygroundTopLine = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
`;

const PlaygroundInfoBox = styled.div`
    display:flex;
    align-items:center;
`;

const PlaygroundBoxContener = styled.div`
    width:77%;
    border-right:1px dotted black;
`;

const PlaygroundBox = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    height:600px;
    margin:0px 10px;
    border:1px solid black;
    border-radius:3px;
    overflow:auto;
    padding:30px;
    position:relative;
    background-color: #e5e5f7;
    background-size: 10px 10px;
    background-image:repeating-linear-gradient(45deg,rgb(43 176 158 / 2%) 0,#25a89b3b 1px,#e5e5f7 0,#e5e5f7 50%);
`;

const PlaygroundActions = styled.div`
    min-width:20%;
    border:1px solid black;
    border-radius:3px;
    margin:0px 10px;
    background:#eefffd;
    position:relative;
`;

const ActionButtonsBox = styled.div`
    width:100%;
`;

const ActionButtonsBoxBottom = styled.div`
    position: absolute;
    bottom:0;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:10px;
`;

const PanelButtonsResults = styled.div`
    width:100%;
`;
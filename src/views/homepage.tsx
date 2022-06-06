import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import ActionBtn from '../assets/ActionBtn/ActionBtn';
import CabinetsPanel from '../components/cabinetsPanel';
import ConstructionRestrictionPanel from '../components/conostructionRestrictionsPanel';
import RoomWallsPanel from '../components/roomWallsPanel';
import PreviewView from '../playground/previewView';

const HomePage = () => {

 //   const { currentTarget }  = useAppSelector((store: RootState) => store.multiReducers.localDataReducer);
    const [panel, setPanel] = useState<string>('walls');
    const [active, setActive] = useState<string>('Walls');

    const usePanel = (panel: string) => {
        switch (panel) {
            case 'cabinets':
                return <CabinetsPanel />;
            case 'restrictions':
                return <ConstructionRestrictionPanel />
            default:
                return <RoomWallsPanel />;
        }
    }

    return (
        <PageContener>
            <PageName>Homepage</PageName>
            <PlaygroundContener>
                <PlaygroundBoxContener>
                    <PlaygroundTopLine>
                        <PlaygroundNavList>
                            <PlaygroundNavListItem>
                                <NavLink className={({ isActive }) => isActive ? 'activeTab' : ''} to='/bottomCabinets'>Bottom Cabinets</NavLink>
                            </PlaygroundNavListItem>
                            <PlaygroundNavListItem>
                                <NavLink className={({ isActive }) => isActive ? 'activeTab' : ''} to='/topCabinets'>Top Cabinets</NavLink>
                            </PlaygroundNavListItem>
                            <PlaygroundNavListItem>
                                <NavLink className={({ isActive }) => isActive ? 'activeTab' : ''} to='/preview'>Preview</NavLink>
                            </PlaygroundNavListItem>
                        </PlaygroundNavList>
                        <PlaygroundInfoBox>
                        {/* <PlaygroundTarget targetProp={currentTarget} /> */}
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
                    </ActionButtonsBox>
                    <PanelButtonsResults>
                        {usePanel(panel)}
                    </PanelButtonsResults>
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
    height:600px;
    margin:0px 10px;
    border:1px solid black;
    border-radius:3px;
    background:#eefffd;
    overflow:auto;
    padding:30px;
    position:relative;
`;

const PlaygroundActions = styled.div`
    min-width:20%;
    border:1px solid black;
    border-radius:3px;
    margin:0px 10px;
    background:#eefffd;
`;

const ActionButtonsBox = styled.div`
    width:100%;
`;

const PanelButtonsResults = styled.div`
    width:100%;
`;
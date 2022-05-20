import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import ActionBtn from '../assets/ActionBtn/ActionBtn';
import ActionResultsBtns from '../components/ActionsResultsBtns';

const HomePage = () => {
    return (
        <PageContener>
            <PageName>Homepage</PageName>
            <PlaygroundContener>
                <PlaygroundBoxContener>
                    <PlaygroundNavList>
                        <PlaygroundNavListItem><NavLink to='/bottomCabinets'>Bottom Cabinets</NavLink></PlaygroundNavListItem>
                        <PlaygroundNavListItem><NavLink to='/topCabinets'>Top Cabinets</NavLink></PlaygroundNavListItem>
                        <PlaygroundNavListItem><NavLink to='/topCabinets'>Preview</NavLink></PlaygroundNavListItem>
                    </PlaygroundNavList>
                    <PlaygroundBox></PlaygroundBox>
                </PlaygroundBoxContener>
                <PlaygroundActions>
                    <ActionButtonsBox>
                        <ActionBtn btnName={'Walls'} />
                        <ActionBtn btnName={'Construction restrictions'} />
                        <ActionBtn btnName={'Cabinets'} />
                    </ActionButtonsBox>
                    <ActionButtonsResults>
                            <ActionResultsBtns />
                    </ActionButtonsResults>
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
    padding:10px;
    border:1px solid black;
    transition:0.5s ease-in-out;
    font-family: 'Josefin Sans', sans-serif;
    background:#3abfa5;
    &:hover{
        transition:0.3s ease-in-out;
        background:#B0FFEE;
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
    }
`;

const PlaygroundBoxContener = styled.div`
    width:100%;
    border-right:1px dotted black;
`;

const PlaygroundBox = styled.div`
    height:600px;
    margin:0px 10px;
    border:1px solid black;
    border-radius:3px;
    background:#eefffd;
`;

const PlaygroundActions = styled.div`
    width:20%;
    border:1px solid black;
    border-radius:3px;
    margin:0px 10px;
    background:#eefffd;
`;

const ActionButtonsBox = styled.div`
    width:100%;
`;

const ActionButtonsResults = styled.div`
    width:100%;
`;
import { NavLink } from 'react-router-dom';
import styled from "styled-components";

const MainNavigation = () => {
    return (
        <List>
            <ListItem><NavLink to='/playground'>Playground</NavLink></ListItem>
            <ListItem><NavLink to='/policy'>Policy</NavLink></ListItem>
        </List>
    );
};
export default MainNavigation;

const List = styled.ul`
display:flex;
align-self:flex-end;
margin:0;
padding:0px 20px;
`;

const ListItem = styled.li`
display:flex;
padding:10px;
border-bottom:2px solid transparent;
transition:0.5s ease-in-out;
    &:hover{
        border-bottom:2px solid #00fcff;
        transition:0.3s ease-in-out;
    }
    a{
    color:#00fcff;
    text-decoration:none;
    font-family: 'Josefin Sans', sans-serif;
}
`;
import { NavLink } from 'react-router-dom';

const MainNavigation = () => {
    return (
        <ul>
            <li><NavLink to='/playground'>Playground</NavLink></li>
            <li><NavLink to='/policy'>Policy</NavLink></li>
        </ul>
    );
};
export default MainNavigation;

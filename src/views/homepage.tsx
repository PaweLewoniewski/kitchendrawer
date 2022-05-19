import { NavLink } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <div>Homepage</div>
            <ul>
                <li><NavLink to='/playground/bottomCabinets'>Bottom</NavLink></li>
                <li><NavLink to='/playground/topCabinets'>Top</NavLink></li>
            </ul>
        </div>
    );
};
export default HomePage;

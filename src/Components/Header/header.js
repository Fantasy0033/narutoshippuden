import { Link, NavLink } from 'react-router-dom';
import './header.scss';

const Header = () => {
    return (
    <div className="app_header">
                <h1 className="app_title">
                    <Link to="/" href="#" className="app_link"><span>Naruto</span> Shippuden</Link>
                </h1>
            <nav className="app_menu">
                <ul>
                    <li>
                        <NavLink end style={({ isActive }) => ({'color': isActive ? 'red' : 'white'})} to="/" href="#" className="app_link"> Все Персонажи / </NavLink>
                    </li>
                    <li>
                        <NavLink end style={({ isActive }) => ({'color': isActive ? 'red' : 'white'})} to="/akatsuki" href="#" className="app_link">Акацуки</NavLink>
                    </li>
                </ul>
            </nav>
    </div>
    )
}

export default Header;
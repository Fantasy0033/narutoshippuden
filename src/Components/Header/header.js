import './header.scss';

const Header = () => {
    return (
    <div className="app_header">
                <h1 className="app_title">
                    <a href="#" className="app_link"><span>Naruto</span> Shippuden</a>
                </h1>
            <nav className="app_menu">
                <ul>
                    <li>
                        <a href="#" className="app_link">Персонажи / </a>
                    </li>
                    <li>
                        <a href="#" className="app_link">Хвостатые звери</a>
                    </li>
                </ul>
            </nav>
    </div>
    )
}

export default Header;
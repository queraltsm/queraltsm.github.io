import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Header() {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState('home');

    useEffect(() => {
        if (location.pathname === '/') {
            setActiveLink('home');
        } else if (location.pathname === '/contact') {
            setActiveLink('contact');
        }
    }, [location]);

    return (
        <>
            <header className="header">
                <div className="header-content">
                    <h1 className="name">Queralt Sosa Mompel</h1>
                    <p className="role-line">
                        <span className="highlight-1">Software Engineer</span>
                    </p>
                </div>
            </header>
            <nav className="nav-menu">
                <ul>
                    <li>
                        <Link 
                            to="/"
                            className={activeLink === 'home' ? 'active' : ''}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/contact"
                            className={activeLink === 'contact' ? 'active' : ''}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Header;

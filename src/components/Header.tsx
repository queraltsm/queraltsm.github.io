import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Header() {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState('home');

    useEffect(() => {
        if (location.pathname === '/') {
            setActiveLink('home');
        } else if (location.pathname === '/projects') {
            setActiveLink('projects');
        } else if (location.pathname === '/contact') {
            setActiveLink('contact');
        }
    }, [location]);

    return (
        <>
            <header className="header">
            <Link 
                to="/" 
                style={{ textDecoration: 'none', color: 'inherit' }}
                >
                <div className="header-content">
                    <h1 className="name">Queralt Sosa Mompel</h1>
                    <p className="role-line">
                    <span className="highlight-1">Software Engineer</span>
                    </p>
                </div>
                </Link>
            </header>
            <nav className="nav-menu">
                <ul>
                    <li>
                        <Link 
                            to="/"
                            className={activeLink === 'home' ? 'active' : ''}
                        >
                            About me
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/projects"
                            className={activeLink === 'projects' ? 'active' : ''}
                        >
                            Projects
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

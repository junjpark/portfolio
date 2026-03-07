import logo from './icons/logo1.png'

function Header({ onNavClick }) {
    const navItems = [
        { id: 'home', href: '#', label: 'Home' },
        { id: 'projects', href: '#projects', label: 'Projects & Experience' },
        { id: 'cooking', href: '#cooking', label: 'Cooking' },
        { id: 'classical-music-blog', href: '#classical-music-blog', label: 'Classical Music Blog' },
    ]

    return (
        <nav className="top-nav">
            <div className="nav-left">
                <a href="#" className="logo-link" onClick={(e) => onNavClick(e, 'home')}>
                    <img src={logo} alt="Justin Park" className="logo-img" />
                </a>
            </div>
            <div className="nav-right">
                {navItems.map(({ id, href, label }) => (
                    <a
                        key={id}
                        href={href}
                        className="nav-link"
                        onClick={(e) => onNavClick(e, id)}
                    >
                        {label}
                    </a>
                ))}
            </div>
        </nav>
    )
}

export default Header

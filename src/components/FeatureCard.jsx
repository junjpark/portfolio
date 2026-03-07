function FeatureCard({ to, onNavClick, icon, usePlaceholder, children }) {
    const href = to === 'home' ? '#' : `#${to}`

    const handleClick = (e) => {
        if (onNavClick) {
            onNavClick(e, to)
        }
    }

    return (
        <a
            href={href}
            className="feature-card"
            onClick={handleClick}
        >
            {icon && <div className="feature-icon">{icon}</div>}
            {usePlaceholder && <div className="feature-placeholder" aria-hidden="true" />}
            <p className="feature-text">{children}</p>
        </a>
    )
}

export default FeatureCard

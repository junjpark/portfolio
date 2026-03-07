function PageTransitionCurtain({ isActive, isRolling }) {
    return (
        <div
            className={`page-transition-curtain ${isActive ? 'active' : ''} ${isRolling ? 'rolling' : ''}`}
            aria-hidden="true"
        />
    )
}

export default PageTransitionCurtain

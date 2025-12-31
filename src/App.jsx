import { useState, useEffect } from 'react'
import './App.css'

function App() {
    const [currentPage, setCurrentPage] = useState('home')
    const [isTransitioning, setIsTransitioning] = useState(false)
    const [isRolling, setIsRolling] = useState(false)
    const [nextPage, setNextPage] = useState('home')

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.slice(1) || 'home'
            if (hash !== currentPage && !isTransitioning) {
                handlePageChange(hash)
            }
        }

        // Set initial page from hash
        const hash = window.location.hash.slice(1) || 'home'
        setCurrentPage(hash)

        window.addEventListener('hashchange', handleHashChange)
        return () => window.removeEventListener('hashchange', handleHashChange)
    }, [currentPage, isTransitioning])

    const handlePageChange = (newPage) => {
        setNextPage(newPage)
        setIsTransitioning(true)  // Start transition - curtain will slide up
        setIsRolling(false)

        // PHASE 1: Curtain slides up from bottom to cover screen (1 second)
        // The 'active' class makes translateY go from 100% to 0%
        // After 1 second, the curtain is fully covering the screen

        setTimeout(() => {
            // Change the page content while curtain is covering everything
            setCurrentPage(newPage)
            window.location.hash = newPage === 'home' ? '' : newPage

            // PHASE 2: Start rolling up animation
            // The 'rolling' class makes scaleY go from 1 to 0
            // With transform-origin: bottom, it shrinks from bottom to top
            setIsRolling(true)

            // After rolling up completes (1 second), reset everything
            setTimeout(() => {
                setIsTransitioning(false)  // Remove 'active' class
                setIsRolling(false)        // Remove 'rolling' class
                // Curtain resets to translateY(100%) - hidden below screen
            }, 1000)
        }, 1000) // Wait 1 second for Phase 1 (sliding up)
    }

    const handleNavClick = (e, page) => {
        e.preventDefault()
        if (page !== currentPage && !isTransitioning) {
            handlePageChange(page)
        }
    }

    const renderContent = () => {
        switch (currentPage) {
            case 'projects':
                return (
                    <div className="home-content">
                        <h2>Projects & Experience</h2>
                        <p>Coming soon...</p>
                    </div>
                )
            case 'cooking':
                return (
                    <div className="home-content">
                        <h2>Cooking</h2>
                        <p>Coming soon...</p>
                    </div>
                )
            default:
                return (
                    <div className="home-content">
                        <h2>Welcome</h2>
                        <p>Portfolio website coming soon...</p>
                    </div>
                )
        }
    }

    return (
        <div className="App">
            <nav className="top-nav">
                <div className="nav-left">
                    <h1 className="logo">Justin Park</h1>
                </div>
                <div className="nav-right">
                    <a
                        href="#"
                        className="nav-link"
                        onClick={(e) => handleNavClick(e, 'home')}
                    >
                        Home
                    </a>
                    <a
                        href="#projects"
                        className="nav-link"
                        onClick={(e) => handleNavClick(e, 'projects')}
                    >
                        Projects & Experience
                    </a>
                    <a
                        href="#cooking"
                        className="nav-link"
                        onClick={(e) => handleNavClick(e, 'cooking')}
                    >
                        Cooking
                    </a>
                </div>
            </nav>
            <main className="main-content">
                {renderContent()}
            </main>
            <div className={`page-transition-curtain ${isTransitioning ? 'active' : ''} ${isRolling ? 'rolling' : ''}`}></div>
        </div>
    )
}

export default App


import { useState, useEffect } from 'react'
import './App.css'

function App() {
    const [currentPage, setCurrentPage] = useState('home')
    const [isTransitioning, setIsTransitioning] = useState(false)
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
        setIsTransitioning(true)

        // After curtain covers screen, change page
        setTimeout(() => {
            setCurrentPage(newPage)
            window.location.hash = newPage === 'home' ? '' : newPage

            // After page changes, slide curtain up
            setTimeout(() => {
                setIsTransitioning(false)
            }, 50)
        }, 500) // Half of transition duration
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
            <div className={`page-transition-curtain ${isTransitioning ? 'active' : ''}`}></div>
        </div>
    )
}

export default App


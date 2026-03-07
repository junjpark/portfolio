import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import PageTransitionCurtain from './components/PageTransitionCurtain'
import { HomePage, ProjectsPage, CookingPage, ClassicalMusicPage } from './pages'

const PAGES = {
    home: HomePage,
    projects: ProjectsPage,
    cooking: CookingPage,
    'classical-music': ClassicalMusicPage,
}

function App() {
    const [currentPage, setCurrentPage] = useState('home')
    const [isTransitioning, setIsTransitioning] = useState(false)
    const [isRolling, setIsRolling] = useState(false)

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.slice(1) || 'home'
            if (hash !== currentPage && !isTransitioning) {
                handlePageChange(hash)
            }
        }

        const hash = window.location.hash.slice(1) || 'home'
        setCurrentPage(hash)

        window.addEventListener('hashchange', handleHashChange)
        return () => window.removeEventListener('hashchange', handleHashChange)
    }, [currentPage, isTransitioning])

    const handlePageChange = (newPage) => {
        setIsTransitioning(true)
        setIsRolling(false)

        setTimeout(() => {
            setCurrentPage(newPage)
            window.location.hash = newPage === 'home' ? '' : newPage
            setIsRolling(true)

            setTimeout(() => {
                setIsTransitioning(false)
                setIsRolling(false)
            }, 1000)
        }, 1000)
    }

    const handleNavClick = (e, page) => {
        e.preventDefault()
        if (page !== currentPage && !isTransitioning) {
            handlePageChange(page)
        }
    }

    const PageComponent = PAGES[currentPage] || HomePage

    return (
        <div className="App">
            <Header onNavClick={handleNavClick} />
            <main className="main-content">
                {currentPage === 'home' ? (
                    <HomePage onNavClick={handleNavClick} />
                ) : (
                    <PageComponent />
                )}
            </main>
            <Footer />
            <PageTransitionCurtain isActive={isTransitioning} isRolling={isRolling} />
        </div>
    )
}

export default App

import FeatureCard from '../components/FeatureCard'
import GitHubIcon from '../components/icons/GitHubIcon'

function HomePage({ onNavClick }) {
    return (
        <div className="home-hero-section">
            <h1 className="hero-title">Hi, I'm Justin</h1>
            <div className="feature-columns">
                <FeatureCard to="projects" onNavClick={onNavClick} icon={<GitHubIcon size={48} />}>
                    Read about my latest project: <strong>Leetcode 1v1</strong> — A real-time coding competition platform.
                </FeatureCard>
                <FeatureCard to="cooking" onNavClick={onNavClick} usePlaceholder>
                    Check out all of my delicious and not-so delicious creations.
                </FeatureCard>
                <FeatureCard to="classical-music-blog" onNavClick={onNavClick} usePlaceholder>
                    Learn about some of my favorite classical music pieces and composers.
                </FeatureCard>
            </div>
        </div>
    )
}

export default HomePage

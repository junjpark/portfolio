import { timelineEntries } from '../data/timelineEntries'

function ProjectsPage() {
    return (
        <div className="projects-page">
            <h2 className="projects-page-title">Projects & Experience</h2>
            <div className="timeline">
                <div className="timeline-line" aria-hidden="true" />
                {timelineEntries.map((entry, index) => {
                    const isLeft = index % 2 === 0
                    return (
                        <div
                            key={`${entry.year}-${index}`}
                            className={`timeline-item ${isLeft ? 'timeline-item--left' : 'timeline-item--right'}`}
                        >
                            {isLeft ? (
                                <>
                                    <div className="timeline-block">
                                        <div className="timeline-content">
                                            {entry.title && (
                                                <h3 className="timeline-title">{entry.title}</h3>
                                            )}
                                            {entry.subheading && (
                                                <p className="timeline-subheading">
                                                    {entry.subheading}
                                                </p>
                                            )}
                                            <p className="timeline-description">
                                                {entry.description}
                                            </p>
                                        </div>
                                    </div>
                                    <span className="timeline-year timeline-year--left">
                                        {entry.year}
                                    </span>
                                    <div className="timeline-spacer" aria-hidden="true" />
                                </>
                            ) : (
                                <>
                                    <div className="timeline-spacer" aria-hidden="true" />
                                    <span className="timeline-year timeline-year--right">
                                        {entry.year}
                                    </span>
                                    <div className="timeline-block">
                                        <div className="timeline-content">
                                            {entry.title && (
                                                <h3 className="timeline-title">{entry.title}</h3>
                                            )}
                                            {entry.subheading && (
                                                <p className="timeline-subheading">
                                                    {entry.subheading}
                                                </p>
                                            )}
                                            <p className="timeline-description">
                                                {entry.description}
                                            </p>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProjectsPage

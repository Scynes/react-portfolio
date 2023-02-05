const Projects = () => {
    
    return (
        <div id={'projects-container'} className={'flex relative column align-center justify-center width-100 height-100'}>
            <div className="projects-background width-100 height-100"></div>
            <h1 className={'relative fc-primary'}>Projects</h1>
            <div id="projects-flex" className="flex relative justify-center">
                <div className="project fc-primary">lore</div>
                <div className="project fc-primary">lore</div>
                <div className="project fc-primary">lore</div>
                <div className="project fc-primary">lore</div>
                <div className="project fc-primary">lore</div>
            </div>
        </div>
    )
}

export default Projects;
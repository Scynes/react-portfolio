import GhostUpload from '../assets/videos/ghost-upload.mp4'

const Projects = () => {
    
    return (
        <div id={'projects-container'} className={'flex relative column align-center justify-center width-100 height-100'}>
            <div className="projects-background width-100 height-100"></div>
            <h1 className={'relative fc-primary'}>Projects</h1>
            <div id="projects-flex" className="flex relative justify-center">
                <div className="project flex column fc-primary">
                    <div>
                        <span className={'project-span'}>Ghost Upload</span>
                    </div>
                    <div>
                        <img className={'project-tech'} src="https://skillicons.dev/icons?i=nodejs,express,mongodb,js,html,css,socket.io" alt="" />
                    </div>
                    <div>
                        <a href="https://ghost.herokuapp.com">
                            <video className={'project-video'} src={GhostUpload} loop autoPlay muted></video>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
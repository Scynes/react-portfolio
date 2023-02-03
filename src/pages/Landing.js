import '../assets/typer.css'

import portfolioPicture from '../assets/images/default_portfolio_pic.png'

const Landing = () => {

    return (
        <div id={'landing-page-wrapper'} className={'justify-center'}>
            <div className="flex justify-center">
                <svg id={'portfolio-picture'} viewBox="0 0 160 160" width="25rem">
                    <image xlinkHref={portfolioPicture} x="35%" y="35%" width="30%" clipPath={'inset(0% round 15px)'}/>
                    <g transform=" matrix(0.866, -0.5, 0.25, 0.433, 80, 80)">
                        <path d="M 0,70 A 65,70 0 0,0 65,0 5,5 0 0,1 75,0 75,70 0 0,1 0,70Z" fill="#fff">
                            <animateTransform attributeName="transform" type="rotate" from="360 0 0" to="0 0 0" dur="1s" repeatCount="indefinite" />
                        </path>
                    </g>
                </svg>
            </div>
            <div className={'about-container flex justify-center fc-primary'}>
                <div>
                    <p className={'typer'}></p>
                </div>
            </div>
        </div>
    )
}

export default Landing;
const Footer = () => {
    return (
        <footer className={'flex align-center justify-center fc-primary'}>
            <a className={'flex align-center justify-center pointer'} href="http://google.com">
                <i className={'fa-brands fa-discord fa-3x'}></i>
            </a>
            <a className={'flex align-center justify-center pointer'} href="https://github.com/Scynes">
                <i className={'fa-brands fa-github fa-3x'}></i>
            </a>
            <a className={'flex align-center justify-center pointer'} href="https://www.linkedin.com/in/dustin-greyfield-web-developer/">
                <i className={'fa-brands fa-linkedin fa-3x'}></i>
            </a>
        </footer>
    )
}

export default Footer;
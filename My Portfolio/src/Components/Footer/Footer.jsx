import './Footer.css'
import footerData from '../../data/footerData';
function Footer() {
    return (
        <>

            <nav className='FooterBar'>

                {footerData.socialLinks.map((link)=>(
                    <a 
                    key = {link.name}
                    className="arrow-link"
                    href = {link.url}
                    target ={ link.external ? "_blank" : undefined}
                    rel = {link.external ? "noopener noreferrer" : undefined}
                    >
                        {link.name}
                    </a>
                ))}

            </nav>
            <div className="ending"><p>{footerData.copyright}</p>  </div>

        </>
    )
}
export default Footer;
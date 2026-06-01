import './Footer.css'
function Footer(){
    return(
        <>
    
        <nav className='FooterBar'>
            <a class="arrow-link" href="#home">twitter</a>
            <a class="arrow-link" href="#skills">Github</a>
            <a class="arrow-link" href="#exp">LinkedIn</a>
            <a class="arrow-link" href="#exp">Email</a>
            
        </nav>
        <div className="ending">
        <p>© Made by Suansh</p>  </div>
        <div className="ending2">
        <p>Powered by passion, patience, and Code Magic.</p>
        </div>
        </>
    )
}
export default Footer;
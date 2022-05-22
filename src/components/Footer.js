import './Footer.css'

export default function Footer () {
    return (
        <footer>
            <a href="https://github.com/Banger484"><img className="link-tree-logo"
            src={require("../assets/imgs/github-icon.png")}
            alt="github icon"
        /></a>
        <a href="https://www.linkedin.com/in/bretbanger/"
          ><img
            className="link-tree-logo"
            src={require("../assets/imgs/linkedin-icon.png")}
            alt="linkedIn icon"
        /></a>
        <a href="mailto:banger484@gmail.com"
          ><img
            className="link-tree-logo"
            src={require("../assets/imgs/email-icon.png")}
            alt="email icon"
        /></a>
        <a href="tel:+6512465986"
          ><img
            className="link-tree-logo"
            src={require("../assets/imgs/phone-icon.png")}
            alt="phone icon"
        /></a>
        <a href="https://www.facebook.com/bret.banger"
          ><img
            className="link-tree-logo"
            src={require("../assets/imgs/fbook-icon.png")}
            alt="facebook icon"
        /></a>
        <a href="https://www.instagram.com/bretbanger/"
          ><img
            className="link-tree-logo"
            src={require("../assets/imgs/instagram-icon.png")}
            alt="instagram icon"
        /></a>
        </footer>
    )
}
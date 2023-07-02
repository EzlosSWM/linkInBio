import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

function SocialIcons() {
    let Socials = {
        Links: ["https://github.com/EzlosSWM", "https://twitter.com/EzlosSWM", "https://facebook.com/PotatoAndBanana"],
        Icons: [faGithub, faTwitter, faFacebook]
    };



    return (
        <ul className="socialIcons">
            {Socials.Links.map((link, index) => (
            <li key={index}>
                <a href={link} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={Socials.Icons[index]} />
                </a>
            </li>
            ))}
        </ul>
    )
}

export default SocialIcons;

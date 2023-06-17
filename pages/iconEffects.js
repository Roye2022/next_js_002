import '../styles/iconEffects.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faWhatsapp,
    faLinkedin,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons'



function IconEffect() {
    return (
        <div>
            <ul>
                <li>
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="fa fa-facebook">
                            <FontAwesomeIcon icon={faFacebook} />
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="fa fa-twitter">
                            <FontAwesomeIcon icon={faTwitter} />
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="fa fa-whatsapp">
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="fa fa-linkedin">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="fa fa-instagram">
                            <FontAwesomeIcon icon={faInstagram} />
                        </span>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default IconEffect;

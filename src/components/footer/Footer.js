
import logo from '../../assets/img/header/logo.png';
import './footer.scss';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
				<div className="footer_wrapper">

                    <div className="footer_logo">
                        <img src={logo} alt="#"/>
                    </div>

                    <div className="footer_contacts">
                        <a className="footer_contacts-phone" href="http.git.com">+38 (063) 295-59-30</a>
                        <a className="footer_contacts-email" href="http.git.com">info@irvasokna.ru</a>
                    </div>
				</div>
			</div>
        </div>
    )
}

export default Footer;

import logo from '../../assets/img/header/logo.png';
import './footer.scss';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
				<div className="footer_wrapper">

                    <div className="footer_logo">
                        <img src={logo} alt="footer_logo"/>
                    </div>

				</div>
			</div>
        </div>
    )
}

export default Footer;
import logo from "../../assets/img/header/logo.png"
import clock from "../../assets/img/header/clock.png"
import phone from "../../assets/img/header/phone.png"

import './header.scss';
import './mediaHeader.scss'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    
                    <div className="logo">
                        <div className="logo__img">
                            <img src={logo} alt="logoImage" />
                        </div>
                        <p>Остекление балконов и лоджий в Киеве и Киевской области</p>
                    </div>
                
                    <div className="header_btn_wrap">
                        <div className="header_btn_wrap_block">
                            <button className="header_btn text-uppercase text-left popup_engineer_btn">Вызвать<br/>замерщика</button>
                        </div>
                    </div>
                
                    <div className="working_hours">
                        <div className="working_hours_img">
                            <img src={clock} alt="clockImage" />
                        </div>
                        <p>без выходных <br/><span>9:00 - 18:00</span></p>
                    </div>
                
                    <div className="contact_us">
                        <div className="contact_us_wrap">
                            <a href="http.git.com"><img src={phone} alt="phoneImage" />+38 (063) 295-59-30</a>
                            <a href="http.git.com" className="phone_link">Заказать обратный звонок</a>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header
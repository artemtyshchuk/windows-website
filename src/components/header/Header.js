import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';


import logo from "../../assets/img/header/logo.png"
import clock from "../../assets/img/header/clock.png"
import phone from "../../assets/img/header/phone.png"

import './header.scss';
import './mediaHeader.scss'

import { openModal } from '../../features/modal/modalSlice'


const Header = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation();


    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    
                    <div className="logo">
                        <div className="logo__img">
                            <img src={logo} alt="logoImage" />
                        </div>
                        <p>{t('glazing_of_balconies_and_loggias_in_Kyiv')}</p>
                    </div>
                
                    <div className="header_btn_wrap">
                        <div className="header_btn_wrap_block">
                            <button className="header_btn text-uppercase text-left popup_engineer_btn" onClick={() => dispatch(openModal())}>{t('call_a_measurer')}</button>
                        </div>
                    </div>
                
                    <div className="working_hours">
                        <div className="working_hours_img">
                            <img src={clock} alt="clockImage" />
                        </div>
                        <p>{t('without_a_holiday')}<br/><span>9:00 - 18:00</span></p>
                    </div>
                
                    <div className="contact_us">
                        <div className="contact_us_wrap">
                            <a href="#h"><img src={phone} alt="phoneImage"/>+38 (063) 295-59-30</a>
                            <a href="#h" className="phone_link" onClick={() => dispatch(openModal())}>{t('book_a_consultation')}</a>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header
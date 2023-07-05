import { useTranslation } from 'react-i18next';


import firstPictureOfGuarantees from '../../assets/img/guarantees/1.png'
import secondPictureOfGuarantees from '../../assets/img/guarantees/2.png'
import thirdPictureOfGuarantees from '../../assets/img/guarantees/3.png'
import fourthPictureOfGuarantees from '../../assets/img/guarantees/4.png'
import fivethPictureOfGuarantees from '../../assets/img/guarantees/5.png'
import sixthPictureOfGuarantees from '../../assets/img/guarantees/6.png'


import './guarantees.scss';
import './mediaGuarantees.scss';

const Guarantees = () => {

    const { t } = useTranslation();

    return (
        <div className="guarantees">
            <div className="container">
                <div className="section_header guarantees_header">
					<h2>{t('guarantees.we_guarantee_you')}</h2>
					<div className="section_header_sub guarantees_header_sub"></div>
				</div>
                <div className="guarantees_wrapper">

                    <div className="guarantees_block">
                        <img src={firstPictureOfGuarantees} alt="firstPictureOfGuarantees"/>
                        <h3>{t('guarantees.high_quality')}</h3>
                    </div>

                    <div className="guarantees_block">
                        <img src={secondPictureOfGuarantees} alt="secondPictureOfGuarantees"/>
                        <h3>{t('guarantees.turnkey_work')}</h3>
                    </div>

                    <div className="guarantees_block">
                        <img src={thirdPictureOfGuarantees} alt="thirdPictureOfGuarantees"/>
                        <h3>{t('guarantees.short_time_installation')}</h3>
                    </div>

                    <div className="guarantees_block">
                        <img src={fourthPictureOfGuarantees} alt="fourthPictureOfGuarantees"/>
                        <h3>{t('guarantees.manufacturer_prices')}</h3>
                    </div>

                    <div className="guarantees_block">
                        <img src={fivethPictureOfGuarantees} alt="fivethPictureOfGuarantees"/>
                        <h3>{t('guarantees.measuring_and_consultation_for_free')}</h3>
                    </div>

                    <div className="guarantees_block">
                        <img src={sixthPictureOfGuarantees} alt="sixthPictureOfGuarantees"/>
                        <h3>{t('guarantees.warmth_and_comfort_on_the_balcony')}</h3>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Guarantees
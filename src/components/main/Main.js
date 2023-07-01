import React from 'react';
import { useTranslation } from 'react-i18next';

import quality from '../../assets/img/main/icons/quality.png';
import time from '../../assets/img/main/icons/time.png';
import guaranty from '../../assets/img/main/icons/guaranty.png';
import delivery from '../../assets/img/main/icons/delivery.png';

import LanguageFlags from './LanguageFlags';

import FormCard from '../formCard/FormCard';
import './main.scss';
import './mediaMain.scss';



const Main = () => {
    const { t } = useTranslation();


    return (
        <div className='main'>
            <div className="container">
                <div className="row">
                <LanguageFlags/>
                    <h1><span>{t('balcony_glazing')}<br/></span>{t('for_12_800_hryvnia')}</h1>
                    <div className="main_features">

                        <div className="main_features_block">
                            <img src={quality} alt="qualityIcon" />
                            <p>{t('high_quality')}</p>
                        </div>

                        <div className="main_features_block">
                            <img src={time} alt="timeIcon" />
                            <p>{t('quick_installation')}</p>
                        </div>

                        <div className="main_features_block">
                            <img className="small_img" src={guaranty} alt="guarantyIcon" />
                            <p>{t('warranty_3_years')}</p>
                        </div>

                        <div className="main_features_block">
                            <img className="small_img" src={delivery} alt="" />
                            <p>{t('garbage_removal')}</p>
                        </div>

                    </div>

                    <div className="form main_form">
                        <FormCard/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Main;
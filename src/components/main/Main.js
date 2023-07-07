import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import quality from '../../assets/img/main/icons/quality.png';
import time from '../../assets/img/main/icons/time.png';
import guaranty from '../../assets/img/main/icons/guaranty.png';
import delivery from '../../assets/img/main/icons/delivery.png';


import LanguageFlags from './LanguageFlags';

import FormCard from '../formCard/FormCard';
import './main.scss';
import './mediaMain.scss';

const rightAnimation = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: {delay: custom * 0.2},
    }),
}


const Main = () => {
    const { t } = useTranslation();


    return (
        <motion.div 
            initial="hidden"
            viewport={{ amount: 0.1, once: true }}
            whileInView="visible"
            className='main'>
            <div className="container">
                <div className="row">
                <LanguageFlags/>
                    <motion.h1 custom={1} variants={rightAnimation} ><span>{t('main.balcony_glazing')}<br/></span>{t('main.for_12_800_hryvnia')}</motion.h1>
                    <div className="main_features">

                        <motion.div custom={3} variants={rightAnimation} className="main_features_block-extra">
                            <img src={quality} alt="qualityIcon" />
                            <p>{t('main.high_quality')}</p>
                        </motion.div>

                        <motion.div custom={4} variants={rightAnimation} className="main_features_block-extra">
                            <img src={time} alt="timeIcon" />
                            <p>{t('main.quick_installation')}</p>
                        </motion.div>

                        <motion.div custom={5} variants={rightAnimation} className="main_features_block">
                            <img className="small_img" src={guaranty} alt="guarantyIcon" />
                            <p>{t('main.warranty_3_years')}</p>
                        </motion.div>

                        <motion.div custom={6} variants={rightAnimation} className="main_features_block">
                            <img className="small_img" src={delivery} alt="" />
                            <p>{t('main.garbage_removal')}</p>
                        </motion.div>

                    </div>
                    
                    <FormCard/>
                </div>
            </div>
        </motion.div>
    )
}

export default Main;
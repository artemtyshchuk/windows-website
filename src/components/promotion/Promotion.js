import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import FormCard from '../formCard/FormCard';

import './promotion.scss';
import './mediaPromotion.scss';


const Promotion = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00'
    });

    const { t } = useTranslation();


    useEffect(() => {
        const targetDate = new Date('December 31, 2023 23:59:59').getTime();

        const updateTimer = () => {
            const now = new Date().getTime();
            const timeDifference = targetDate - now;
      
            if (timeDifference <= 0) {
              clearInterval(timer);
              return;
            }
      
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000).toString().padStart(2, '0');
      
            setTimeLeft({ days, hours, minutes, seconds });
        };
        

        const timer = setInterval(updateTimer, 1000);
        updateTimer();
        return () => clearInterval(timer)
    }, [])


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

    const topAnimation = {
		hidden: {
			y: 100,
			opacity: 0,
		},
		visible: custom => ({
			y: 0,
			opacity: 1,
			transition: {delay: custom * 0.2},
		}),
	}


    return (
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            className="sale">
            <div className="sale_wrapper">

                <motion.h2 custom={1} variants={rightAnimation} className="sale_title">{t('promotion.promotion_60')}</motion.h2>
                <motion.p  custom={2} variants={rightAnimation} className="sale_subtitle">{t('promotion.save_money_on_glazing')}<br/> {t('promotion.only_till_December_18')}</motion.p>
                <div className="timer1" id="timer">
                    <h4>{t('promotion.before_the_end')}</h4>
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.2, once: true }}
                        className="container1">
                            <motion.div custom={1} variants={topAnimation} className="numbers1"><div><span id="days">{timeLeft.days}</span></div><div className="description1">{t('promotion.days')}</div></motion.div>
                            <motion.div custom={2} variants={topAnimation} className="numbers1"><div><span id="hours">{timeLeft.hours}</span></div><div className="description1">{t('promotion.hours')}</div></motion.div>
                            <motion.div custom={3} variants={topAnimation} className="numbers1"><div><span id="minutes">{timeLeft.minutes}</span></div><div className="description1">{t('promotion.minutes')}</div></motion.div>
                            <motion.div custom={4} variants={topAnimation} className="numbers1"><div><span id="seconds">{timeLeft.seconds}</span></div><div className="description1">{t('promotion.seconds')}</div></motion.div>      
                    </motion.div>
                </div>

                <div className="sale_form">
                    <FormCard className="sale_form-component"/>
                </div>
            </div>
        </motion.div>
    )
}

export default Promotion
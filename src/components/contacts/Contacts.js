import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './contacts.scss';
import './mediaContacts.scss';

const Contacts = () => {

    const { t } = useTranslation();

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

    return (
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            className="contacts">
            <div className="container">
                <div className="section_header">
					<motion.h2 custom={1} variants={topAnimation}>{t('contacts.how_to_find_us')}</motion.h2>
					<div className="section_header_sub"></div>
				</div>
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2, once: true }}
                    className="contacts_wrapper">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.6124574898727!2d20.981694476982057!3d52.23225837198721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc84a53fffff%3A0xcc34cf4eefdeab0b!2sWarsaw%20Spire!5e0!3m2!1sru!2spl!4v1686319051631!5m2!1sru!2spl"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Maps"
                    ></iframe>					
                    <div className="contacts_info">
                        <motion.h3 custom={1} variants={rightAnimation}>{t('contacts.first_adress')}</motion.h3>
                        <motion.p custom={2} variants={rightAnimation}>{t('contacts.first_subadress')}</motion.p>
                        <motion.h3 custom={1} variants={rightAnimation}>{t('contacts.second_adress')}</motion.h3>
                        <motion.p custom={3} variants={rightAnimation}>{t('contacts.second_subadress')}</motion.p>
                        <motion.h3 custom={1} variants={rightAnimation}>{t('contacts.phone')}</motion.h3>
                        <motion.p custom={4} variants={rightAnimation}>+38 (063) 295-59-30</motion.p>
                        <motion.h3 custom={1} variants={rightAnimation}>E-mail:</motion.h3>
                        <motion.a href="#h" custom={5} variants={rightAnimation}>info@irvas.com</motion.a>
                        <motion.h3 custom={1} variants={rightAnimation}>{t('contacts.work_schedule')}</motion.h3>
                        <motion.p custom={6} variants={rightAnimation}>{t('contacts.seven_days_a_week')}</motion.p>
                    </div>
				</motion.div>
            </div>
        </motion.div>
    )
}

export default Contacts
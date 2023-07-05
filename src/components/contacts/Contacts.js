import { useTranslation } from 'react-i18next';

import './contacts.scss';
import './mediaContacts.scss';

const Contacts = () => {

    const { t } = useTranslation();

    return (
        <div className="contacts">
            <div className="container">
                <div className="section_header">
					<h2>{t('contacts.how_to_find_us')}</h2>
					<div className="section_header_sub"></div>
				</div>
                <div className="contacts_wrapper">
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
                        <h3>{t('contacts.first_adress')}</h3>
                        <p>{t('contacts.first_subadress')}</p>
                        <h3>{t('contacts.second_adress')}</h3>
                        <p>{t('contacts.second_subadress')}</p>
                        <h3>{t('contacts.phone')}</h3>
                        <p>+38 (063) 295-59-30</p>
                        <h3>E-mail:</h3>
                        <a href="http.git.com">info@irvas.com</a>
                        <h3>{t('contacts.work_schedule')}</h3>
                        <p>{t('contacts.seven_days_a_week')}</p>
                    </div>
				</div>
            </div>
        </div>
    )
}

export default Contacts
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import './formCard.scss';
import successIcon from './checked.png';

const DataSentSuccessfully = () => {
    const { t } = useTranslation();

    const topAnimation = {
        hidden: {
            y: -100,
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
        className='dataSentSuccessfully'
        initial="hidden"
        whileInView="visible"
        custom={1} 
        variants={topAnimation}>
            
        <h3 className='dataSentSuccessfully_text'>{t('formCard.data_sent_successfully')}</h3>
        <div className="popup_calc_content_button">
            <img className="dataSentSuccessfully_successIcon" src={successIcon} alt="successIcon" />
        </div>
    </motion.div>
 )
}
export default DataSentSuccessfully
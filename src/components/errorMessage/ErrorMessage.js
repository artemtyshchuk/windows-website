import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import img from './error.gif';

const ErrorMessage = () => {
    const { t } = useTranslation();

    const topAnimation = {
        hidden: {
            opacity: 0,
        },
        visible: custom => ({
            opacity: 1,
            transition: {delay: custom * 0.2},
        }),
    }

    return (
        <motion.div 
            initial="hidden"
            whileInView="visible"
            custom={1} 
            variants={topAnimation}
            className='errorMessage'>
            
            <img 
                style={{display: 'block', width: '250px', height: '250px', objectFit: 'contain', margin: '10px auto', zIndex: 1000 }} 
                src={img} 
                alt={'Error'}/>
                <p className='errorMessage_up'>Oops... </p>
            <p className='errorMessage_down'>{t('formCard.data_not_sent_try_again_later')}</p>
    
        </motion.div>
    )
}

export default ErrorMessage;  
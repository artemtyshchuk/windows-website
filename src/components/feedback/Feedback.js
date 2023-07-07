import { useDispatch } from 'react-redux';
import { openModal } from '../../features/modal/modalSlice'
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import './feedback.scss';
import './mediaFeedback.scss';

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

const Feedback = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    return (
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            className="feedback">
            <div className="container">
				<div className="feedback_block">
					<motion.h3 custom={1} variants={rightAnimation}>{t('feedback.any_questions')}</motion.h3>
					<motion.a whileTap={{ scale: 0.9 }} custom={2} variants={rightAnimation} className="phone_link" href="#h" onClick={() => dispatch(openModal())}>{t('feedback.ask_our_specialist')}</motion.a>
				</div>
			</div>
        </motion.div>
    )
}

export default Feedback
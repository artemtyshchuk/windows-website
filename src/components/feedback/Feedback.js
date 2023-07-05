import { useDispatch } from 'react-redux';
import { openModal } from '../../features/modal/modalSlice'
import { useTranslation } from 'react-i18next';


import './feedback.scss';
import './mediaFeedback.scss';

const Feedback = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    return (
        <div className="feedback">
            <div className="container">
				<div className="feedback_block">
					<h3>{t('feedback.any_questions')}</h3>
					<a className="phone_link" href="#h" onClick={() => dispatch(openModal())}>{t('feedback.ask_our_specialist')}</a>
				</div>
			</div>
        </div>
    )
}

export default Feedback
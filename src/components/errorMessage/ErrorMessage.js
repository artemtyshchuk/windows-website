import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../features/modal/modalSlice';

import img from './error.gif';

const ErrorMessage = () => {
    const dispatch = useDispatch();

    const { t } = useTranslation();

    return (
        <div className='errorMessage'>
            
            <img 
                style={{display: 'block', width: '250px', height: '250px', objectFit: 'contain', margin: '0 auto', zIndex: 1000 }} 
                src={img} 
                alt={'Error'}/>
                <p className='errorMessage_up'>Oops... </p>
            <p className='errorMessage_down'>{t('formCard.data_not_sent_try_again_later')}</p>
            <div className="popup_calc_content_button">
                <button
                    className="button" 
                    onClick={() => {dispatch(closeModal())}}>{t('formCard.close')}
                </button>
            </div>
        </div>
    )
}

export default ErrorMessage;  
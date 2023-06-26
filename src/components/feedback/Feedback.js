import { useDispatch } from 'react-redux';
import { openModal } from '../../features/modal/modalSlice'


import './feedback.scss';
import './mediaFeedback.scss';

const Feedback = () => {
    const dispatch = useDispatch();

    return (
        <div className="feedback">
            <div className="container">
				<div className="feedback_block">
					<h3>Остались вопросы?</h3>
					<a className="phone_link" href="#h" onClick={() => dispatch(openModal())}>Спросите у нашего специалиста!</a>
				</div>
			</div>
        </div>
    )
}

export default Feedback
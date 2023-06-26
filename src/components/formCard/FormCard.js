import { useState, useEffect} from 'react';
import {useHttp} from '../../hooks/http.hook'; //для того чтобы делать запрос
import { useDispatch } from 'react-redux'; //два хука которые используются в redux
import { v4 as uuidv4 } from 'uuid';
import { Formik, Form, Field, ErrorMessage as FormikErrorMessage } from 'formik';
import * as Yup from 'yup';

import { clientsCreated } from './formSlice';
import { closeModal } from '../../features/modal/modalSlice';
import './formCard.scss';
import './mediaFormCard.scss';

const FormCard = ({modal_form, isModal}) => {
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  	const [clientName, setClientName] = useState('');
	const [clientPhone, setClientPhone] = useState('');

	const dispatch = useDispatch();
    const {request} = useHttp();

	const onSubmitHandler = (e) => {
		e.preventDefault();
		const newClient = {
			id: uuidv4(),
			name: clientName,
			phone: clientPhone
		}
		if (!clientName || !clientPhone) {
			return alert('Заполните поля для отправки!')
		}
		if (isModal) {
			dispatch(closeModal());
		}
		request("http://localhost:3001/clients", "POST", JSON.stringify(newClient))
            .then(res => console.log(res, 'Отправка успешна'))
            .then(dispatch(clientsCreated(newClient)))
            .catch(err => console.log(err));
        
		setClientName('')
		setClientPhone('')
	}

	const SignupSchema = Yup.object().shape({
		clientName: Yup.string()
		  .min(2, 'Too Short!')
		  .max(50, 'Too Long!')
		  .required('Required'),
		clientPhone: Yup.number()
		  .min(2, 'Too Short!')
		  .max(50, 'Too Long!')
		  .required('Required'),
	});

	useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === 'Escape' && isModal) {
                dispatch(closeModal());
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [dispatch, isModal]);
	 

	// const handleSubmit = () => {
	// 	setIsFormSubmitted(true);
  	// };

	return (
		<div className={`form main_form ${modal_form}`}>
		<Formik
			initialValues={{
			clientName: '',
			clientPhone: ''
			}}
			validationSchema={SignupSchema}
			onSubmit={onSubmitHandler}>

			{() => (
			<Form>
				{isModal && (
					<button type="button" className="popup_calc_close" onClick={() => {dispatch(closeModal())}}>
						<strong>&times;</strong>
					</button>
				)}
				<h2>
				Запишитесь сегодня на <br />
				<span>бесплатный замер</span>
				</h2>
				<div className="main__search-wrapper">
				<Field
					required
					className={`form-control form_input`}
					id="clientName"
					type="text"
					name="clientName"
					value={clientName}
					placeholder="Введите ваше имя"
					onChange={(e) => setClientName(e.target.value)}
				/>
				<Field
					required
					className={`form-control form_input`}
					id="clientPhone"
					type="number"
					name="clientPhone"
					value={clientPhone}
					placeholder="Введите телефон"
					onChange={(e) => setClientPhone(e.target.value)}
				/>
				<button
					type="submit"
					className="text-uppercase btn-block button"
					name="submit"
					onClick={onSubmitHandler}
				>
					Вызвать замерщика!
				</button>
				<p className="form_notice">Ваши данные конфиденциальны</p>
				</div>
				{isFormSubmitted && (
				<div className="errorMessages">
					<FormikErrorMessage
					component="div"
					className="error"
					name="userName"
					/>
					<FormikErrorMessage
					component="div"
					className="error"
					name="userPhone"
					/>
				</div>
				)}
			</Form>
			)}
		</Formik>
		</div>
	);
};

export default FormCard;
import { useState, useEffect } from 'react';
import { useHttp } from '../../hooks/http.hook';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Formik, Form, Field, ErrorMessage as FormikErrorMessage } from 'formik';
import * as Yup from 'yup';

import { clientsCreated } from './formSlice';
import { closeModal } from '../../features/modal/modalSlice';
import './formCard.scss';
import './mediaFormCard.scss';

const FormCard = ({ modal_form, isModal }) => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const dispatch = useDispatch();
  const { request } = useHttp();

const onSubmitHandler = (values) => {
    const newClient = {
      id: uuidv4(),
      name: values.clientName,
      phone: values.clientPhone
    }

    if (!values.clientName || !values.clientPhone) {
      return alert('Заполните поля для отправки!');
    }

    if (isModal) {
      dispatch(closeModal());
    }

    request("http://localhost:3001/clients", "POST", JSON.stringify(newClient))
      .then(res => {
        console.log(res, 'Отправка успешна');
        setIsFormSubmitted(true);
      })
      .then(() => {
        dispatch(clientsCreated(newClient));
      })
      .catch(err => console.log(err));

    values.clientName = '';
    values.clientPhone = '';
  }

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

  return (
    <div className={`form main_form ${modal_form}`}>
      <Formik
        initialValues={{
          clientName: '',
          clientPhone: ''
        }}
        validationSchema={Yup.object({
          clientName: Yup.string()
            .min(2, 'Минимум 2 символа для заполнения!')
            .required('Обязательное поле!'),
          clientPhone: Yup.string()
		  	.matches(/^\d{5,}$/, 'Минимум 5 цифр')
            .required('Обязательное поле!'),
        })}
        onSubmit={onSubmitHandler}
      >
        {formik => (
          <Form>
            {isModal && (
              <button type="button" className="popup_calc_close" onClick={() => { dispatch(closeModal()) }}>
                <strong>&times;</strong>
              </button>
            )}
            <h2>
              Запишитесь сегодня на <br />
              <span>бесплатный замер</span>
            </h2>
            <div className="main__search-wrapper">
              <Field
                className={`form-control form_input`}
                id="clientName"
                type="text"
                name="clientName"
                placeholder="Введите ваше имя"
              />
              {formik.touched.clientName && formik.errors.clientName && !isFormSubmitted && (
                <div className='error'>{formik.errors.clientName}</div>
              )}

              <Field
                className={`form-control form_input`}
                id="clientPhone"
                type="number"
                name="clientPhone"
                placeholder="Введите телефон"
              />
              {formik.touched.clientPhone && formik.errors.clientPhone && !isFormSubmitted && (
                <div className='error'>{formik.errors.clientPhone}</div>
              )}

              <button
                type="submit"
                className="text-uppercase btn-block button"
                name="submit"
				disabled={!formik.isValid || formik.isSubmitting}>
                Вызвать замерщика!
              </button>
              <p className="form_notice">Ваши данные конфиденциальны</p>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormCard;
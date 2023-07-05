import { useState, useEffect, forwardRef } from 'react';
import { useHttp } from '../../hooks/http.hook';
import { useDispatch } from 'react-redux';


import { v4 as uuidv4 } from 'uuid';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import Spinner from '../spinner/Spinner';
import DataSentSuccessfully from './DataSentSuccessfully';
import ErrorMessage from '../errorMessage/ErrorMessage';
import { clientsCreated } from './formSlice';
import { closeModal } from '../../features/modal/modalSlice';


import './formCard.scss';
import './mediaFormCard.scss';

const FormCard = ({ modal_form, isModal }) => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);


  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { request } = useHttp();

  const onSubmitHandler = (values) => {
    const newClient = {
      id: uuidv4(),
      name: values.clientName,
      phone: values.clientPhone
    };

    // if (isModal) {
    //   dispatch(closeModal());
    // }

    setIsSubmitting(true);

    request("http://localhost:3001/clients", "POST", JSON.stringify(newClient))
      .then(res => {
        console.log(res, 'Отправка успешна');
        setIsSubmitting(false);
      })
      .then(() => {
        dispatch(clientsCreated(newClient));
        setIsFormSubmitted(true);
      })

      .catch(err => {
        console.log(err);
        setError(err);
        setIsSubmitting(false);
      });

    values.clientName = '';
    values.clientPhone = '';
  };

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

  useEffect(() => {
    let timer;
    if (isFormSubmitted) {
      timer = setTimeout(() => {
        setIsFormSubmitted(false);
      }, 2000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [isFormSubmitted])

  return (
    <div className={`form main_form ${modal_form}`}>
      {isFormSubmitted ? (
        <DataSentSuccessfully />
      ) : isSubmitting ? (
        <Spinner /> // Отображение компонента Spinner во время отправки
      ) : error ? (
        <ErrorMessage error={error} /> // Отображение компонента ErrorMessage в случае ошибки
      ) : (
        <Formik
          initialValues={{
            clientName: '',
            clientPhone: ''
          }}
          validationSchema={Yup.object({
            clientName: Yup.string()
              .min(2, 'At least 2 characters!')
              .required('Required field!'),
            clientPhone: Yup.string()
              .matches(/^\d{5,}$/, 'At least 2 characters!')
              .required('Required field!')
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
                {t('formCard.sign_up_for_a_free')} <br />
                <span>{t('formCard.measurement_today')}</span>
              </h2>
              <div className="main__search-wrapper">
                <Field
                  className={`form-control form_input`}
                  id="clientName"
                  type="text"
                  name="clientName"
                  placeholder={t('formCard.enter_your_name')}
                />
                {formik.touched.clientName && formik.errors.clientName && !isFormSubmitted && (
                  <div className='error'>{formik.errors.clientName}</div>
                )}

                <Field
                  className={`form-control form_input`}
                  id="clientPhone"
                  type="number"
                  name="clientPhone"
                  placeholder={t('formCard.enter_your_phone')}
                />
                {formik.touched.clientPhone && formik.errors.clientPhone && !isFormSubmitted && (
                  <div className='error'>{formik.errors.clientPhone}</div>
                )}

                <button
                  type="submit"
                  className="text-uppercase btn-block button"
                  name="submit"
                  disabled={!formik.isValid || formik.isSubmitting}>
                  {t('formCard.call_a_measuring_engineer')}
                </button>
                <p className="form_notice">{t('formCard.your_information_is_private')}</p>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default FormCard;

export const MFormCard = motion(FormCard)
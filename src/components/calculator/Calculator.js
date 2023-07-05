import { useState, useEffect } from 'react';
import {useHttp} from '../../hooks/http.hook'; //для того чтобы делать запрос

import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Formik, Form, Field, ErrorMessage as FormikErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Импорт стилей для слайдера
import "slick-carousel/slick/slick-theme.css"; // Импорт темы для слайдера


import typeOfWindow1 from '../../assets/img/modal_calc/balkon/ba_01.png';
import typeOfWindow2 from '../../assets/img/modal_calc/balkon/ba_02.png';
import typeOfWindow3 from '../../assets/img/modal_calc/balkon/ba_03.png';
import typeOfWindow4 from '../../assets/img/modal_calc/balkon/ba_04.png';
import largeImageOfWindow1 from '../../assets/img/modal_calc/balkon/type1.png';
import largeImageOfWindow2 from '../../assets/img/modal_calc/balkon/type2.png';
import largeImageOfWindow3 from '../../assets/img/modal_calc/balkon/type3.png';
import largeImageOfWindow4 from '../../assets/img/modal_calc/balkon/type4.png';

import calculatorStepTwoIconCold from '../../assets/img/modal_calc/icon_cold.png'
import calculatorStepTwoIconWarm from '../../assets/img/modal_calc/icon_warm.png'

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './calculator.scss';
import './mediaCalculator.scss';
import { clientsCreated } from '../formCard/formSlice';
import { closeCalculator  } from '../../features/calculator/calculatorSlice';




const Calculator = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [step, setStep] = useState(0);
	const [prevStep, setPrevStep] = useState(0)
	const [isColdChecked, setIsColdChecked] = useState(false);
	const [isWarmChecked, setIsWarmChecked] = useState(false);
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [error, setError] = useState(null);


    const [windowType, setWindowType] = useState(0);
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const [glazingMaterial, setGlazingMaterial] = useState("plastic");
    const [glazingProfile, setGlazingProfile] = useState();
    const [clientName, setClientName] = useState('');
	const [clientPhone, setClientPhone] = useState('');

    const dispatch = useDispatch();
    const {request} = useHttp();
	const { t } = useTranslation();


    const images = [
        { thumbnail: typeOfWindow1, largeImage: largeImageOfWindow1 },
        { thumbnail: typeOfWindow2, largeImage: largeImageOfWindow2 },
        { thumbnail: typeOfWindow3, largeImage: largeImageOfWindow3 },
        { thumbnail: typeOfWindow4, largeImage: largeImageOfWindow4 },
    ];

    const handleImageChange = (index) => {
        setSelectedImageIndex(index);
        setWindowType(index);
    };

    const handleNextButtonClick = () => {
		setPrevStep(step);
        setStep(step => step + 1);
    }
	const handlePrevButtonClick = () => {
		setStep(step => step - 1);
	};

    const handleRequestAndNextStepButtonClick = (values) => {
        handleNextButtonClick();
        onSubmitHandler(values);
    }

    const onSubmitHandler = (values) => {
        const newClient = {
			id: uuidv4(),
            windowType: windowType,
            width: values.width,
            height: values.height,
            glazingMaterial: glazingMaterial,
            glazingProfile: glazingProfile,
            name: values.clientName,
            phone: values.clientPhone
        }
		// formik.setFieldValue('isFormSubmitted', true);
        request("http://localhost:3001/clients", "POST", JSON.stringify(newClient))
            .then(res => {
				console.log(res, 'Отправка успешна');
				setIsFormSubmitted(true);
				setIsSubmitting(false);
			})
            .then(() => {
				dispatch(clientsCreated(newClient));
				setIsFormSubmitted(false);;
			})
            .catch(err => {
				console.log(err);
				setError(err);
				setIsSubmitting(false);
			});
        setWindowType()
        values.setWidth('')
        values.setHeight('')
        setGlazingMaterial()
        setGlazingProfile()
		values.setClientName('')
		values.setClientPhone('')
    }

	const handleColdCheckboxChange = (event) => {
		setIsColdChecked(event.target.checked);
		if (event.target.checked) {
			setGlazingProfile('Холодное');
			setIsWarmChecked(false);
		} else {
			setGlazingProfile('');
		}
	};
	
	const handleWarmCheckboxChange = (event) => {
		setIsWarmChecked(event.target.checked);
		if (event.target.checked) {
			setGlazingProfile('Теплое');
			setIsColdChecked(false);
		} else {
			setGlazingProfile('');
		}
	};

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === 'Escape') {
                dispatch(closeCalculator());
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [dispatch]);

	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		initialSlide: 0,
		responsive: [
		  {
			breakpoint: 1024,
			settings: {
			  slidesToShow: 3,
			  slidesToScroll: 3,
			  infinite: true,
			  dots: true,
			  arrows : false
			}
		  },
		  {
			breakpoint: 600,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 2,
			  initialSlide: 2,
			  arrows : false
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  initialSlide: 0,
			  arrows : false
			}
		  }
		]
	};


    return (
			<div className="popup_calc open">
				{isFormSubmitted ? (
					<Spinner/>
				) : isSubmitting ? (
					<Spinner/>
				): error ? (
					<ErrorMessage error={error}/>
				) : (
				<Formik
					initialValues={{
						width: '',
						height: '',
						clientName: '',
						clientPhone: '',
						isFormSubmitted: false  
					}}
					validationSchema={Yup.object({
						width: Yup.string()
							.required('Required field!'),
						height: Yup.string()
							.required('Required field!'),
						clientName: Yup.string()
							.min(2, 'At least 2 characters!')
							.required('Required field!'),
						clientPhone: Yup.string()
							.matches(/^\d{5,}$/, 'At least 5 digits!')
							.required('Required field!'),
					})}
					onSubmit={handleRequestAndNextStepButtonClick}
					>
				{formik => (
				<Form>
				<div className="popup_dialog">
					<div className="popup_calc_content">
						<button type="button" className="popup_calc_close" onClick={() => {dispatch(closeCalculator())}}>
							<strong>&times;</strong>
						</button>
						<h2>{t('calculator.calculator')}</h2>
						{step === 0 && (
							<>
								<h3>{t('calculator.choose_the_shape_of_your_balcony')}<br />{t('calculator.and_specify_the_dimensions')}</h3>
								<div className="balcon_icons">
								<Slider {...settings}>
									{images.map((image, index) => (
										<span
											key={index}
											className={`balcon_icons_img ${index === selectedImageIndex ? 'do_image_more' : ''}`}
											onClick={() => handleImageChange(index)}
										>
											<img src={image.thumbnail} alt={`typeOfWindow${index + 1}`} />
										</span>
									))}
								</Slider>
								</div>
								

								<div className="big_img">
									<img src={images[selectedImageIndex].largeImage} alt="selectedImage" />
								</div>

								<div className="popup_calc_content_form">
									<div className="popup_calc_content_form_formControlWidth">
										<Field 
											id="width" 
											type="text" 
											placeholder={t('calculator.width')}
											name="width"
											/>
											<label htmlFor="width">{t('calculator.mm')}</label>
											{formik.touched.width && formik.errors.width && !isFormSubmitted && (
												<div className='error'>{formik.errors.width}</div>
											)}
									</div>
									<div className="popup_calc_content_form_multiplication">
										<strong>&times;</strong>
									</div>
									<div className="popup_calc_content_form_formControlHeight">
										<Field 
											id="height" 
											name="height"
											type="text" 
											placeholder={t('calculator.height')} 
											/>
											<label htmlFor="height">{t('calculator.mm')}</label>
											{formik.touched.height && formik.errors.height && !isFormSubmitted && (
												<div className='error'>{formik.errors.height}</div>
											)}
									</div>
								</div>

								<div className="popup_calc_content_button">
									<button 
										className="button"
										onClick={handleNextButtonClick}>{t('calculator.next')}</button>
								</div>
							</>
						)}

						{step === 1 && (
							<>
								<h3>{t('calculator.choose_the_type_of_glazing')}<br />{t('calculator.and_his_profile')}</h3>
				
								<select className="form-control" name="view" id="view_type" onChange={(event) => setGlazingMaterial(event.target.value)}>
									<option value="wood">{t('calculator.wooden_glazing')}</option>
									<option value="aluminum">{t('calculator.aluminum_glazing')}</option>
									<option value="plastic">{t('calculator.glazing_with_plastic_frames')}</option>
									<option value="french">{t('calculator.panoramic_glazing')}</option>
									<option value="overhang">{t('calculator.glazing_with_a_bow')}</option>
								</select>

								<div className="popup_calc_content_cold">
									<label>
										<img src={calculatorStepTwoIconCold} alt="calculatorStepTwoIconCold" />
										<Field className="checkbox" type="checkbox" name="checkbox-test" checked={isColdChecked} onChange={handleColdCheckboxChange} />
										<span className="checkbox-custom" id="cold"></span>
										<span className="label">{t('calculator.cold')}</span>
									</label>
								</div>
									
								<div className="popup_calc_content_warm">
									<label>
										<img src={calculatorStepTwoIconWarm} alt="calculatorStepTwoIconWarm"/>
										<Field className="checkbox" type="checkbox" name="checkbox-test" checked={isWarmChecked} onChange={handleWarmCheckboxChange}/>
										<span className="checkbox-custom" id="warm"></span>
										<span className="label">{t('calculator.warm')}</span>
									</label>
								</div>

								<div className="popup_calc_content_button">
									<button className="button" onClick={handleNextButtonClick}>{t('calculator.next')}</button>
									<button className="prevButton" onClick={handlePrevButtonClick}>{t('calculator.back')}</button>
								</div>
							</>
						)}

						{step === 2 && (
							<>
								<h3>{t('calculator.thank_you_for_contacting_us')} <br/>{t('calculator.leave_your_contact_info')}</h3>
								<div className="popup_calc_forma" action="#">
									<Field 
										id="clientName" 
										className="popup_calc_form-control form_input" 
										name="clientName" 
										type="text" 
										placeholder={t('calculator.enter_your_name')}
										/>
										{formik.touched.clientName && formik.errors.clientName && !isFormSubmitted && (
											<div className='error'>{formik.errors.clientName}</div>
										)}
									<Field  
										id="clientPhone" 
										className="popup_calc_form-control form_input" 
										name="clientPhone" 
										type="text" 
										placeholder={t('calculator.enter_your_phone')}
										/>
										{formik.touched.clientPhone && formik.errors.clientPhone && !isFormSubmitted && (
											<div className='error'>{formik.errors.clientPhone}</div>
										)}
									<p className="popup_calc_notice">{t('calculator.we_will_contact_in_10_minutes')}</p>
								</div>

								<div className="popup_calc_content_button">
									<button 
										className="button"
										type="submit" 
										name="submit"
										disabled={!formik.isValid || formik.isSubmitting} 
										>{t('calculator.calculate_the_cost')}</button>
									<button className="prevButton" onClick={handlePrevButtonClick}>{t('calculator.back')}</button>
									<p className="form_notice">{t('calculator.your_information_is_private')}</p>
								</div>
								
							</>
						)}

						{step === 3 && (
							<>
								<h3>{t('calculator.data_sent')}<br/>{t('calculator.call_you_back_in_10_minutes')}</h3>
								<div className="popup_calc_content_button">
									<button
										className="button" 
										onClick={() => {dispatch(closeCalculator())}}>{t('calculator.close_the_calculator')}
									</button>
								</div>
							</>
						)}
						
					</div>
				</div>
				</Form>
				)}
				</Formik>
				)}
			</div>
    );
};

export default Calculator;
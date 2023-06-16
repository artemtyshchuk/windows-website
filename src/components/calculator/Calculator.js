import { useState, useEffect } from 'react';
import {useHttp} from '../../hooks/http.hook'; //для того чтобы делать запрос

import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';


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

import './calculator.scss';
import { closeCalculatorInCalculatorSlice } from './calculatorSlice';
import { clientsCreated } from '../formCard/formSlice';




const Calculator = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [step, setStep] = useState(0);
    // const isCalculatorOpen = useSelector(state => state.glazing.openCalculator);

    const [windowType, setWindowType] = useState();
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const [glazingMaterial, setGlazingMaterial] = useState();
    const [glazingProfile, setGlazingProfile] = useState();
    const [clientName, setClientName] = useState('');
	const [clientPhone, setClientPhone] = useState('');

    const dispatch = useDispatch();
    const {request} = useHttp();

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
        setStep(step => step + 1);
    }

    const handleRequestAndNextStepButtonClick = (e) => {
        handleNextButtonClick();
        onSubmitHandler(e);
    }

    const onSubmitHandler = (e) => {
		e.preventDefault();
        const newClient = {
			id: uuidv4(),
            windowType: windowType,
            width: width,
            height: height,
            glazingMaterial: glazingMaterial,
            glazingProfile: glazingProfile,
            name: clientName,
            phone: clientPhone
        }
        request("http://localhost:3001/clients", "POST", JSON.stringify(newClient))
            .then(res => console.log(res, 'Отправка успешна'))
            .then(dispatch(clientsCreated(newClient)))
            .catch(err => console.log(err));
        setWindowType()
        setWidth('')
        setHeight('')
        setGlazingMaterial()
        setGlazingProfile()
		setClientName('')
		setClientPhone('')
    }

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === 'Escape') {
                dispatch(closeCalculatorInCalculatorSlice());
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [dispatch]);


    return (
        <>
            {/* {isCalculatorOpen && ( */}
                <div className="popup_calc open">
                    <div className="popup_dialog">
                        <div className="popup_calc_content">
                            <button type="button" className="popup_calc_close" onClick={() => dispatch(closeCalculatorInCalculatorSlice())}>
                                <strong>&times;</strong>
                            </button>
                            <h2>Калькулятор</h2>
                            {step === 0 && (
                                <>
                                    <h3>Выберите форму балкона<br />и укажите размеры</h3>
                                    <div className="balcon_icons">
                                        {images.map((image, index) => (
                                            <span
                                                key={index}
                                                className={`balcon_icons_img ${index === selectedImageIndex ? 'do_image_more' : ''}`}
                                                onClick={() => handleImageChange(index)}
                                            >
                                                <img src={image.thumbnail} alt={`typeOfWindow${index + 1}`} />
                                            </span>
                                        ))}
                                    </div>

                                    <div className="big_img">
                                        <img src={images[selectedImageIndex].largeImage} alt="selectedImage" />
                                    </div>

                                    <div className="popup_calc_content_form">
                                        <div className="popup_calc_content_form_formControlWidth">
                                            <input id="width" type="text" placeholder="Ширина" required onChange={(e) => setWidth(e.target.value)}/>
                                            <label htmlFor="width">м</label>
                                        </div>
                                        <div className="popup_calc_content_form_multiplication">
                                            <strong>&times;</strong>
                                        </div>
                                        <div className="popup_calc_content_form_formControlHeight">
                                            <input id="height" type="text" placeholder="Высота" required onChange={(e) => setHeight(e.target.value)}/>
                                            <label htmlFor="height">мм</label>
                                        </div>
                                    </div>

                                    <div className="popup_calc_content_button">
                                        <button className="button" onClick={handleNextButtonClick}>Далее</button>
                                    </div>
                                </>
                            )}

                            {step === 1 && (
                                <>
                                    <h3>Выберите тип остекления<br />и его профиль</h3>
                    
                                    <select className="form-control" name="view" id="view_type" onChange={(event) => setGlazingMaterial(event.target.value)}>
                                        <option value="wood">Деревянное остекление</option>
                                        <option value="aluminum">Алюминиевое остекление</option>
                                        <option value="plastic">Остекление пластиковыми рамами</option>
                                        <option value="french">Панорамное остекление</option>
                                        <option value="overhang">Остекление с выносом</option>
                                    </select>

                                    <div className="popup_calc_content_cold">
                                        <div className="stepTwo_coldIcon">
                                            <img src={calculatorStepTwoIconCold} alt="calculatorStepTwoIconCold" />
                                        </div>
                                            <label>
                                                <input className="checkbox" type="checkbox" name="checkbox-test" onChange={(event) => setGlazingProfile(event.target.checked ? 'Холодное' : '')}/>
                                                <span className="checkbox-custom" id="cold"></span>
                                                <span className="label">Холодное</span>
                                            </label>
                                    </div>
                                        
                                    <div className="popup_calc_content_warm">
                                        <div className="stepTwo_warmIcon">
								            <img src={calculatorStepTwoIconWarm} alt="calculatorStepTwoIconWarm"/>
                                        </div>
								        <label>
										    <input className="checkbox" type="checkbox" name="checkbox-test" onChange={(event) => setGlazingProfile(event.target.checked ? 'Теплое' : '')}/>
										    <span className="checkbox-custom" id="warm"></span>
										    <span className="label">Теплое</span>
								        </label>
                                    </div>

                                    <div className="popup_calc_content_button">
                                        <button className="button" onClick={handleNextButtonClick}>Далее</button>
                                    </div>
                                </>
                            )}

                            {step === 2 && (
                                <>
                                    <h3>Спасибо за обращение! <br/>Оставьте свои данные</h3>
                                    <form className="form" action="#">
                                        <input className="form-control form_input" name="user_name" required type="text" placeholder="Введите ваше имя" onChange={(event) => setClientName(event.target.value)}/>
                                        <input className="form-control form_input" name="user_phone" required type="text" placeholder="Введите телефон" onChange={(event) => setClientPhone(event.target.value)}/>
                                        <p className="form_notice">Перезвоним в течение 10 минут</p>
                                        <p className="form_notice_confidential">Ваши данные конфиденциальны</p>
									</form>

                                    <div className="popup_calc_content_button">
                                        <button className="button" onClick={handleRequestAndNextStepButtonClick}>Рассчитать стоимость</button>
                                    </div>
                                </>
                            )}

                            {step === 3 && (
                                <>
                                    <h3>Данные отправлены!<br/>Наш специалист свяжется с вами в течении 10 минут. </h3>
                                    <div className="popup_calc_content_button">
                                        <button className="button" onClick={handleNextButtonClick}>Закрыть калькулятор</button>
                                    </div>
                                </>
                            )}
                            
                        </div>
                    </div>
                </div>
            {/* )} */}
        </>
    );
};

export default Calculator;
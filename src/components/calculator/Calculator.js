import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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
import FormCard from '../formCard/FormCard';



const Calculator = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [step, setStep] = useState(0);
    const isCalculatorOpen = useSelector(state => state.glazing.openCalculator);
    const dispatch = useDispatch();

    const images = [
        { thumbnail: typeOfWindow1, largeImage: largeImageOfWindow1 },
        { thumbnail: typeOfWindow2, largeImage: largeImageOfWindow2 },
        { thumbnail: typeOfWindow3, largeImage: largeImageOfWindow3 },
        { thumbnail: typeOfWindow4, largeImage: largeImageOfWindow4 },
    ];

    const handleImageChange = (index) => {
        setSelectedImageIndex(index);
    };

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

    const handleNextButtonClick = () => {
        setStep(step => step + 1);
    }

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
                                            <input id="width" type="text" placeholder="Ширина" required />
                                            <label htmlFor="width">м</label>
                                        </div>
                                        <div className="popup_calc_content_form_multiplication">
                                            <strong>&times;</strong>
                                        </div>
                                        <div className="popup_calc_content_form_formControlHeight">
                                            <input id="height" type="text" placeholder="Высота" required />
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
                    
                                    <select className="form-control" name="view" id="view_type">
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
                                                <input className="checkbox" type="checkbox" name="checkbox-test"/>
                                                <span className="checkbox-custom" id="cold"></span>
                                                <span className="label">Холодное</span>
                                            </label>
                                    </div>
                                        
                                    <div className="popup_calc_content_warm">
                                        <div className="stepTwo_warmIcon">
								            <img src={calculatorStepTwoIconWarm} alt="calculatorStepTwoIconWarm"/>
                                        </div>
								        <label>
										    <input className="checkbox" type="checkbox" name="checkbox-test"/>
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
                                        <input className="form-control form_input" name="user_name" required type="text" placeholder="Введите ваше имя"/>
                                        <input className="form-control form_input" name="user_phone" required type="text" placeholder="Введите телефон"/>
                                        <p className="form_notice">Перезвоним в течение 10 минут</p>
                                        <p className="form_notice_confidential">Ваши данные конфиденциальны</p>
									</form>

                                    <div className="popup_calc_content_button">
                                        <button className="button" onClick={handleNextButtonClick}>Рассчитать стоимость</button>
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
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

import './calculator.scss';
import { closeCalculatorInCalculatorSlice } from './calculatorSlice';


const Calculator = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const isCalculatorOpen = useSelector(state => state.glazing.isCalculatorOpen);
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

    return (
        <>
            {isCalculatorOpen && (
                <div className="popup_calc open">
                    <div className="popup_dialog">
                        <div className="popup_calc_content">
                            <button type="button" className="popup_calc_close" onClick={() => dispatch(closeCalculatorInCalculatorSlice())}>
                                <strong>&times;</strong>
                            </button>
                            <h2>Калькулятор</h2>
                            <h3>
                                Выберите форму балкона
                                <br />
                                и укажите размеры
                            </h3>
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
                                <button className="button">Далее</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Calculator;
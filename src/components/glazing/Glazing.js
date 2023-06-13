import { useState, useCallback, useRef} from 'react';

import first from '../../assets/img/glazing/icons/1.png';
import second from '../../assets/img/glazing/icons/2.png';
import third from '../../assets/img/glazing/icons/3.png';
import forth from '../../assets/img/glazing/icons/4.png';
import fifth from '../../assets/img/glazing/icons/5.png';

import './glazing.scss'

import {dataGlazing} from './dataGlazing';
import  Calculator  from '../calculator/Calculator'
import { motion } from 'framer-motion';

const Glazing = () => {

    const [selectedData, setSelectedData] = useState({
        cold: dataGlazing[0].wood[0].cold[0],
        warm: dataGlazing[0].wood[0].warm[0]
    });
    const [activeDiv, setActiveDiv] = useState(0);
    const divRef = useRef(null);
    const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

    
    const handleClick = useCallback((data, event, index) => {
        event.preventDefault();
        setSelectedData({
          cold: data.cold[0],
          warm: data.warm[0]
        });
        setActiveDiv(index);
        if (divRef.current) {
            divRef.current.classList.remove('_active');
        }
          
        const currentElement = event.currentTarget;
        currentElement.classList.add('_active');
        divRef.current = currentElement;
        
        console.log(1)
    }, [setSelectedData]);
    
    const handleOpenCalculator = () => {
        setIsCalculatorOpen(true);
        console.log('Form is opened');
    }

    const handleCloseCalculator = () => {
        setIsCalculatorOpen(false);
      };


    return (
        <div className="glazing">
            <div className="container">

                <div className="section_header">
                    <h2>Остекление балконов и лоджий</h2>
                    <div className="section_header_sub"></div>
                </div>

                <div className="glazing_slider">
		
                    <div className={`glazing_block${activeDiv === 0 ? '_active' : ''}`} onClick={(event) => handleClick(dataGlazing[0].wood[0], event, 0)}>
                        <img src={first} alt="firstIcon" />
                        <a className="tree_link" href="http.git.com">Деревянное <br/>остекление</a>
                    </div>

                    <div className={`glazing_block${activeDiv === 1 ? '_active' : ''}`} onClick={(event) => handleClick(dataGlazing[0].aluminum[0], event, 1)}>
                        <img src={second} alt="secondIcon" />
                        <a className="aluminum_link" href="http.git.com">Алюминиевое <br/>остекление</a>
                    </div>

                    <div className={`glazing_block${activeDiv === 2 ? '_active' : ''}`} onClick={(event) => handleClick(dataGlazing[0].plastic[0], event, 2)}>
                        <img src={third} alt="thirdIcon" />
                        <a className="plastic_link" href="http.git.com">Остекление <br/>пластиковыми <br/>рамами</a>
                    </div>

                    <div className={`glazing_block${activeDiv === 3 ? '_active' : ''}`} onClick={(event) => handleClick(dataGlazing[0].french[0], event, 3)}>
                        <img src={forth} alt="forthIcon" />
                        <a className="french_link" href="http.git.com">Французское <br/>остекление <br/>(панорамное)</a>
                    </div>

                    <div className={`glazing_block${activeDiv === 4 ? '_active' : ''}`} onClick={(event) => handleClick(dataGlazing[0].rise[0], event, 4)}>
                        <img src={fifth} alt="fifthIcon" />
                        <a className="rise_link" href="http.git.com" >Остекление <br/>с выносом</a>
                    </div>
		        </div>

                <div className="glazing_content">
                    <motion.div className='glazing_card' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                        <div className='glazing_card'>
                            <div className="glazing_cold">
                                <h3>Холодное</h3>
                                <img src={selectedData.cold.image} alt="coldImage"></img>
                                <ul>
                                    <li>{selectedData.cold.thickness}</li>
                                    <li>Остекление: {selectedData.cold.glazing}</li>
                                    <li>Теплоизоляция: {selectedData.cold.thermalInsulation} м<sup>2</sup> * С/Вт</li>
                                    <li>Звукоизоляция: {selectedData.cold.soundproofing}</li>
                                </ul>
                            </div>
                            <div className='glazing_price'>
                                <p>{selectedData.cold.price} руб.кв.м.<br/><span>под ключ с установкой</span></p>
                                <button className="button glazing_price_btn text-uppercase popup_calc_btn" onClick={handleOpenCalculator}>Рассчитать стоимость</button>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className='glazing_card' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                        <div className='glazing_card'>
                            <div className="glazing_warm">
                                <h3>теплое</h3>
                                <img src={selectedData.warm.image} alt="coldImage"></img>
                                <ul>
                                    <li>{selectedData.warm.thickness}</li>
                                    <li>Остекление: {selectedData.warm.glazing}</li>
                                    <li>Теплоизоляция: {selectedData.warm.thermalInsulation} м<sup>2</sup> * С/Вт</li>
                                    <li>Звукоизоляция: {selectedData.warm.soundproofing}</li>
                                </ul>
                            </div>
                            <div className="glazing_price">
                                    <p>{selectedData.warm.price} руб.кв.м.<br/><span>под ключ с установкой</span></p>
                                    <button className="button glazing_price_btn text-uppercase popup_calc_btn" onClick={handleOpenCalculator}>Рассчитать стоимость</button>
                            </div>
                        </div>
                    </motion.div>
                </div>
                {isCalculatorOpen && <Calculator handleCloseCalculator={handleCloseCalculator} />}

            </div>
        </div>
    )
}

export default Glazing;
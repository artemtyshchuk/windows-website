import { useState, useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

import first from '../../assets/img/glazing/icons/1.png';
import second from '../../assets/img/glazing/icons/2.png';
import third from '../../assets/img/glazing/icons/3.png';
import forth from '../../assets/img/glazing/icons/4.png';
import fifth from '../../assets/img/glazing/icons/5.png';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Импорт стилей для слайдера
import "slick-carousel/slick/slick-theme.css"; // Импорт темы для слайдера

import './glazing.scss';
import './mediaGlazing.scss';

import { dataGlazing } from './dataGlazing';
import { openCalculator } from '../../features/calculator/calculatorSlice';


const Glazing = () => {
	const [selectedData, setSelectedData] = useState({
		cold: dataGlazing[0].wood[0].cold[0],
		warm: dataGlazing[0].wood[0].warm[0],
	});
	const [activeDiv, setActiveDiv] = useState(0);
	const divRef = useRef(null);

	const dispatch = useDispatch();

	const handleClick = useCallback((data, event, index) => {
		event.preventDefault();
		setSelectedData({
			cold: data.cold[0],
			warm: data.warm[0],
		});
		setActiveDiv(index);
		if (divRef.current) {
			divRef.current.classList.remove('_active');
		}

		const currentElement = event.currentTarget;
		currentElement.classList.add('_active');
		divRef.current = currentElement;

		console.log(1);
	}, [setSelectedData]);

	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 5,
		initialSlide: 0,
		responsive: [
		  {
			breakpoint: 1024,
			settings: {
			  slidesToShow: 3,
			  slidesToScroll: 3,
			  infinite: true,
			  dots: true
			}
		  },
		  {
			breakpoint: 600,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 2,
			  initialSlide: 2
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  initialSlide: 0,
			  className: '_active' 
			}
		  }
		]
	};


	return (
		<div className="glazing">
			<div className="container">
				<div className="section_header">
					<h2>Остекление балконов и лоджий</h2>
					<div className="section_header_sub"></div>
				</div>
				<div className="glazing_slider">
				<Slider {...settings}>
					<div
						className={`glazing_block${activeDiv === 0 ? '_active' : ''}`}
						onClick={(event) => handleClick(dataGlazing[0].wood[0], event, 0)}>
						<img src={first} alt="firstIcon" />
						<a className="tree_link" href="http.git.com">Деревянное <br/>остекление</a>
					</div>
				

					<div
						className={`glazing_block${activeDiv === 1 ? '_active' : ''}`}
						onClick={(event) => handleClick(dataGlazing[0].aluminum[0], event, 1)}
					>
						<img src={second} alt="secondIcon" />
						<a className="aluminum_link" href="http.git.com">
							Алюминиевое <br />
							остекление
						</a>
					</div>

					<div
						className={`glazing_block${activeDiv === 2 ? '_active' : ''}`}
						onClick={(event) => handleClick(dataGlazing[0].plastic[0], event, 2)}
					>
						<img src={third} alt="thirdIcon" />
						<a className="plastic_link" href="http.git.com">
							Остекление <br />
							пластиковыми <br />
							рамами
						</a>
					</div>

					<div
						className={`glazing_block${activeDiv === 3 ? '_active' : ''}`}
						onClick={(event) => handleClick(dataGlazing[0].french[0], event, 3)}
					>
						<img src={forth} alt="forthIcon" />
						<a className="french_link" href="http.git.com">
							Французское <br />
							остекление <br />
							(панорамное)
						</a>
					</div>

					<div
						className={`glazing_block${activeDiv === 4 ? '_active' : ''}`}
						onClick={(event) => handleClick(dataGlazing[0].rise[0], event, 4)}
					>
						<img src={fifth} alt="fifthIcon" />
						<a className="rise_link" href="http.git.com">
							Остекление <br />
							с выносом
						</a>
					</div>
				</Slider>
				</div>

				<div className="glazing_content">
					<motion.div className="glazing_card" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
						<div className="glazing_card">
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
							<div className="glazing_price">
								<p>
									{selectedData.cold.price} грн.кв.м.
									<br />
									<span>под ключ с установкой</span>
								</p>
								<button className="button glazing_price_btn text-uppercase popup_calc_btn" onClick={() => dispatch(openCalculator())}>
									Рассчитать стоимость
								</button>
							</div>
						</div>
					</motion.div>
					<motion.div className="glazing_card" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
						<div className="glazing_card">
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
								<p>
									{selectedData.warm.price} грн.кв.м.
									<br />
									<span>под ключ с установкой</span>
								</p>
								<button className="button glazing_price_btn text-uppercase popup_calc_btn" onClick={() => dispatch(openCalculator())}>
									Рассчитать стоимость
								</button>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Glazing;
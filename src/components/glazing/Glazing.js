import { useState, useCallback, useRef, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
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

import Spinner from '../spinner/Spinner';
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

	const { t } = useTranslation();

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
	}, [setActiveDiv, setSelectedData]);

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
			}
		  }
		]
	};

	const topAnimation = {
		hidden: {
			y: 100,
			opacity: 0,
		},
		visible: custom => ({
			y: 0,
			opacity: 1,
			transition: {delay: custom * 0.2},
		}),
	}

	const lineAnimation = {
		hidden: {
			y: 100,
			opacity: 0,
		},
		visible: custom => ({
			y: 0,
			opacity: 1,
			transition: {delay: custom * 0.2},
		}),
	}


	return (
		<motion.div 
			className="glazing"
			initial="hidden"
			whileInView="visible"
			viewport={{ amount: 0.1 }}>
			<div className="container">
				<div className="section_header">
					<motion.h2 custom={1} variants={topAnimation}>{t('glazing.glazing_balconies_and_loggias')}</motion.h2>
					<div className="section_header_sub"></div>
				</div>
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ amount: 0.2 }} 
					className="glazing_slider">
				<Slider {...settings}>
					<motion.div
						custom={1} 
						variants={lineAnimation}
						className={`glazing_block${activeDiv === 0 ? '_active' : ''}`}
						onClick={(event) => handleClick(dataGlazing[0].wood[0], event, 0)}>
						<img src={first} alt="firstIcon" />
						<a className="tree_link" href="#g">
						{t('glazing.wooden')} <br/>
							{t('glazing.glazing')}
						</a>
					</motion.div>
				

					<motion.div
						custom={2} 
						variants={lineAnimation}
						className={`glazing_block${activeDiv === 1 ? '_active' : ''}`}
						onClick={(event) => handleClick(dataGlazing[0].aluminum[0], event, 1)}
					>
						<img src={second} alt="secondIcon" />
						<a className="aluminum_link" href="#g">
						{t('glazing.aluminum')} <br />
							{t('glazing.glazing')}
						</a>
					</motion.div>

					<motion.div
						custom={3} 
						variants={lineAnimation}
						className={`glazing_block${activeDiv === 2 ? '_active' : ''}`}
						onClick={(event) => handleClick(dataGlazing[0].plastic[0], event, 2)}
					>
						<img src={third} alt="thirdIcon" />
						<a className="plastic_link" href="#g">
						{t('glazing.plastic')} <br />
							{t('glazing.glazing')}
						</a>
					</motion.div>

					<motion.div
						custom={4} 
						variants={lineAnimation}
						className={`glazing_block${activeDiv === 3 ? '_active' : ''}`}
						onClick={(event) => handleClick(dataGlazing[0].french[0], event, 3)}
					>
						<img src={forth} alt="forthIcon" />
						<a className="french_link" href="#g">
						{t('glazing.french')} <br />
							{t('glazing.glazing')}
						</a>
					</motion.div>

					<motion.div
						custom={5} 
						variants={lineAnimation}
						className={`glazing_block${activeDiv === 4 ? '_active' : ''}`}
						onClick={(event) => handleClick(dataGlazing[0].rise[0], event, 4)}
					>
						<img src={fifth} alt="fifthIcon" />
						<a className="rise_link" href="#g">
						{t('glazing.glazing')} <br />
						{t('glazing.outboard')}
						</a>
					</motion.div>
				</Slider>
				</motion.div>

				<div className="glazing_content">
					<motion.div className="glazing_card" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
						<div className="glazing_card">
							<div className="glazing_cold">
								<h3>{t('glazing.cold')}</h3>
								{/* <Suspense fallback={<Spinner/>} ></Suspense> */}
								<img src={selectedData.cold.image} alt="coldImage"></img>
								<ul>
									<li>{t('glazing.structural_thickness')} {selectedData.cold.thickness}</li>
									<li>{t('glazing.glazing')}: {selectedData.cold.glazing}</li>
									<li>{t('glazing.thermal_insulation')}: {selectedData.cold.thermalInsulation} m.<sup>2</sup></li>
									<li>{t('glazing.sound_insulation')}: {selectedData.cold.soundproofing}</li>
								</ul>
							</div>
							<div className="glazing_price">
								<p>
									{selectedData.cold.price} {t('UAH_sq_m_')}
									<br />
									<span>{t('glazing.turnkey_installation')}</span>
								</p>
								<button className="button glazing_price_btn text-uppercase popup_calc_btn" onClick={() => dispatch(openCalculator())}>
								{t('glazing.calculate_the_cost')}
								</button>
							</div>
						</div>
					</motion.div>
					<motion.div className="glazing_card" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
						<div className="glazing_card">
							<div className="glazing_warm">
								<h3>{t('glazing.warm')}</h3>
								<img src={selectedData.warm.image} alt="coldImage"></img>
								<ul>
									<li>{t('glazing.structural_thickness')} {selectedData.warm.thickness}</li>
									<li>{t('glazing.glazing')}: {selectedData.warm.glazing}</li>
									<li>{t('glazing.thermal_insulation')}: {selectedData.warm.thermalInsulation} m.<sup>2</sup></li>
									<li>{t('glazing.sound_insulation')}: {selectedData.warm.soundproofing}</li>
								</ul>
							</div>
							<div className="glazing_price">
								<p>
									{selectedData.warm.price} {t('UAH_sq_m_')}
									<br />
									<span>{t('glazing.turnkey_installation')}</span>
								</p>
								<button className="button glazing_price_btn text-uppercase popup_calc_btn" onClick={() => dispatch(openCalculator())}>
								{t('glazing.calculate_the_cost')}
								</button>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</motion.div>
	);
};

export default Glazing;
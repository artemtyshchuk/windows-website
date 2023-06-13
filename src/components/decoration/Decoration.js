
import './decoration.scss';

import { useState, useCallback, useRef} from 'react';
import FormCard from '../formCard/FormCard';
import { motion } from 'framer-motion';
import { dataDecoration } from './dataDecoration';

const Decoration = () => {
	const [selectedData, setSelectedData] = useState(dataDecoration[0].interiorDecoration[0]);
	const [activeDiv, setActiveDiv] = useState(0);
	const divRef = useRef(null);

	
	const handleClick = useCallback((data, event, index) => {
		event.preventDefault();
		setSelectedData(data);
		setActiveDiv(index);
		
	
		if (divRef.current) {
		  divRef.current.classList.remove('_active');
		}
		
		const currentElement = event.currentTarget;
		currentElement.classList.add('_active');
		divRef.current = currentElement;
	
		console.log(1);
	}, [setSelectedData]);



	return (
		<div className="decoration">

			<div className="section_header">
				<h2>ЗАКАЖИТЕ ОТДЕЛКУ БАЛКОНА СО СКИДКОЙ 60%!</h2>
				<div className="section_header_sub"></div>
			</div>

			<div className="decoration_slider">
				<div className={`decoration_item${activeDiv === 0 ? '_active' : ''}`}>
					<div 
						className="internal_link no_click" 
						onClick={(event) => handleClick(dataDecoration[0].interiorDecoration[0], event, 0)}>
						<a href='http.git.com'>Внутренняя отделка</a>
					</div>
				</div>

				<div className={`decoration_item${activeDiv === 1 ? '_active' : ''}`}>
					<div 
						className="external_link no_click" 
						onClick={(event) => handleClick(dataDecoration[0].exteriorDecoration[0], event, 1)}>
						<a href='http.git.com'>Внешняя отделка</a>
					</div>
				</div>

				<div className={`decoration_item${activeDiv === 2 ? '_active' : ''}`}>
					<div 
						className="rising_link no_click" 
						onClick={(event) => handleClick(dataDecoration[0].remoteGlazing[0], event, 2)}>
						<a href='http.git.com'>Выносное остекление</a>
					</div>
				</div>

				<div className={`decoration_item${activeDiv === 3 ? '_active' : ''}`}>
					<div 
						className="roof_link no_click" 
						onClick={(event) => handleClick(dataDecoration[0].balconyRoof[0], event, 3)}>
						<a href='http.git.com'>Крыша на балкон</a>
					</div>
				</div>
			</div>

			<div className="decoration_content">
				<motion.div className="decoration_content_img" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
    				<img src={selectedData.imageMain} alt="decorationImage" />
				</motion.div>

  				<div className="decoration_content_wrapper">
    				{selectedData.items.map((item, index) => (
            		<motion.div key={item.id} className="decoration_content_material" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: index * 0.2 }}>
						<img src={item.image} alt="itemImage" />
						<h3>{item.title}</h3>
						<p>{item.price} грн. кв.м.<span>с материалом</span></p>
					</motion.div>
    				))}
  				</div>

				<motion.div className="decoration_content_form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: selectedData.items.length * 0.1 }}>
					<FormCard className="decoration_content_form-component" />
				</motion.div>
			</div>

		</div>
			
	)
}

export default Decoration
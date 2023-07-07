import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import firstPictureOfWork from '../../assets/img/our_works/big_img/1.png'
import secondPictureOfWork from '../../assets/img/our_works/big_img/2.png'
import thirdPictureOfWork from '../../assets/img/our_works/big_img/3.png'
import fourthPictureOfWork from '../../assets/img/our_works/big_img/4.png'
import fivethPictureOfWork from '../../assets/img/our_works/big_img/5.png'
import sixthPictureOfWork from '../../assets/img/our_works/big_img/6.png'
import seventhPictureOfWork from '../../assets/img/our_works/big_img/7.png'
import eighthPictureOfWork from '../../assets/img/our_works/big_img/8.png'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './works.scss';
import './mediaWorks.scss';

const Works = () => {

const [selectedImage, setSelectedImage] = useState(null);

const { t } = useTranslation();


const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 4,
	slidesToScroll: 4,
	initialSlide: 0,
	responsive: [
		{
			breakpoint: 1360,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 1095,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 773,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				initialSlide: 2,
				arrows : false,

			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows : false,
				autoplay: true,
				speed: 2000,
				autoplaySpeed: 2000,
			}
		}
	]
};

const handleImageClick = (imageSrc) => {
	setSelectedImage(imageSrc)
}

const handleKeyPress = (event) => {
	if (event.key === 'Escape') {
		setSelectedImage(null);
	}
}

useEffect(() => {
	document.addEventListener('keydown', handleKeyPress);
	return () => {
			document.removeEventListener('keydown', handleKeyPress);
	}
}, [])


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

const worksAnimation = {
	hidden: {
		opacity: 0,
	},
	visible: custom => ({
		opacity: 1,
		transition: {delay: custom * 0.2},
	}),
}




return (
	<motion.div 
		initial="hidden"
		whileInView="visible"
		viewport={{ amount: 0.2, once: true }}
		className="works">
			<div className="section_header">
				<motion.h2 custom={2} variants={topAnimation}>{t('works.our_works')}</motion.h2>
				<div className="section_header_sub"></div>
			</div>
			<>

			<Slider {...settings}>
				<motion.div whileTap={{ scale: 0.9 }} custom={2} variants={topAnimation} className='works_image'><img src={firstPictureOfWork} onClick={() => handleImageClick(firstPictureOfWork)} alt="firstPictureOfWork" /></motion.div>
				<motion.div whileTap={{ scale: 0.9 }} custom={3} variants={topAnimation} className='works_image'><img src={secondPictureOfWork} onClick={() => handleImageClick(secondPictureOfWork)} alt="secondPictureOfWork" /></motion.div>
				<motion.div whileTap={{ scale: 0.9 }} custom={4} variants={topAnimation} className='works_image'><img src={thirdPictureOfWork} onClick={() => handleImageClick(thirdPictureOfWork)} alt="thirdPictureOfWork" /></motion.div>
				<motion.div whileTap={{ scale: 0.9 }} custom={5} variants={topAnimation} className='works_image'><img src={fourthPictureOfWork} onClick={() => handleImageClick(fourthPictureOfWork)} alt="fourthPictureOfWork" /></motion.div>
				<motion.div whileTap={{ scale: 0.9 }} className='works_image'><img src={fivethPictureOfWork} onClick={() => handleImageClick(fivethPictureOfWork)} alt="fivethPictureOfWork" /></motion.div>
				<motion.div whileTap={{ scale: 0.9 }} className='works_image'><img src={sixthPictureOfWork} onClick={() => handleImageClick(sixthPictureOfWork)} alt="sixthPictureOfWork" /></motion.div>
				<motion.div whileTap={{ scale: 0.9 }} className='works_image'><img src={seventhPictureOfWork} onClick={() => handleImageClick(seventhPictureOfWork)} alt="seventhPictureOfWork" /></motion.div>
				<motion.div whileTap={{ scale: 0.9 }} className='works_image'><img src={eighthPictureOfWork} onClick={() => handleImageClick(eighthPictureOfWork)} alt="eighthPictureOfWork" /></motion.div>
			</Slider>
			</>

			{selectedImage && (
				<motion.div initial="hidden"
				whileInView="visible" 
				variants={worksAnimation} className={`overlay ${selectedImage ? 'show' : ''}`} onClick={() => setSelectedImage(null)}>
						<img src={selectedImage} alt="" className={`enlarged_image ${selectedImage ? 'show' : ''}`} />
				</motion.div>
			)}
	</motion.div>
)
}

export default Works;
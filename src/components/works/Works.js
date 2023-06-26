import React, { useState, useEffect } from 'react';

import firstPictureOfWork from '../../assets/img/our_works/big_img/1.png'
import secondPictureOfWork from '../../assets/img/our_works/big_img/2.png'
import thirdPictureOfWork from '../../assets/img/our_works/big_img/3.png'
import fourthPictureOfWork from '../../assets/img/our_works/big_img/4.png'
import fivethPictureOfWork from '../../assets/img/our_works/big_img/5.png'
import sixthPictureOfWork from '../../assets/img/our_works/big_img/6.png'
import seventhPictureOfWork from '../../assets/img/our_works/big_img/7.png'
import eighthPictureOfWork from '../../assets/img/our_works/big_img/8.png'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Импорт стилей для слайдера
import "slick-carousel/slick/slick-theme.css"; // Импорт темы для слайдера

import './works.scss';
import './mediaWorks.scss';

const Works = () => {

const [selectedImage, setSelectedImage] = useState(null);

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




return (
	<div className="works">
			<div className="section_header">
				<h2>Наши работы</h2>
				<div className="section_header_sub"></div>
			</div>
			<>

			<Slider {...settings}>
				<div className='works_image'><img src={firstPictureOfWork} onClick={() => handleImageClick(firstPictureOfWork)} alt="firstPictureOfWork" /></div>
				<div className='works_image'><img src={secondPictureOfWork} onClick={() => handleImageClick(secondPictureOfWork)} alt="secondPictureOfWork" /></div>
				<div className='works_image'><img src={thirdPictureOfWork} onClick={() => handleImageClick(thirdPictureOfWork)} alt="thirdPictureOfWork" /></div>
				<div className='works_image'><img src={fourthPictureOfWork} onClick={() => handleImageClick(fourthPictureOfWork)} alt="fourthPictureOfWork" /></div>
				<div className='works_image'><img src={fivethPictureOfWork} onClick={() => handleImageClick(fivethPictureOfWork)} alt="fivethPictureOfWork" /></div>
				<div className='works_image'><img src={sixthPictureOfWork} onClick={() => handleImageClick(sixthPictureOfWork)} alt="sixthPictureOfWork" /></div>
				<div className='works_image'><img src={seventhPictureOfWork} onClick={() => handleImageClick(seventhPictureOfWork)} alt="seventhPictureOfWork" /></div>
				<div className='works_image'><img src={eighthPictureOfWork} onClick={() => handleImageClick(eighthPictureOfWork)} alt="eighthPictureOfWork" /></div>
			</Slider>
			</>

			{selectedImage && (
				<div className={`overlay ${selectedImage ? 'show' : ''}`} onClick={() => setSelectedImage(null)}>
						<img src={selectedImage} alt="" className={`enlarged_image ${selectedImage ? 'show' : ''}`} />
				</div>
			)}
	</div>
)
}

export default Works;
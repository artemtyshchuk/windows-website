import firstPictureOfWork from '../../assets/img/our_works/big_img/1.png'
import secondPictureOfWork from '../../assets/img/our_works/big_img/2.png'
import thirdPictureOfWork from '../../assets/img/our_works/big_img/3.png'
import fourthPictureOfWork from '../../assets/img/our_works/big_img/4.png'
import fivethPictureOfWork from '../../assets/img/our_works/big_img/5.png'
import sixthPictureOfWork from '../../assets/img/our_works/big_img/6.png'
import seventhPictureOfWork from '../../assets/img/our_works/big_img/7.png'
import eighthPictureOfWork from '../../assets/img/our_works/big_img/8.png'


import './works.scss';
import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Импорт стилей для слайдера
import "slick-carousel/slick/slick-theme.css"; // Импорт темы для слайдера

const Works = () => {

    const [selectedImage, setSelectedImage] = useState(null);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
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
              slidesToScroll: 1
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
            <Slider {...settings}>
                <h4><img src={firstPictureOfWork} onClick={() => handleImageClick(firstPictureOfWork)} alt="firstPictureOfWork" /></h4>
                <h4><img src={secondPictureOfWork} onClick={() => handleImageClick(secondPictureOfWork)} alt="secondPictureOfWork" /></h4>
                <h4><img src={thirdPictureOfWork} onClick={() => handleImageClick(thirdPictureOfWork)} alt="thirdPictureOfWork" /></h4>
                <h4><img src={fourthPictureOfWork} onClick={() => handleImageClick(fourthPictureOfWork)} alt="fourthPictureOfWork" /></h4>
                <h4><img src={fivethPictureOfWork} onClick={() => handleImageClick(fivethPictureOfWork)} alt="fivethPictureOfWork" /></h4>
                <h4><img src={sixthPictureOfWork} onClick={() => handleImageClick(sixthPictureOfWork)} alt="sixthPictureOfWork" /></h4>
                <h4><img src={seventhPictureOfWork} onClick={() => handleImageClick(seventhPictureOfWork)} alt="seventhPictureOfWork" /></h4>
                <h4><img src={eighthPictureOfWork} onClick={() => handleImageClick(eighthPictureOfWork)} alt="eighthPictureOfWork" /></h4>
            </Slider>
            {selectedImage && (
                <div className={`overlay ${selectedImage ? 'show' : ''}`} onClick={() => setSelectedImage(null)}>
                    <img src={selectedImage} alt="" className={`enlarged_image ${selectedImage ? 'show' : ''}`} />
                </div>
            )}
        </div>
    )
}

export default Works;
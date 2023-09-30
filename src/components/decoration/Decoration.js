import { useState, useCallback, useRef } from "react";
import FormCard from "../formCard/FormCard";
import { motion } from "framer-motion";
import { dataDecoration } from "./dataDecoration";
import { useTranslation } from "react-i18next";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Импорт стилей для слайдера
import "slick-carousel/slick/slick-theme.css"; // Импорт темы для слайдера

import "./decoration.scss";
import "./mediaDecoration.scss";

const Decoration = () => {
    const [selectedData, setSelectedData] = useState(
        dataDecoration[0].interiorDecoration[0]
    );
    const [activeDiv, setActiveDiv] = useState(0);
    const divRef = useRef(null);

    const { t } = useTranslation();

    const handleClick = useCallback(
        (data, event, index) => {
            event.preventDefault();
            setSelectedData(data);

            setActiveDiv(index);
            if (divRef.current) {
                divRef.current.classList.remove("_active");
            }
            const currentElement = event.currentTarget;
            currentElement.classList.add("_active");
            divRef.current = currentElement;
        },
        [setSelectedData]
    );

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1160,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                },
            },
        ],
    };

    const topAnimation = {
        hidden: {
            y: 100,
            opacity: 0,
        },
        visible: (custom) => ({
            y: 0,
            opacity: 1,
            transition: { delay: custom * 0.2 },
        }),
    };

    const lineAnimation = {
        hidden: {
            y: 100,
            opacity: 0,
        },
        visible: (custom) => ({
            y: 0,
            opacity: 1,
            transition: { delay: custom * 0.2 },
        }),
    };

    const rightAnimation = {
        hidden: {
            x: -100,
            opacity: 0,
        },
        visible: (custom) => ({
            x: 0,
            opacity: 1,
            transition: { delay: custom * 0.2 },
        }),
    };

    return (
        <motion.div
            className="decoration"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.1, once: true }}
        >
            <div className="section_header">
                <motion.h2 custom={1} variants={topAnimation}>
                    {t("decoration.order")}
                </motion.h2>
                <div className="section_header_sub"></div>
            </div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2, once: true }}
                className="decoration_slider"
            >
                <Slider {...settings}>
                    <motion.div
                        whileTap={{ scale: 0.9 }}
                        custom={1}
                        variants={lineAnimation}
                        className={`decoration_item${
                            activeDiv === 0 ? "_active" : ""
                        }`}
                    >
                        <div
                            className="internal_link no_click"
                            onClick={(event) =>
                                handleClick(
                                    dataDecoration[0].interiorDecoration[0],
                                    event,
                                    0
                                )
                            }
                        >
                            <a href="#h">{t("decoration.interior_trim")}</a>
                        </div>
                    </motion.div>

                    <motion.div
                        whileTap={{ scale: 0.9 }}
                        custom={2}
                        variants={lineAnimation}
                        className={`decoration_item${
                            activeDiv === 1 ? "_active" : ""
                        }`}
                    >
                        <div
                            className="external_link no_click"
                            onClick={(event) =>
                                handleClick(
                                    dataDecoration[0].exteriorDecoration[0],
                                    event,
                                    1
                                )
                            }
                        >
                            <a href="#h">{t("decoration.exterior_finish")}</a>
                        </div>
                    </motion.div>

                    <motion.div
                        whileTap={{ scale: 0.9 }}
                        custom={2}
                        variants={lineAnimation}
                        className={`decoration_item${
                            activeDiv === 2 ? "_active" : ""
                        }`}
                    >
                        <div
                            className="rising_link no_click"
                            onClick={(event) =>
                                handleClick(
                                    dataDecoration[0].remoteGlazing[0],
                                    event,
                                    2
                                )
                            }
                        >
                            <a href="#h">{t("decoration.external_glazing")}</a>
                        </div>
                    </motion.div>

                    <motion.div
                        whileTap={{ scale: 0.9 }}
                        custom={1}
                        variants={lineAnimation}
                        className={`decoration_item${
                            activeDiv === 3 ? "_active" : ""
                        }`}
                    >
                        <div
                            className="roof_link no_click"
                            onClick={(event) =>
                                handleClick(
                                    dataDecoration[0].balconyRoof[0],
                                    event,
                                    3
                                )
                            }
                        >
                            <a href="#h">{t("decoration.balcony_roof")}</a>
                        </div>
                    </motion.div>
                </Slider>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2, once: true }}
                className="decoration_content"
            >
                <motion.div
                    custom={1}
                    variants={rightAnimation}
                    className="decoration_content_img"
                >
                    <img src={selectedData.imageMain} alt="decorationImage" />
                </motion.div>

                <motion.div className="decoration_content_wrapper">
                    {selectedData.items.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="decoration_content_material"
                        >
                            <img src={item.image} alt="itemImage" />
                            <h3>{item.title}</h3>
                            <p>
                                {item.price} {t("UAH_sq_m_")}
                                <span>{t("decoration.with_material")}</span>
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="decoration_content_form">
                    <FormCard className="decoration_content_form-component" />
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Decoration;

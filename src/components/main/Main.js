import quality from '../../assets/img/main/icons/quality.png';
import time from '../../assets/img/main/icons/time.png';
import guaranty from '../../assets/img/main/icons/guaranty.png';
import delivery from '../../assets/img/main/icons/delivery.png';

import { useState } from 'react';


import FormCard from '../formCard/FormCard';
import './main.scss';
import './mediaMain.scss';



const Main = () => {

    return (
        <div className='main'>
            <div className="container">
                <div className="row">
                    <h1><span>Остекление балконов "под ключ"<br/></span>за 12 800 гривен!</h1>
                    <div className="main_features">

                        <div className="main_features_block">
                            <img src={quality} alt="qualityIcon" />
                            <p>Высокое <br/>качество</p>
                        </div>

                        <div className="main_features_block">
                            <img src={time} alt="timeIcon" />
                            <p>Быстрый <br/>монтаж</p>
                        </div>

                        <div className="main_features_block">
                            <img className="small_img" src={guaranty} alt="guarantyIcon" />
                            <p>Гарантия <br/>3 года</p>
                        </div>

                        <div className="main_features_block">
                            <img className="small_img" src={delivery} alt="" />
                            <p>Вывоз <br/>мусора</p>
                        </div>

                    </div>

                    <div className="form main_form">
                        <FormCard/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Main;
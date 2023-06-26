import { useEffect, useState } from 'react';

import FormCard from '../formCard/FormCard';

import './promotion.scss';
import './mediaPromotion.scss';


const Promotion = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00'
    });

    useEffect(() => {
        const targetDate = new Date('December 31, 2023 23:59:59').getTime();

        const updateTimer = () => {
            const now = new Date().getTime();
            const timeDifference = targetDate - now;
      
            if (timeDifference <= 0) {
              clearInterval(timer);
              return;
            }
      
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000).toString().padStart(2, '0');
      
            setTimeLeft({ days, hours, minutes, seconds });
        };
        

        const timer = setInterval(updateTimer, 1000);
        updateTimer();
        return () => clearInterval(timer)
    }, [])


    return (
        <div className="sale">
            <div className="sale_wrapper">

                <h2 className="sale_title">Акция - 60%</h2>
                <p className="sale_subtitle">Успей сэкономить на остеклении!<br/> Только до 18 декабря!</p>
                <div className="timer1" id="timer">
                    <h4>ДО ЗАВЕРШЕНИЯ АКЦИИ:</h4>
                    <div className="container1">
                            <div className="numbers1"><div><span id="days">{timeLeft.days}</span></div><div className="description1">Дней</div></div>
                            <div className="numbers1"><div><span id="hours">{timeLeft.hours}</span></div><div className="description1">Часов</div></div>
                            <div className="numbers1"><div><span id="minutes">{timeLeft.minutes}</span></div><div className="description1">Минут</div></div>
                            <div className="numbers1"><div><span id="seconds">{timeLeft.seconds}</span></div><div className="description1">Секунд</div></div>      
                    </div>
                </div>

                <div className="sale_form">
                    <FormCard className="sale_form-component"/>
                </div>
            </div>
        </div>
    )
}

export default Promotion
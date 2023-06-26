import firstPictureOfGuarantees from '../../assets/img/guarantees/1.png'
import secondPictureOfGuarantees from '../../assets/img/guarantees/2.png'
import thirdPictureOfGuarantees from '../../assets/img/guarantees/3.png'
import fourthPictureOfGuarantees from '../../assets/img/guarantees/4.png'
import fivethPictureOfGuarantees from '../../assets/img/guarantees/5.png'
import sixthPictureOfGuarantees from '../../assets/img/guarantees/6.png'


import './guarantees.scss';
import './mediaGuarantees.scss';

const Guarantees = () => {
    return (
        <div className="guarantees">
            <div className="container">
                <div className="section_header guarantees_header">
					<h2>мы гарантируем вам</h2>
					<div className="section_header_sub guarantees_header_sub"></div>
				</div>
                <div className="guarantees_wrapper">

                    <div className="guarantees_block">
                        <img src={firstPictureOfGuarantees} alt="firstPictureOfGuarantees"/>
                        <h3>Высокое качество</h3>
                    </div>

                    <div className="guarantees_block">
                        <img src={secondPictureOfGuarantees} alt="secondPictureOfGuarantees"/>
                        <h3>Выполнение работ <br/>под ключ</h3>
                    </div>

                    <div className="guarantees_block">
                        <img src={thirdPictureOfGuarantees} alt="thirdPictureOfGuarantees"/>
                        <h3>Монтаж в короткие <br/>сроки</h3>
                    </div>

                    <div className="guarantees_block">
                        <img src={fourthPictureOfGuarantees} alt="fourthPictureOfGuarantees"/>
                        <h3>Цены <br/>от производителя</h3>
                    </div>

                    <div className="guarantees_block">
                        <img src={fivethPictureOfGuarantees} alt="fivethPictureOfGuarantees"/>
                        <h3>Бесплатный замер <br/>и консультацию</h3>
                    </div>

                    <div className="guarantees_block">
                        <img src={sixthPictureOfGuarantees} alt="sixthPictureOfGuarantees"/>
                        <h3>Тепло и уют <br/>на балконе</h3>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Guarantees
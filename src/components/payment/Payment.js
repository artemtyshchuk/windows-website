import wallet from '../../assets/img/payment/wallet.png'
import creditCard from '../../assets/img/payment/credit-card.png'
import museum from '../../assets/img/payment/museum.png'


import './payment.scss';

const Payment = () => {
    return (
        <div className="payment">
            <div className="container">
                <div className="section_header payment_header">
					<h2>Вы можете оплатить наши услуги:</h2>
				</div>
                <div className="payment_wrapper">

                    <div className="payment_item">
                        <div className="payment_img">
                            <img src={wallet} alt="wallet"/>
                        </div>
                        <h3>Наличными</h3>
                    </div>

                    <div className="payment_item">
                        <div className="payment_img">
                            <img src={creditCard} alt="creditCard"/>
                        </div>
                        <h3>Банковской картой</h3>
                    </div>

                    <div className="payment_item">
						<div className="payment_img">
							<img src={museum} alt="museum"/>
						</div>
						<h3>Безналичный расчет</h3>
					</div>

                </div>
            </div>
        </div>
    )
}

export default Payment
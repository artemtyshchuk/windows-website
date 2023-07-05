import { useTranslation } from 'react-i18next';


import wallet from '../../assets/img/payment/wallet.png'
import creditCard from '../../assets/img/payment/credit-card.png'
import museum from '../../assets/img/payment/museum.png'


import './payment.scss';
import './mediaPayment.scss';

const Payment = () => {

    const { t } = useTranslation();

    return (
        <div className="payment">
            <div className="container">
                <div className="section_header payment_header">
					<h2>{t('payment.you_can_pay_for_our_services')}</h2>
				</div>
                <div className="payment_wrapper">

                    <div className="payment_item">
                        <div className="payment_img">
                            <img src={wallet} alt="wallet"/>
                        </div>
                        <h3>{t('payment.in_cash')}</h3>
                    </div>

                    <div className="payment_item">
                        <div className="payment_img">
                            <img src={creditCard} alt="creditCard"/>
                        </div>
                        <h3>{t('payment.by_credit_card')}</h3>
                    </div>

                    <div className="payment_item">
						<div className="payment_img">
							<img src={museum} alt="museum"/>
						</div>
						<h3>{t('payment.cashless_payment')}</h3>
					</div>

                </div>
            </div>
        </div>
    )
}

export default Payment
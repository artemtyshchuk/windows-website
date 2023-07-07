import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import wallet from '../../assets/img/payment/wallet.png'
import creditCard from '../../assets/img/payment/credit-card.png'
import museum from '../../assets/img/payment/museum.png'


import './payment.scss';
import './mediaPayment.scss';

const Payment = () => {

    const { t } = useTranslation();

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

    const rightAnimation = {
        hidden: {
            x: -100,
            opacity: 0,
        },
        visible: custom => ({
            x: 0,
            opacity: 1,
            transition: {delay: custom * 0.2},
        }),
    }

    return (
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            className="payment">
            <div className="container">
                <div className="section_header payment_header">
					<motion.h2 custom={1} variants={topAnimation}>{t('payment.you_can_pay_for_our_services')}</motion.h2>
				</div>
                <div className="payment_wrapper">

                    <motion.div 
                        custom={1} 
                        variants={rightAnimation}
                        className="payment_item">
                        <div className="payment_img">
                            <img src={wallet} alt="wallet"/>
                        </div>
                        <h3>{t('payment.in_cash')}</h3>
                    </motion.div>

                    <motion.div 
                        custom={2} 
                        variants={rightAnimation}
                        className="payment_item">
                        <div className="payment_img">
                            <img src={creditCard} alt="creditCard"/>
                        </div>
                        <h3>{t('payment.by_credit_card')}</h3>
                    </motion.div>

                    <motion.div 
                        custom={3} 
                        variants={rightAnimation}
                        className="payment_item">
						<div className="payment_img">
							<img src={museum} alt="museum"/>
						</div>
						<h3>{t('payment.cashless_payment')}</h3>
					</motion.div>

                </div>
            </div>
        </motion.div>
    )
}

export default Payment
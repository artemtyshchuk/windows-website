import React from 'react';              //Так должен выглядеть index.js
import { useSelector } from 'react-redux';

import Header from '../header/Header';
import Main from '../main/Main';
import Glazing from '../glazing/Glazing';
import Decoration from '../decoration/Decoration'
import Works from '../works/Works';
import Guarantees from '../guarantees/Guarantees';
import Payment from '../payment/Payment';
import Promotion from '../promotion/Promotion';
import Contacts from '../contacts/Contacts';
import Feedback from '../feedback/Feedback';
import Footer from '../footer/Footer'
import Calculator from '../calculator/Calculator';
import FormCard from '../formCard/FormCard';

const App = () => {

    const {modalIsOpen} = useSelector((store) => store.modal);
    const {calculatorIsOpen} = useSelector((store) => store.calculator);

    return (
        <div className="app">
            <div className="content">
                <Header/>
                {modalIsOpen && <div className="modal_overlay"></div>}
                {modalIsOpen && <FormCard modal_form='modal_form' isModal={true}/>}
                <Main/>
                <Glazing/>
                {calculatorIsOpen && <Calculator/>}
                <Decoration/>
                <Works/>
                <Guarantees/>
                <Payment/>
                <Promotion/>
                <Contacts/>
                <Feedback/>
                <Footer/>
            </div>
        </div>
    )
}

export default App;
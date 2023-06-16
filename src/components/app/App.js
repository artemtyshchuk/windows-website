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

const App = () => {
    return (
        <div className="app">
            <div className="content">
                {/* <Header/>
                <Main/>
                <Glazing/>
                <Decoration/>
                <Works/>
                <Guarantees/>
                <Payment/>
                <Promotion/>
                <Contacts/>
                <Feedback/>
                <Footer/> */}
                <Calculator/>
            </div>
        </div>
    )
}

export default App;
import { useSelector, useDispatch } from 'react-redux';
import { openCalculator, closeCalculator } from '../glazing/glazingSlice';

import Glazing from '../glazing/Glazing';
import Calculator from '../calculator/Calculator';

const ParentComponent = () => {
    const isCalculatorOpen = useSelector(state => state.glazing.isCalculatorOpen);
    const dispatch = useDispatch();
  
    const handleOpenCalculator = () => {
        dispatch(openCalculator());
    };
  
    const handleCloseCalculator = () => {
        dispatch(closeCalculator());
    };
  
    return (
        <div>
            <Glazing isCalculatorOpen={isCalculatorOpen} handleOpenCalculator={handleOpenCalculator} />
            {isCalculatorOpen && <Calculator handleCloseCalculator={handleCloseCalculator} />}
        </div>
    );
};

export default ParentComponent;

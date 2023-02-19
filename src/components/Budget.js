import React, { useContext,useState } from 'react';
//import { AppContext } from '../context/AppContext';
const Budget = () => {
    //const { budget } = useContext(AppContext);
    const [setCost] = useState('');
    return (
        <div className="row">
            <div className='alert alert-secondary'>
                    <span>Budget: £<input type="number" id="budget" style={{ marginLeft: '2rem' , size: 10}}
                    onChange={(event) => setCost(event.target.value)}></input></span>
            </div>
            
        </div>
    );
};
export default Budget;
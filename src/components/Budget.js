import React, { useContext,useState } from 'react';
//import { AppContext } from '../context/AppContext';
const Budget = () => {
    //const { budget } = useContext(AppContext);
    const [setCost] = useState('');
    const [count, setCount] =useState(0); 
    return (
        <div className="row">
            <div className='alert alert-secondary'>
                    <span>Budget: £<input type="number" id="budget" style={{ marginLeft: '2rem' , size: 10}}
                    onChange={(event) => setCost(event.target.value)} value={count} onClick={()=>setCount(count+10)}></input></span>
            </div>
            
        </div>
    );
};
export default Budget;
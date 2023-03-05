import React, { useState } from 'react';
//import { AppContext } from '../context/AppContext';

const CambioMone = (props) => {
    //const { dispatch,remaining  } = useContext(AppContext);

    const [name, setName] = useState('');

    return (
        <div>
            <div className='row'>

            <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    <div className="input-group-prepend">
                <label className="input-group-text CambMon" htmlFor="inputGroupSelect01">Currency 
                <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                        <option defaultValue>Choose...</option>
                        <option value="Marketing" name="marketing"> Marketing</option>
                <option value="Sales" name="sales">Sales</option>
                <option value="Finance" name="finance">Finance</option>
                <option value="HR" name="hr">HR</option>
                <option value="IT" name="it">IT</option>
                <option value="Admin" name="admin">Admin</option>
                  </select>
                </label>
                  </div>
                  
                </div>
                </div>

        </div>
    );
};

export default CambioMone;
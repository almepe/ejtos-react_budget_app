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
                        <option value="$" name="dollar"> $ Dollar</option>
                        <option value="£" name="libra">£ libra</option>
                        <option value="€" name="euro">€ Euro</option>
                        <option value="₹" name="ruppia">₹ Ruppia</option>
                  </select>
                </label>
                  </div>
                  
                </div>
                </div>

        </div>
    );
};

export default CambioMone;
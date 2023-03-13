import React, { useState } from 'react';
import Select from 'react-select'
import '/Users/aliri/Documents/CURSO_IBM/REACT/ejtos-react_budget_app/src/App.css'
//import '/home/project/ejtos-react_budget_app/src/App.css'
//import { AppContext } from '../context/AppContext';
const monedas = [
  { value: '$', label: '$ Dollar' },
  { value: '£', label: '£ libra' },
  { value: '€', label: '€ Euro' },
  { value: '₹', label:'₹ Ruppia'}
]
const CambioMone = (props) => {
  const [moneda,setMoneda] = useState();
    const selectChange= ({value})=>{
      console.log(value);
      setMoneda(value);
    }
    return (
      <div className="CambMon">
        <Select defaultValue={ monedas[0] }
        options={monedas} className="CambMon"
        onChange={selectChange}
        />

      </div>
    );
};

export default CambioMone;
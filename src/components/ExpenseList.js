import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);
    
    return (
        <table className='table'>
              <thead className="thead-light">
            <tr>
              <th scope="col">Departamento</th>
              <th scope="col">Allocated Budget</th>
              <th scope="col">Incremente por 10</th>
              <th scope="col">Decremente por 10</th>
              <th scope="col">Borrar</th>
            </tr>
          </thead>
            <tbody>
            {expenses.map((expense) => (
                <ExpenseItem id={expense.id} key={expense.id} name={expense.name} cost={expense.cost} />
            ))}
            </tbody>
        </table>
    );
};

export default ExpenseList;
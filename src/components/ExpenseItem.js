import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { Button } from 'antd'
import { AppContext } from '../context/AppContext';
import '/Users/aliri/Documents/CURSO_IBM/REACT/ejtos-react_budget_app/src/App.css'
//import '/home/project/ejtos-react_budget_app/src/App.css'

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    };

    const decreaseAllocation =(name)=>{
        const expense ={
            name:name,
            cost:10
        };
        dispatch({
            type:'RED_EXPENSE',
            payload: expense
        });
    };

    return (
        <tr>
        <td>{props.name}</td>
        <td>£{props.cost}</td>
        <td><Button shape='circle' size='small' className="botonInc" onClick={()=> increaseAllocation(props.name)}>+</Button></td>
        <td><Button shape='circle' size='small' className="botonDec" onClick={()=>decreaseAllocation(props.name)}>-</Button> </td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
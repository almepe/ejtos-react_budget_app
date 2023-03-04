import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';

import { AppProvider } from './context/AppContext';
//import ExpenseItem from './components/ExpenseItem';
import AllocationForm from './components/AllocationForm';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3' align='center'>Asignación de presupuesto de la empresa</h1>
                    <div className='row mt-3'>
                        {      // Budget component
                            <div className='col-sm'>
                                <Budget />
                            </div>
                        }        

                        {    //Remaining component
                                <div className='col-sm'>
                                    <Remaining />
                                </div>
                        }        

                        {    //ExpenseTotal component
                                <div className='col-sm'>
                                    <ExpenseTotal />
                                </div>
                        }        
                        <h2>Allocation</h2>
                        {   //ExpenseList component
                            <div className='col-s'>
                                <ExpenseList />
                            </div>

                        }            

                        {       //ExpenseItem component
                            /*<div className='col-sm'>
                                <ExpenseItem />
                                </div>*/
                        }        
                        <h2>Change allocation</h2>
                        {     // AllocationForm component
                            <div className='col-s'>
                                <AllocationForm />
                                </div>
                        }        

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
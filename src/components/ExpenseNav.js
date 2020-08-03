import React, { Fragment, useState } from 'react';
import BudgetItems from '../BudgetItems';
import Expense from './Expense.js';

const ExpenseNav = ({expenseCallback}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleChange = () => {
    let total = 0;
    for (const item of BudgetItems) {
      total += item.value;
    }
    expenseCallback(total);
  }

  return (
    <Fragment>
      <h4 className='font-weight-bolder'>Expenses</h4>
      <ul className='nav nav-pills nav-fill my-3'>
        {BudgetItems.map((item, index) => {
          return (
            <li key={`nav${index}`} className='nav-item col-md-2 col-4'>
              <button
                key={index} className={activeIndex === index ? 'btn btn-yellow btn-block nav-link' : 'btn btn-block nav-link h4'}
                onClick={() => setActiveIndex(index)}
              >
                <i key={index} className={item.class}></i>
              </button>
            </li>
          );
        })}
      </ul>
      
      {BudgetItems.map((item, index) => {
          return (
            <Fragment key={`expense${index}`}>
              { activeIndex === index &&
                <Expense budgetIndex={index} budgetItem={item} onChange={() => handleChange()}/>
              }
            </Fragment>
          );
      })}
    </Fragment>
  );
}

export default ExpenseNav;
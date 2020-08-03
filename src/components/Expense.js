import React, { Fragment, useState } from 'react';
import BudgetItems from '../BudgetItems';
import ExpenseForm from './ExpenseForm';

const Expense = (props) => {
  const [categoryTotal, setCategoryTotal] = useState(props.budgetItem.value ?? 0);
  const [categoryValues, setCategoryValues] = useState(
    props.budgetItem.items.map((item) => {return item.value ?? 0;})
  );

  const handleChange = (e, index) => {
    BudgetItems[props.budgetIndex].items[index].value = Number(e.target.value);
    let total = 0;
    for (const item of BudgetItems[props.budgetIndex].items) {
      total += item.value;
    }
    BudgetItems[props.budgetIndex].value = total;
    
    const copyValues = categoryValues;
    copyValues[index] = Number(e.target.value);
    setCategoryValues(copyValues);
    setCategoryTotal(total);
    props.onChange();
  }

  const handleSubmit = (term) => {
    BudgetItems[props.budgetIndex].items.push({name: term, value: 0});
    setCategoryValues([...categoryValues, 0]);
  }

  return (
    <Fragment>
      <h4 className='mb-4 d-flex justify-content-between'>
        <span>{props.budgetItem.name}</span>
        <span>${categoryTotal.toFixed(2)}</span>
      </h4>   
        {props.budgetItem.items.map((item, index) => {
          return (
            <div key={index} className='row mb-3'>
              <label htmlFor={`input${index}`} className='col-8-sm col-7 col-form-label'>{item.name}</label>
              <div className='col-4-sm col-5'>
                <input className='form-control text-right' type='number' aria-label={item.name} min='0' step='0.01'
                  value={categoryValues[index].toFixed(2)} onChange={(e) => handleChange(e, index)}/>
              </div>
            </div>
          );
        })}
      <ExpenseForm onSubmit={(term) => handleSubmit(term)} />
    </Fragment>
  );
}

export default Expense;
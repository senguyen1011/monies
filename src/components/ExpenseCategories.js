import React, { Fragment } from 'react';
import BudgetItems from '../BudgetItems';

const ExpenseCategories = (props) => {
  return (
    <Fragment>
      <hr />
      <div className='row'>
        <h4 className='mb-3'>Expenses by Category</h4>
        {BudgetItems.map((item, index) => {
          return (
            <div key={index} className='col-4 mb-3 text-center shrink'>
              <h4>${item.value.toFixed(2)}</h4>
              { props.income > 0 && 
                <small className='text-secondary d-block'>
                  {((item.value / props.income) * 100).toFixed(1)}% of Income
                </small> 
              }
              { props.expense > 0 && 
                <small className='text-secondary d-block'>
                  {((item.value / props.expense) * 100).toFixed(1)}% of Expenses
                </small> 
              }
              <h6 className={`text-${item.color}`}>{item.name}</h6>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}

export default ExpenseCategories;
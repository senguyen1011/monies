import React, { Fragment } from 'react';
import BudgetItems from '../BudgetItems';

const ExpenseBreakdown = (props) => {
  if (props.invest > 0) {
    return (
      <Fragment>
        <h5>Expenses Breakdown with Investments</h5>
        <div className='progress mb-4'>
          {BudgetItems.filter((item) => item.value > 0).map((item, index) => {
            const percent = ((item.value / (props.expense + props.invest)) * 100);
            return (
              <div key={`breakdownInvest${index}`} className={`progress-bar font-weight-bold bg-${item.color}`} style={{ width: `${percent}%` }}
                title={item.name}
              >
                {percent.toFixed(1)}%
              </div>
            );
          })}
          <div className='progress-bar font-weight-bold bg-green-400' 
            style={{ width: `${(props.invest / (props.expense + props.invest)) * 100}%` }} title='Investments & Savings'
          >
            {((props.invest / (props.expense + props.invest)) * 100).toFixed(1)}%
          </div> 
        </div>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <hr />  
        <h5>Expense Breakdown</h5>
        <div className='progress mb-4'>
          {BudgetItems.filter((item) => item.value > 0).map((item, index) => {
            const percent = ((item.value / props.expense) * 100);
            return (
              <div key={`breakdown${index}`} className={`progress-bar font-weight-bold bg-${item.color}`} style={{ width: `${percent}%` }}
                title={item.name}
              >
                {percent.toFixed(1)}%
              </div>
            );
          })}
        </div>
      </Fragment>
    );
  }
}

export default ExpenseBreakdown;
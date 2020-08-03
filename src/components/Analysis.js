import React, { Fragment } from 'react';
import ExpenseBreakdown from './ExpenseBreakdown';
import ExpenseCategories from './ExpenseCategories';
import ExpenseTable from './ExpenseTable';
import Goal from './Goal';

const Analysis = (props) => {
  const budgetFormat = props.budget < 0 ? `-$${(props.budget * -1).toFixed(2)}` : `$${props.budget.toFixed(2)}`;
      
  return (
    <Fragment>
      <h3>You have a budget of {budgetFormat} per month</h3>
      { props.budget > 0 && <Goal budget={props.budget} invest={props.invest} /> }
      { props.expense > 0 && <ExpenseCategories income={props.income} expense={props.expense} /> }
      { props.expense > 0 && <ExpenseBreakdown expense={props.expense} /> }
      { props.expense > 0 && props.invest > 0 && <ExpenseBreakdown invest={props.invest} expense={props.expense} /> }
      { props.expense > 0 && <ExpenseTable invest={props.invest} expense={props.expense} /> }
    </Fragment>
  );
}

export default Analysis;
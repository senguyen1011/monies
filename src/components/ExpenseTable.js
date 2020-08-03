import React, { Fragment } from 'react';
import BudgetItems from '../BudgetItems';

const ExpenseTable = (props) => {
  let total = props.expense;
  let sortList = [];
  for (const item of BudgetItems) {
    for (const subItem of item.items) {
      if (subItem.value > 0) {
        sortList.push({item: subItem, category: item.name});
      }
    }
  }

  if (props.invest > 0) {
    total += props.invest;
    sortList.push({
      item: {
        name: "Investments & Savings",
        value: props.invest
      },
      category: "Investments & Savings"
    });
  }
  
  return (
    <Fragment>
      <hr />
      <h4 className='mb-3'>Sorted Expenses</h4>
      <table className='table'>
        <thead>
          <tr>
            <th>Expense</th>
            <th>Category</th>
            <th className='text-right'>Value</th>
            <th className='text-right'>% of Expenses</th>
          </tr>
        </thead>
        <tbody>
          {sortList.sort((a, b) =>  b.item.value - a.item.value).map((sortItem, index) => {
            return (
              <tr key={`tr${index}`}>
                <td>{sortItem.item.name}</td>
                <td>{sortItem.category}</td>
                <td className='text-right'>${sortItem.item.value.toFixed(2)}</td>
                <td className='text-right'>{((sortItem.item.value / total) * 100).toFixed(1)}%</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
}

export default ExpenseTable;
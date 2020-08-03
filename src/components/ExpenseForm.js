import React, { useState } from 'react';

const ExpenseForm = (props) => {
  const [term, setTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (term === '') return;
    props.onSubmit(term);
    setTerm('');
  }

  return (
    <form className='row mt-3' onSubmit={(e) => handleSubmit(e)}>
      <div className='col-8-sm col-7'>
        <input type='text' className='form-control' placeholder='Enter Custom Expense' value={term} 
          onChange={(e) => setTerm(e.target.value)} 
        />
      </div>
      <div className='col-4-sm col-5'>
        <button type='submit' className='btn btn-block btn-yellow'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm;
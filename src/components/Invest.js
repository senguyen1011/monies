import React, { useState } from 'react';

const Invest = (props) => {
  const [invest, setInvest] = useState(props.invest);

  const handleChange = (e) => {
    setInvest(Number(e.target.value));
    props.investCallback(Number(e.target.value));
  }

  return (
    <div className='row mb-3'>
      <label htmlFor='invest' className='col-8 col-form-label'>Savings & Investments</label>
      <div className='col-4'>
        <input className='form-control text-right' id='invest' type='number' aria-label='Savings & Investments'
          value={invest.toFixed(2)} onChange={(e) => handleChange(e)} min='0' step='0.01' 
        />
      </div>
    </div>
  );
}

export default Invest;
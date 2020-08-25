import Cleave from 'cleave.js/react';
import React, { useState } from 'react';

const Invest = (props) => {
  const [invest, setInvest] = useState(props.invest);

  const handleChange = (e) => {
    setInvest(Number(e.target.rawValue));
    props.investCallback(Number(e.target.rawValue));
  }

  return (
    <div className='row mb-3'>
      <label htmlFor='invest' className='col-8 col-form-label'>Savings & Investments</label>
      <div className='col-4'>
        <Cleave className='form-control text-right' id='invest' aria-label='Savings & Investments'
          value={invest} onChange={(e) => handleChange(e)} 
          options={{
            numeral: true, 
            numeralThousandsGroupStyle: 'none', 
            numeralDecimalScale: 2, 
            numeralPositiveOnly: true, 
            prefix: '$',
            rawValueTrimPrefix: true
          }} 
        />
      </div>
    </div>
  );
}

export default Invest;
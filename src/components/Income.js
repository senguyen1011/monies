import Cleave from 'cleave.js/react';
import React, { Fragment, useState } from 'react';

const Income = (props) => {
  const [pay, setPay] = useState(props.pay);
  const [other, setOther] = useState(props.other);

  const handlePayChange = (e) => {
    setPay(Number(e.target.rawValue));
    props.incomeCallback(Number(e.target.rawValue), props.other);
  }

  const handleOtherChange = (e) => {
    setOther(Number(e.target.rawValue));
    props.incomeCallback(props.pay, Number(e.target.rawValue));
  }

  return (
    <Fragment>
      <h4 className='font-weight-bolder'>Income</h4>
      <div className='row mb-3'>
        <label htmlFor='pay' className='col-8 col-form-label'>Monthly Pay</label>
        <div className='col-4'>
          <Cleave className='form-control text-right' id='pay' aria-label='Monthly Pay' 
            value={pay} onChange={(e) => handlePayChange(e)} 
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
      <div className='row mb-3'>
        <label htmlFor='other' className='col-8 col-form-label'>Other Income</label>
        <div className='col-4'>
        <Cleave className='form-control text-right' id='other' aria-label='Other Income'
            value={other} onChange={(e) => handleOtherChange(e)} 
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
    </Fragment>
  );
}

export default Income;
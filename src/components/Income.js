import React, { Fragment, useState } from 'react';

const Income = (props) => {
  const [pay, setPay] = useState(props.pay);
  const [other, setOther] = useState(props.other);

  const handleChange = (e, isPay) => {
    if (isPay) {
      setPay(Number(e.target.value));
      props.incomeCallback(Number(e.target.value), props.other);
    }
    else {
      setOther(Number(e.target.value));
      props.incomeCallback(props.pay, Number(e.target.value));
    }
  }

  return (
    <Fragment>
      <h4 className='font-weight-bolder'>Income</h4>
      <div className='row mb-3'>
        <label htmlFor='pay' className='col-8 col-form-label'>Monthly Pay</label>
        <div className='col-4'>
          <input className='form-control text-right' id='pay' type='number' aria-label='Monthly Pay'
            value={pay.toFixed(2)} onChange={(e) => handleChange(e, true)} min='0' step='0.01' 
          />
        </div>
      </div>
      <div className='row mb-3'>
        <label htmlFor='other' className='col-8 col-form-label'>Other Income</label>
        <div className='col-4'>
          <input className='form-control text-right' id='other' type='number' aria-label='Other Income' 
            value={other.toFixed(2)} onChange={(e) => handleChange(e, false)} min='0' step='0.01' 
          />
        </div>
      </div>
    </Fragment>
  );
}

export default Income;
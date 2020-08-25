import Cleave from 'cleave.js/react';
import React, { Fragment, useState } from 'react';

const Goal = (props) => {
  const [timeFormat, setTimeFormat] = useState('');
  const [goal, setGoal] = useState(0);
  const [invest, setInvest] = useState(0);

  const handleChange = (e) => {
    setGoal(Number(e.target.rawValue));
    const time = Number(e.target.rawValue) / props.budget;
    setInvest(props.invest * time);

    if (time < 1) {
      if (time % 1) { setTimeFormat(`${(time * 30).toFixed(1)} days`); }
      else if (time * 30 === 1) { setTimeFormat('1 day');}
      else { setTimeFormat(`${time * 30} days`); }
    }
    else if (time >= 12) {
      if (time % 1) { setTimeFormat(`${(time / 12).toFixed(1)} years`); }
      else if (time / 12 === 1) { setTimeFormat('1 year');}
      else { setTimeFormat(`${time} years`); }
    }
    else {
      if (time % 1) { setTimeFormat(`${(time).toFixed(1)} months`); }
      else if (time === 1) { setTimeFormat('1 month');}
      else { setTimeFormat(`${time} months`); }
    }
  }

  return (
    <Fragment>
      <div className='row'>
        { goal > 0 && 
          <Fragment>
            <h5>It will take around {timeFormat} to reach your goal of ${goal.toFixed(2)}</h5>
            { props.invest > 0 &&
              <h5 className='text-secondary'>In that time you will have also invested ${invest.toFixed(2)}</h5>
            }
          </Fragment> 
        }
        { goal === 0 && <h5>Set a goal below</h5> }
      </div>
      <div className='row mt-3'>
        <div className='col-4 pr-0'>
          <label htmlFor='goal' className='col-form-label pl-4 w-100 bg-input'>Set Goal</label>
        </div>
        <div className='col-8 pl-0'>
          <Cleave className='form-control text-right' id='goal' aria-label='Savings & Investments'
            value={goal} onChange={(e) => handleChange(e)} 
            options={{
              numeral: true, 
              numeralThousandsGroupStyle: 'none', 
              numeralDecimalScale: 2, 
              numeralPositiveOnly: true, 
              prefix: '$', 
              noImmediatePrefix: true, 
              rawValueTrimPrefix: true
            }} 
          />
        </div>
        
      </div>
    </Fragment>
  );
}

export default Goal;
import React from 'react';

const Header = (props) => {
  return (
    <header className='fixed-top'>
      <nav className='navbar navbar-dark bg-blur text-center shadow-sm'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-8 col-12 mx-auto'>
              <div className='row shrink'>
                <h3 className='font-weight-bolder'>Monies</h3>
              </div>
          
              <div className='row shrink'>
                <div className='col'>
                  <h5>${props.income.toFixed(2)}</h5>
                  <h6 className='text-secondary'>Income</h6>
                </div>

                <div className='col'>
                  <h5>${props.invest.toFixed(2)}</h5>
                  <h6 className='text-secondary'>Investments</h6>
                </div>

                <div className='col'>
                  <h5>${props.expense.toFixed(2)}</h5>
                  <h6 className='text-secondary'>Expense</h6>
                </div>

                <div className='col'>
                  <h5>
                    { props.budget >= 0 && <span>${props.budget.toFixed(2)}</span> }
                    { props.budget < 0 && <span className='text-danger'>-${(props.budget * -1).toFixed(2)}</span> }
                  </h5>
                  <h6 className='text-secondary'>Budget</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
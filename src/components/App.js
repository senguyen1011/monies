import React, { Component, Fragment } from 'react';
import Analysis from './Analysis';
import './App.css';
import ExpenseNav from './ExpenseNav';
import Header from './Header';
import Income from './Income';
import Invest from './Invest';

class App extends Component {
  constructor() {
    super();
    this.state = {
      budget: 0,
      incomePay: 0,
      incomeOther: 0,
      income: 0,
      invest: 0,
      expense: 0,
      isAnalysis: false
    }
  }

  incomeCallback = (pay, other) => {
    this.setState({ 
      incomePay: pay,
      incomeOther: other,
      income: pay + other
    });

    this.setState({ budget: (pay + other) - (this.state.expense + this.state.invest)});
  }

  investCallback = (invest) => {
    this.setState({ invest: invest });
    this.setState({ budget: this.state.income - (this.state.expense + invest) });
  }

  expenseCallback = (expense) => {
    this.setState({ expense: expense });
    this.setState({ budget: this.state.income - (this.state.invest + expense) });
  }

  render() {
    return (
      <Fragment>
        <Header income={this.state.income} invest={this.state.invest} expense={this.state.expense} 
          budget={this.state.budget} 
        />
        <main>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8 col-md-10 col-12 mx-auto'>
                <div className='card shadow-sm'>
                  { !this.state.isAnalysis &&
                    <div className='card-body'>
                      <Income pay={this.state.incomePay} other={this.state.incomeOther} 
                        incomeCallback={this.incomeCallback}
                      />
                      <hr />
                      <Invest invest={this.state.invest} investCallback={this.investCallback} />
                      <hr />
                      <ExpenseNav expenseCallback={this.expenseCallback} />
                      <hr />
                    </div>
                  }
                  { this.state.isAnalysis &&
                    <div className='card-body'>
                      <Analysis income={this.state.income} invest={this.state.invest} expense={this.state.expense} 
                        budget={this.state.budget} 
                      />
                    </div>
                  }
                  <div className='row pb-4'>
                    <button className='btn btn-outline-yellow col-4 mx-auto'
                      onClick={() => this.setState({isAnalysis: !this.state.isAnalysis})}>
                        { !this.state.isAnalysis && <Fragment>See Analysis</Fragment> }
                        { this.state.isAnalysis && <Fragment>Edit Budget</Fragment> }
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </Fragment>
    );
  }
}

export default App;

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The inputs used here are formatted using [Cleave.js](https://nosir.github.io/cleave.js/).

## Monies

A simple monthly budget calculator I made because I realized I was spending too much money on games and toys. The basic
idea of it is an one-time use or occasional use budget calculator. Simply input your monthly income and expenses, and
you'll get how much money you make and keep a month. It's all up to your interpretation of what this money means to you,
extra savings, extra spendings, it's just your cashflow.

### Income, Investments, Expenses, and Budget

- **Income** - How much money you make and recieve in a month
- **Investments** - How much money you invest or save. Interest does not apply here. Takes away from your Income like
Expense does. Relevant in the Analysis page in the goal calculator. The goal time calculates how much you would have
invested should you make regular, monthly investments
- **Expenses** - How much money you spend. There are 6 categories for Expenses: Housing & Utilities, Transportation, 
Food & Groceries, Health & Self, Debt & Loans, and Miscellaneous. Each categories have a list of relevant expenses, and
custom expenses can be added for organization purposes. All expenses add up to one singular Expense value, which is
subtracted from the Income value.
- **Budget** - Expenses and Investments subtracted from Income. How much money is left over.

### Header

Tracks the current input for income, investments, expenses, and budget. This information remains visible to the user
across switching components and views.

### Expenses

Click on the icons to switch between Expense categories. Each Expense has an individual value, which is totaled into
their respective category total, which is then totaled into the overal Expense value. Custom expenses can be added as
well.

### Analysis

Breaks down how your income is being spent.

- **Goal** - Enter a Goal value and assuming your Budget value is earned at a constant rate per month, calculates how 
long it will take for you to earn your Goal. If you have an Investments value, you will also see how much is invested in 
the time it takes to reach the goal. *In calculating time, it assumes 1 month is 30 days*

- **Expenses by Category** - Shows by category how much Income is being spent. Colors coordinate with the Expense 
Breakdown bars. Hover over the bars in the Breakdown bars to see exactly what category the color represents. Expense 
Breakdown with Investments treat Investments as if it were another Expense.

- **Sorted Expenses** - A table of your sorted expenses, from most expensive to least.

## Add money to ISA wallet showcase:

1. Start the process of adding money to the ISA account.

2. Choose one of the following options:

   - "Add cash (from min amount)" if user want to make a one-time cash deposit.
   - "Set up monthly payments (from min amount)" if user want to set up recurring monthly contributions.
   - "Add cash now and set up monthly payment" if user want to make a one-time cash deposit and set up recurring monthly contributions.

3. If "Add cash (from min amount)" is selected:

   - Enter the amount of cash to add (minimum £100).
   - Confirm the transaction.
   - Update the account balance with the added cash.
   - End the process.

4. If "Set up monthly payments (from min amount)" is selected:

   - Choose how to set up monthly payments:
   - If "Set up monthly payments with Direct Debit" is selected:
     - Set up Direct Debit details, including bank account information, the amount to contribute, and the frequency of contributions.
     - Confirm the Direct Debit setup.
     - End the process.

5. If "Add cash now and set up monthly payments" is selected:

   - Enter the amount of cash to add (minimum £100).
   - Confirm the cash transaction.
   - Set up Direct Debit details, including bank account information, the amount to contribute, and the frequency of contributions.
   - Confirm the Direct Debit setup.
   - End the process.

6. Financial Year Calculation: need to keep track of the user's contributions for each financial year and enforce the limit.

   - When a user adds money to their account, need to check if they have reached the limit for the current financial year before allowing the transaction.
   - Need to calculate the current financial year and check it against the user's contributions.
     - Before recording a transaction, query the database to retrieve the user's contributions for the current financial year.
     - Check if the user's total contributions plus the new transaction amount exceed the £25,000 limit.
     - If the limit is not exceeded, proceed with the transaction and update the contribution records.
     - If the limit is exceeded, reject the transaction and inform the user that they have reached their limit for the current financial year.

## Database Schema

1. Record Financial Transactions:
   When a user adds money to their account, record the transaction details such as the user ID, transaction amount, date, and type (cash, debit card, Direct Debit) in the database.

2. Handle Monthly Payments:
   If the user sets up monthly payments, record the Direct Debit details (e.g., bank account, contribution amount, frequency) in the database.
   Set up a scheduler or cron job to execute these monthly contributions based on the specified frequency.

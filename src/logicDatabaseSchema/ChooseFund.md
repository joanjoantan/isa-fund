# Flow Diagram:

1. User can "View ISA Wallet Balance"
   Retrieve and display the user's ISA wallet balance from the database.

2. User can "Search Available Funds"
   Retrieve a list of available funds from the database.
   Display the list of funds to the user.

3. User chooses a fund to View Fund Past Performance
   Retrieve and display the past performance of the selected fund from the database.

4. User can start "Invest in a Fund"
   Retrieve a list of available funds from the database.
   User chooses a specific fund.
   User enters the amount to invest from their ISA wallet.

   - Verify if the user has sufficient balance.

   * Display an error message indicating insufficient funds.

   - If balance is sufficient:

   * Record the investment details (user ID, fund ID, amount) in the database.
   * Deduct the invested amount from the user's ISA wallet.
   * Display a confirmation message.

5. user can "Review and Queue"
   Retrieve a list of queued fund investments for the user from the database.
   Display the queued fund investments to the user.

## Database Schema

Users table: Stores user information, including their ID and ISA wallet balance.

Funds table: Contains details about available funds, such as fund ID, fund name, and past performance data.

Investments table: Records each investment made by users, including user ID, fund ID, and the invested amount.

Queue table: Stores queued fund investments, including user ID, fund ID, and the queued date/time.

## Coding Decisions

- Implement user authentication and authorization to ensure that only authorized users can perform these actions.

- Consider using a web-based front-end to create a user-friendly interface for users to interact with your system.

- Implement error handling and validation to provide a smooth user experience. such as insufficient funds or database failures. Provide clear error messages to user.

- Consider scalability for supporting multiple fund options in the future. This may require updates to the database structure and user interface to allow users to select multiple funds.

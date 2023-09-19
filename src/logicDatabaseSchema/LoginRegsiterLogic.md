## Login and regsiter showcase:

1. Start the registration process.

2. Check if the user's National Insurance Number (NIN) is already registered in the Cushon database:
   If YES:
   Display a message asking the user to log in using their existing credentials (assuming they already have an account).
   End the registration process.
   If NO:
   Proceed to collect the necessary user information.

3. Collect the following user information:
   Customer Name
   Customer Address
   Email
   Password (ensure secure handling and storage)
   Nationality
   National Insurance Number (NIN)
   Mobile/Home telephone number

4. Create a new user account in the Cushon database using the collected information:
   Store the user's information securely in the database.
   Generate a unique user ID if needed.

5. Display a success message to the user indicating that their registration was successful.

6. End the registration process.

## Database Schema

Customers table: Stores customer information

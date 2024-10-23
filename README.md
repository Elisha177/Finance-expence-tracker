# Personal Expense Tracker

## Setup and Run Instructions

1. **Clone the Repository:**
   
   git clone https://github.com/Elisha177/Finance-expence-tracker.git
   cd personal-expense-tracker

Install Dependencies: Make sure you have Node.js installed. Then, run:
npm install

Set Up Environment Variables: Create a .env file in the root directory of your project and add the following environment variable:

MONGO_URL=<your_mongo_db_connection_string>

Run the Application: Use the following command to start the server:

# run 
node app.js
or if you're using nodemon:

npx nodemon app.js
Access the Application: Open your browser and navigate to http://localhost:5000.

# API Documentation

# Endpoints

# POST - Add Transactions

URL: /api/transactions

Request Type: POST
Description: Adds a new transaction.
Request Body:
json

{
  "type": "income",
  "category": "salary",
  "amount": 6000,
  "date": "2024-10-23",
  "description": "October salary"
}
# GET - Get Transactions

URL: /api/transactions
Request Type: GET
Description: Retrieves all transactions.
GET - Get Transaction by ID

URL: /api/transactions/:id
Request Type: GET
Description: Retrieves a transaction by its ID.
Example Request: http://localhost:5000/api/transactions/67184a647b8291a931e72a41

# PUT - Update Transaction

URL: /api/transactions/:id
Request Type: PUT
Description: Updates an existing transaction by its ID.
Request Body:

{
  "type": "expense",
  "category": "food",
  "amount": 200,
  "date": "2024-10-25",
  "description": "Grocery shopping"
}

# DELETE - Delete Transaction

URL: /api/transactions/:id
Request Type: DELETE
Description: Deletes a transaction by its ID.
Example Request: http://localhost:5000/api/transactions/67184a647b8291a931e72a41

# Postman API Calls

1. POST - Add Transactions
Request:
URL: http://localhost:5000/api/transactions
Method: POST
Body (JSON):


{
  "type": "income",
  "category": "salary",
  "amount": 6000,
  "date": "2024-10-23",
  "description": "October salary"
}



2. GET - Get Transactions
Request:
URL: http://localhost:5000/api/transactions
Method: GET

3. GET - Get Transaction by ID
Request:
URL: http://localhost:5000/api/transactions/:id
Method: GET
Example: http://localhost:5000/api/transactions/67184a647b8291a931e72a41

4. PUT - Update Transaction
Request:
URL: http://localhost:5000/api/transactions/:id
Method: PUT
Body (JSON):

{
  "type": "expense",
  "category": "food",
  "amount": 200,
  "date": "2024-10-25",
  "description": "Grocery shopping"
}

5. DELETE - Delete Transaction
Request:
URL: http://localhost:5000/api/transactions/:id
Method: DELETE
Example: http://localhost:5000/api/transactions/67184a647b8291a931e72a41


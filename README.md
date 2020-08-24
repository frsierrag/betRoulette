# betRoulette

BET ROULETTE

DESCRIPTION
This code is made to simulate a bet roulette with five simple operations, consulting a database no refer like Firebase.

METHODS/ENDPOINTS
1. Create Roulette: Method GET in charge to create a roulette with an ID and Status in Firebase and return them.

2. Open Roulette: Method PUT in charge to open roulette with false status. This method receive an ID roulette. 
If method is success, return an object with this status, in other way, return rejected.

3. Bet: Method PUT in charge to do the main logic. This method receive in headers an ID user and in body an ID roulette, number or color to bet and bet amount. Number and color must be send one without another but must be send at least one. The Number must be number type and Color string type. Color just must be and string "red" or "black". Amount must be a number type between 1 and 10000 inclusive.
If method is success, return an object with ID roulette, ID user, number or color bet, status deal and an onject with bet's result. This object has within number or color random, bet amount, profits fee, profits, totla amount, bet status and date in ISO format.

4. Close Roulette: Method PATCH in charge to close roulette with true status. This method receive an ID roulette.
If method is success, return an object with the results in that roulette: Total number bets, total won bets, total amount collected by roulette, total amount paid by roulette and total gain by roulette.

5. List Roulettes: Method GET in charge to list in an array each roulette in data base with their states: ID roulette and status roulette.

DOWNLOAD
1. Download this code in: https://github.com/frsierrag/betRoulette
2. Download API KEY in:

INSTALL DEPENDENCES
1. Be located on the following path in a prompt: ..\BetRoulette\betRoulette\
2. Install them with this command: npm i

INSTALL API KEY TO FIREBASE
1. Copy API KEY within project
2. Run the following command in a Power Shell to Windows: $env:GOOGLE_APPLICATION_CREDENTIALS="D:\Path-to-file-API-Key\roulette-firebase-admin.json"

TEST CODE
1. Create Roulette: http://localhost:3000/api/createRoulette
2. Open Roulette: http://localhost:3000/api/openRoulette
3. List Roulettes: http://localhost:3000/api/listRoulettes
4. Bet: http://localhost:3000/api/bet/
5. Close Bet: http://localhost:3000/api/closeRoulette


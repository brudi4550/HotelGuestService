# HotelGuestService
##### _Created using React and Node.js_

### Running the application locally
```
git clone https://github.com/brudi4550/HotelGuestService.git
cd HotelGuestService && npm i
cd src/client && npm i
```
Create a file called '.env' in the server folder and fill it with the following information:
```
PORT=... (the port the application should run on)
HOST=... (the host address of your database)
USER=... (username for your database)
PASSWORD=... (password for the user)
DATABASE=... (database name you want to connect to)
DATABASE_PORT=... (the port of your database)
```
Start your PostgreSQL Server and run the initialize.sql file from the server folder.
Finally run
```
npm run dev
```
to start the application.

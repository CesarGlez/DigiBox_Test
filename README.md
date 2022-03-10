# DigiBox_Test
Api Rest for test of DigiBox
Test exercise for DigiBox recruitment process.
The code is hosted in the second branch of the repository.



The application was created in NodeJs, Postman was used to simulate the client section and MySQL for the database.

Requirements to run the application:
- NodeJs installed
- MySql Installed
- Postman Installed

Create database.

Run the Query to create the necessary database and table.

CREATE DATABASE DigiBox_Test;

USE DigiBox_Test; 

CREATE TABLE Customers (
	ID  INTEGER UNSIGNED  AUTO_INCREMENT NOT NULL,
    CUSTOMER_ID VARCHAR(6) NOT NULL UNIQUE  PRIMARY KEY,
    NAME VARCHAR(200) NOT NULL 
);

INSERT INTO customers(customer_id, name) values('C00001', 'Cliente de prueba 1');

To ensure the connection to the database, modify the environment variables in the .env file

In case there is a problem with the authentication to the database, run the following Query:
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'put_your_password'

Run the application

To run the application you can do it from the system terminal.
- Open the system terminal.
- Position it in the "src" folder of the project.
- Use the "node app.js" command

You can open the project in the code editor and follow the steps above.

Once the server is up, go to Postman and create a new collection. Use the routes of the application.
GET requests:
- http://localhost:3000/customer
- http://localhost:3000/customer/:id

POST requests
- http://localhost:3000/customer
Select the "Body" and "raw" checkboxes and choose the JSON object. Write the object with the data requested by the application.

Unit tests

To run the unit tests run the command "npm test" from the system terminal or from the code editor.

Note to evaluators.
I was unable to complete point 3 of the document due to my lack of experience with using SXD schemas in the Node environment. Just filter by customerID and return the information as a JSON object.
Despite the readings I found on this topic, I was not able to implement it on my system.




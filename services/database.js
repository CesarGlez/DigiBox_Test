const databaseService = () => { //Database Connection
   const knex = require('knex')({
      client: 'mysql',
      connection: {
         //Enviroment variables on .enb file
         host: process.env.DB_HOST, 
         port: 3306,
         user: process.env.DB_USER,
         password: process.env.DB_PASSWORD,
         database: process.env.DB
      }
   });

   const table = "customers" //Table Name

   const getCustomers = () => { //All Customers
      return knex(table).select();
   }

   const getCustomerID = (value) => { //Get customer by id
      return knex(table).select().where(value);
   }

   const createCustomer = ( { customer_id, name } ) => { //Create new customer
      return knex(table).insert({
         customer_id: customer_id,
         name: name
      });
   };

   return { createCustomer, getCustomers, getCustomerID}
};

//Export all methods from de service
module.exports = {
   databaseService,
} 

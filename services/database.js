const databaseService = () => { //Conexión a la base de datos
   const knex = require('knex')({
      client: 'mysql',
      connection: {
         //Variables de entorno alojadas en el archivo .env
         host: process.env.DB_HOST,
         port: 3306,
         user: process.env.DB_USER,
         password: process.env.DB_PASSWORD,
         database: process.env.DB
      }
   });

   const table = "customers" //Nombre de la tabla

   const getCustomers = () => { //Lista todos los clientes
      return knex(table).select();
   }

   const getCustomerID = (value) => { //Obtiene un cliente por ID
      return knex(table).select().where(value);
   }

   const createCustomer = ( { customer_id, name } ) => { //Método para insertar en la tabla
      return knex(table).insert({
         customer_id: customer_id,
         name: name
      });
   };

   return { createCustomer, getCustomers, getCustomerID}
};

module.exports = {
   databaseService,
} 
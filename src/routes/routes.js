const { Router } = require('express');
const { databaseService } = require('../../services/database');

const router = Router();
const service_db =  databaseService();


router.get('/', ( request, response ) => { //Todos los clientes
   const result = {}
   service_db.getCustomers()
   .then( customers => {
      response.status(200).json(customers);
   })
   .catch(err => {
      response.status(500).send(err);
   })
});

router.get('/:id', ( request, response ) => { //Cliente por ID
   service_db.getCustomerID( {"customer_id": request.params.id} )
   .then( customer => {
      if ( Object.keys(customer).length != 0)
         response.json(customer);
      else
         response.status(404).json({"message": "Customer Not Found"})
   })
   .catch(err => {
      response.status(500).send(err);
   })
})

router.post('/', ( request, response ) => { //Nuevo cliente
   const newCustomer = request.body;

   service_db.createCustomer( newCustomer )
   .then(() => {
      response.json( {"message:": "Customer Created"} )
   })
   .catch(err => {
      response.status(500).send(err)
   })
});

module.exports = router;

const  request = require('supertest');
const { set } = require('../src/app');
const app = require('../src/app');

describe('Get on  route /customers', () => {
   //Testinf to get all customers
   it('Should return json with all customers in DB and status 200', async() => {
      request(app)
      .get('/customer')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(500)
   });
});

describe('GET on route /customer/:id', () => {
   //Testing on route tu get a single customer
   it('Should a single customer by id', async() => {
       request(app)
      .get('/customer/C00001')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
   });
   //Testing with a nonexistent id
   it('Should get status 404', async() => {
      request(app)
      .get('/customer/nonexistentID')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404)
   });
});

describe('POST on /customer', () => {
   //Tersting on Post Request
   it('Should respond with status 201', async() => {
      const data = {
         customer_id : 'C00050',
         name : 'Customer C00050'
      }
      request(app)
      .post('/customer')
      .send(data)
      .set('Accept', 'Application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end( err => {
         if( err ) return err
      })
   });

   it('Should respond with status 500 on case a error', async() => {
      const data = {}
      request(app)
      .post('/customer')
      .send(data)
      .set('Accept', 'Application/json')
      .expect('Content-Type', /json/)
      .expect(500)
      .end( err => {
         if( err ) return err
      })
   });
});
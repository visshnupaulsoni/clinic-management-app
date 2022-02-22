import supertest from 'supertest';
import app from '../routes/app.js';
import {jest} from '@jest/globals'

test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
  });

  describe("Test the root path", () => {
    test("It should response the GET method", done => {
      supertest(app)
        .get("/")
        .then(response => {
          expect(response.statusCode).toBe(200);
          done();
        });
    });
  });

  
describe("Test the delete patient ", () => {
  jest.setTimeout(10000);
    test("It should response the GET method", async ()=> {
     await supertest(app) 
        .get("/patients/delete/6210cdbd34904c276608eae")
        .then(response => {
          console.log(response.text);
          expect(response.text.toString().indexOf("patient removed successfully")!=-1).toEqual(true);
          
        });
    });
  });



  // describe('Testing Doctor Add', () => {
  //   jest.setTimeout(30000);
  //   test('It should response the POST method', async () => {
  //   await supertest(app)
  //   .post('/doctors/add')
  //   .set('name', 'Rajesh')
  //   .set('age', 100)
  //   .set('city','Banglore')
  //   .set('gender','Male')
  //   .set('patientNumber',1)

  //   .send().expect(200)
  //   })
  //  })



//  //Test your UT like you do in postman:
// describe('Testing Patient Search', () => {
//  jest.setTimeout(30000);
//  test('neither zone nor volunteer valid', async () => {
//  await request(app)
//  .post('/patients/ramya')
//  //.set('someparameter', 'somevalue')
//  .send().expect(200)
//  });
// });


describe("Test the add patient", () => {
  test("It should response the GET method", done => {
    supertest(app)
      .get("/patients/Naveen")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});
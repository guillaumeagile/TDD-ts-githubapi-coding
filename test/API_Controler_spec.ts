import {expect} from 'chai';
import ExampleController from '../controllers/ExampleController'
const { test } = require('tap')
const build = require('./app')

describe('API Controler Exercise', () => {


    describe('behavior of the ExampleController', () => {
        it('should say hello', (): void => {
            //ARANGE
            var sut = new ExampleController();
            
           const app = build()

           const response =  app.inject({
             method: 'GET',
             url: '/'
           });

            //ACT
            //let result: boolean = sut.AlertService();

            //ASSERT
            expect(response.statusCode).to.equal(200);
            
        });


    });
});

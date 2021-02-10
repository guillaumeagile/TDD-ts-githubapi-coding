"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const { test } = require('tap');
const build = require('./app');
describe('API Controler Exercise', () => {
    describe('behavior of the ExampleController', () => {
        it('should say hello', () => {
            //ARANGE
            // var sut = new ExampleController();
            const app = build();
            const response = app.inject({
                method: 'GET',
                url: '/'
            });
            //ACT
            //let result: boolean = sut.AlertService();
            //ASSERT
            chai_1.expect(response.statusCode).to.equal(200);
        });
    });
});

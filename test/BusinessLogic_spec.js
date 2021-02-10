"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const BusinessLogic_1 = __importDefault(require("../controllers/BusinessLogic"));
describe('API Controler Exercise', () => {
    describe('behavior of the BusinessLogic', () => {
        it('should say hello', () => {
            ///ARRANGE the System Under Test*
            var sut = new BusinessLogic_1.default();
            //ACT
            let result = sut.sayHello();
            //ASSERT
            chai_1.expect(result).to.equal("Hello, friend2");
        });
    });
});

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
        it('calling /api/healthcheck  should return a different timestamp', () => {
            ///ARRANGE the System Under Test*
            var sut = new BusinessLogic_1.default();
            //ACT
            let result = sut.healthcheck();
            let firstTimeStamp = result.time;
            let secondTimeStamp = sut.healthcheck().time;
            //ASSERT
            chai_1.expect(result.name).to.equal("github-api");
            chai_1.expect(result.version).to.equal("1.0");
            chai_1.expect(firstTimeStamp < secondTimeStamp).to.be.true;
        });
    });
});

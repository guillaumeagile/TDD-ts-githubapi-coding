"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const BusinessLogic_1 = __importDefault(require("../controllers/BusinessLogic"));
const FakeRepo_1 = __importDefault(require("./FakeRepo"));
describe('API Controler Exercise', () => {
    describe('behavior of the BusinessLogic', () => {
        it('should say hello', () => {
            ///ARRANGE the System Under Test*
            let sut = new BusinessLogic_1.default();
            //ACT
            let result = sut.sayHello();
            //ASSERT
            chai_1.expect(result).to.equal("Hello, friend2");
        });
        it('should return a different timestamp when calling /api/healthcheck  ', () => {
            ///ARRANGE the System Under Test*
            let sut = new BusinessLogic_1.default();
            //ACT
            let result = sut.healthcheck();
            let firstTimeStamp = result.time;
            let secondTimeStamp = sut.healthcheck().time;
            //ASSERT
            chai_1.expect(result.name).to.equal("github-api");
            chai_1.expect(result.version).to.equal("1.0");
            chai_1.expect(firstTimeStamp < secondTimeStamp).to.be.true;
        });
        it('should accept a new user when calling /api/users/register  ', () => {
            ///ARRANGE the System Under Test*
            let stubTokenGenerator = () => { return "Fake-Token"; };
            let fakeRepository = new FakeRepo_1.default();
            let sut = new BusinessLogic_1.default(stubTokenGenerator, fakeRepository);
            //ACT
            let result = sut.registerUser("robert", "mitchum");
            //ASSERT
            chai_1.expect(result.status).to.equal("200");
            chai_1.expect(result.body.username).to.equal("robert");
            chai_1.expect(result.body.token).to.equal("Fake-Token"); // I do not use a real token, because it not testable  
            //the real tokens are different at each run, so it cannot be predictible
        });
        it('should list all user calling /api/users/ ', () => {
            ///ARRANGE the System Under Test*
            let stubTokenGenerator = () => { return "Fake-Token"; };
            let fakeRepository = new FakeRepo_1.default();
            let sut = new BusinessLogic_1.default(stubTokenGenerator, fakeRepository);
            //ACT
            sut.registerUser("robert", "mitchum");
            let result = sut.listUsers();
            //ASSERT
            chai_1.expect(result.status).to.equal("200");
            console.log(result.body);
            chai_1.expect(result.body.listOfUsers[0].userName).to.equal("robert");
        });
    });
});

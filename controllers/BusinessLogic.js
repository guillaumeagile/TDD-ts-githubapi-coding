"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BusinessLogic {
    ////of course; I could made my sayHello method in the business logic  async,  but for now I haven't found a compatible test framework with you setup :(
    sayHello() {
        return 'Hello, friend2';
    }
}
exports.default = BusinessLogic;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BusinessLogic {
    healthcheck() {
        return {
            "name": "github-api",
            "version": "1.0",
            "time": process.hrtime()
            //new Date().getTime()
        };
    }
    ////of course; I could made my sayHello method in the business logic  async,  but for now I haven't found a compatible test framework with you setup :(
    sayHello() {
        return 'Hello, friend2';
    }
}
exports.default = BusinessLogic;

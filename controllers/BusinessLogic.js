"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BusinessLogic {
    constructor(tokenGen) {
        if (tokenGen != null)
            this.tokenGen = tokenGen; // this is a external service that could calculate a token. It is passed with Dependency Injection
    }
    registerUser(userName, pwd) {
        return {
            "status": "200",
            "body": {
                username: userName,
                "token": this.tokenGen()
            }
        };
    }
    healthcheck() {
        return {
            "name": "github-api",
            "version": "1.0",
            "time": process.hrtime()
        };
    }
    ////of course; I could made my sayHello method in the business logic  async,  but for now I haven't found a compatible test framework with your setup :(
    sayHello() {
        return 'Hello, friend2';
    }
}
exports.default = BusinessLogic;

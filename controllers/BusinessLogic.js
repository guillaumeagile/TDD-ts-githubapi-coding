"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DtoUser {
    constructor(_userName, _token) {
        this._userName = _userName;
        this._token = _token;
    }
    get userName() {
        return this._userName;
    }
    get token() {
        return this._token;
    }
}
class BusinessLogic {
    constructor(tokenGen, repositoryUsers) {
        this.repositoryUsers = repositoryUsers; // the DB access is generic, it's an adapter to a real DB,  configured in Dependency 
        this.tokenGen = tokenGen; // this is a external service that could calculate a token. It is passed as a Dependency 
    }
    listUsers() {
        let listOfUsers = this.repositoryUsers.ReadAll();
        return {
            "status": "200",
            "body": {
                listOfUsers
            }
        };
    }
    registerUser(userName, pwd) {
        let token = this.tokenGen();
        this.repositoryUsers.Write(new DtoUser(userName, token));
        return {
            "status": "200",
            "body": {
                username: userName,
                "token": token
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

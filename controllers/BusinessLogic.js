"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DomainUser {
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
        this.repositoryUsers.Write(new DomainUser(userName, token)); //clairement la responsabilité de créer (new) le DomainUser ne devrait même pas être dans la logique métier
        // on devrait le faire dans un package qui a pour responsabilité de gérer les entités du domaine métier
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
    ////of course; I could have made this method as async, but I couldn't test is because I haven't found a compatible test library with your setup :(
    sayHello() {
        return 'Hello, friend2';
    }
}
exports.default = BusinessLogic;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BusinessLogic_1 = __importDefault(require("./BusinessLogic"));
const fastify = require('fastify');
class ExampleController {
    constructor(router) {
        this.router = router;
        this.businessLogic = new BusinessLogic_1.default();
        router.get('/api', this.sayHello.bind(this));
        router.get('/api/healthcheck', this.healthcheck.bind(this));
    }
    async sayHello() {
        return Promise.resolve(this.businessLogic.sayHello());
    }
    async healthcheck() {
        return Promise.resolve(this.businessLogic.healthcheck());
    }
}
exports.default = ExampleController;

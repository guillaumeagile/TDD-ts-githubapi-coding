"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpGateway_1 = __importDefault(require("./HttpGateway"));
const ExampleController_1 = __importDefault(require("./controllers/ExampleController"));
(async function main() {
    // Init Fastify router
    const http = new HttpGateway_1.default();
    // Controllers
    new ExampleController_1.default(http.router);
    // Fastify router start
    await http.start();
})();

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
class HttpGateway {
    constructor() {
        this.instance = fastify_1.default({ logger: true });
    }
    get router() {
        return this.instance;
    }
    get port() {
        return 3000;
    }
    async start() {
        await this.instance.listen(this.port, '127.0.0.1');
    }
}
exports.default = HttpGateway;

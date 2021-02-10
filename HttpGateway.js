"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
class HttpGateway {
    constructor() {
        this.instance = fastify_1.default({ logger: true });
        /*   //j'ai tenté d'utiliser ceci:
        fastify.decorate('tokenGenerator', function () {
            // call a real token generator
          })
          */
        // quelle blague!  les exemples donnés dans la doc officielle (comme ci dessus) ne sont meme pas utilisable en TypeScript! :(
        // https://www.fastify.io/docs/latest/Decorators/
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

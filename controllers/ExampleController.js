"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BusinessLogic_1 = __importDefault(require("./BusinessLogic"));
// c'est une blaque???   il faut écrire tout ce code pour que ca marche?????  en plus de l'interface au dessus.  
const ForUserRegistration = {
    schema: {
        params: {
            type: 'object',
            properties: {
                username: {
                    type: 'string'
                },
                password: {
                    type: 'string'
                }
            }
        },
    }
};
// ca c'est vraiment du code non maintenable, qui vous pétera dans les doigts rapidement :(((((
class ExampleController {
    constructor(router) {
        this.router = router;
        this.businessLogic = new BusinessLogic_1.default();
        router.get('/api', this.sayHello.bind(this));
        router.get('/api/healthcheck', () => { return Promise.resolve(this.businessLogic.healthcheck()); });
        router.post('/api/users/register/:params', ForUserRegistration, (request, reply) => {
            let params = request.params;
            console.log(request.params);
            //return Promise.resolve( this.businessLogic.registerUser(params.username, params.password));}                    
            let result = this.businessLogic.registerUser(params.username, params.password);
            reply.code(result.code);
            reply.send(result.body);
        });
    }
    async sayHello() {
        return Promise.resolve(this.businessLogic.sayHello());
    }
}
exports.default = ExampleController;

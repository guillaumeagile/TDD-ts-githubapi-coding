import { FastifyInstance } from "fastify";
import BusinessLogic from "./BusinessLogic";
//const fastify = require('fastify');
import * as fastify from 'fastify'

interface ParamsForUserRegistration {
    username: string,
    password: string
}



// c'est une blaque???   il faut écrire tout ce code pour que ca marche?????  en plus de l'interface au dessus.  
const ForUserRegistration: fastify.RouteShorthandOptions = {
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
}
// ca c'est vraiment du code non maintenable, qui vous pétera dans les doigts rapidement :(((((


export default class ExampleController {

    private router: FastifyInstance
    private businessLogic: BusinessLogic

    constructor(router: FastifyInstance) {
        this.router = router
        this.businessLogic = new BusinessLogic();

        router.get('/api',
            this.sayHello.bind(this))

        router.get('/api/healthcheck',
            () => { return Promise.resolve(this.businessLogic.healthcheck()); }
        )

        router.post('/api/users/register/:params', ForUserRegistration,
            (request, reply) => {
                let params = request.params as ParamsForUserRegistration
                console.log(request.params)
                //return Promise.resolve( this.businessLogic.registerUser(params.username, params.password));}                    
                let result = this.businessLogic.registerUser(params.username, params.password)
                reply.code(result.code)
                reply.send(result.body)
            }
        )
    }

    async sayHello(): Promise<string> {

        return Promise.resolve(this.businessLogic.sayHello())
    }





}


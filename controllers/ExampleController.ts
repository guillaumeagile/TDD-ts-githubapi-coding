import {FastifyInstance} from "fastify";
import BusinessLogic from "./BusinessLogic";
const fastify = require('fastify');

export default class ExampleController {

    private router: FastifyInstance
    private businessLogic : BusinessLogic

    constructor(router: FastifyInstance) {
        this.router = router
        this.businessLogic = new BusinessLogic();

        router.get('/api',
            this.sayHello.bind(this))
    }

    async sayHello(): Promise<string> {
        return Promise.resolve( this.businessLogic.sayHello())
    }
    
  

}


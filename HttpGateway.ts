import fastify, {FastifyInstance} from 'fastify'

export default class HttpGateway  {

    private readonly instance: FastifyInstance

    constructor() {
        this.instance = fastify({logger: true});
        /*   //j'ai tenté d'utiliser ceci:
        fastify.decorate('tokenGenerator', function () {
            // call a real token generator
          })
          */   
        // quelle blague!  les exemples donnés dans la doc officielle (comme ci dessus) ne sont meme pas utilisable en TypeScript! :(
        // https://www.fastify.io/docs/latest/Decorators/
    }

    get router() {
        return this.instance
    }

    get port() {
        return 3000
    }

    async start() {
        await this.instance.listen(this.port, '127.0.0.1')
    }

}

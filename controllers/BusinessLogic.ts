
export default class BusinessLogic {

     healthcheck(): any {
         return {
                "name": "github-api",
                "version": "1.0",
                "time": process.hrtime()                 
            }
     }
        ////of course; I could made my sayHello method in the business logic  async,  but for now I haven't found a compatible test framework with you setup :(
     sayHello(): string {
        return  'Hello, friend2'
     }



     
}
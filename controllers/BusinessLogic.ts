
export default class BusinessLogic {

        tokenGen: () => string


        constructor(tokenGen?: () => string)  // the param should be mandatory, and in the controller it should be given with DI
         {  
                if (tokenGen !=null)
                        this.tokenGen = tokenGen  // this is a external service that could calculate a token. It is passed as a Dependency 
        }

        registerUser(userName: string, pwd: string): any {
                return {
                        "status": "200",
                        "body": {
                                username: userName,
                                "token": this.tokenGen()
                        }
                }
        }

        healthcheck(): any {
                return {
                        "name": "github-api",
                        "version": "1.0",
                        "time": process.hrtime()
                }
        }
        ////of course; I could made my sayHello method in the business logic  async,  but for now I haven't found a compatible test framework with your setup :(
        sayHello(): string {
                return 'Hello, friend2'
        }




}
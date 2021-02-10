// we dont't need to know the real impl of the storage solution, we need to create an abstraction (interface) so we can use it as an Adapter in the logic service
export interface IStore<T> {
        Write(item: T): boolean,
        ReadAll(): Array<T>
}

export interface User {
        userName: string,
        token: string
}

 class DomainUser implements User
 {
        constructor(readonly _userName: string, readonly _token: string) {}

        get userName(): string {
                return this._userName;
              }
         
        get token(): string
        {
                return  this._token;
        }
         
 }

export default class BusinessLogic {
        listUsers() : any {
                let listOfUsers = this.repositoryUsers.ReadAll()
                return {
                        "status": "200",
                        "body": {
                                listOfUsers
                        }
                }
        }

        tokenGen: () => string
        repositoryUsers: IStore<User>


        constructor(tokenGen?: () => string, repositoryUsers?: IStore<User>)  // the param should be mandatory, and in the controller it should be given with DI
        {
                this.repositoryUsers = repositoryUsers  // the DB access is generic, it's an adapter to a real DB,  configured in Dependency 
                
                this.tokenGen = tokenGen  // this is a external service that could calculate a token. It is passed as a Dependency 
        }

        registerUser(userName: string, pwd: string): any {
                let token = this.tokenGen();
                this.repositoryUsers.Write( new DomainUser( userName , token ))  //clairement la responsabilité de créer (new) le DomainUser ne devrait même pas être dans la logique métier
                // on devrait le faire dans un package qui a pour responsabilité de gérer les entités du domaine métier
                return {
                        "status": "200",
                        "body": {
                                username: userName,
                                "token": token
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

        ////of course; I could have made this method as async, but I couldn't test is because I haven't found a compatible test library with your setup :(
        sayHello(): string {
                return 'Hello, friend2'
        }




}
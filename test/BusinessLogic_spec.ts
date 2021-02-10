import { expect } from 'chai';
import BusinessLogic, { IStore, User } from '../controllers/BusinessLogic';
import FakeRepo from './FakeRepo';

describe('API Controler Exercise', () => {


    describe('behavior of the BusinessLogic', () => {
        it('should say hello', (): void => {
            ///ARRANGE the System Under Test*
            let sut = new BusinessLogic()

            //ACT
            let result: string = sut.sayHello();

            //ASSERT
            expect(result).to.equal("Hello, friend2");

        });

        it('should return a different timestamp when calling /api/healthcheck  ', (): void => {
            ///ARRANGE the System Under Test*
            let sut = new BusinessLogic()

            //ACT
            let result: any = sut.healthcheck();
            let firstTimeStamp = result.time;
            let secondTimeStamp = sut.healthcheck().time;

            //ASSERT
            expect(result.name).to.equal("github-api");
            expect(result.version).to.equal("1.0");
            expect(firstTimeStamp < secondTimeStamp).to.be.true;
        });



        it('should accept a new user when calling /api/users/register  ', (): void => {
            ///ARRANGE the System Under Test*
            let stubTokenGenerator = ()=> { return "Fake-Token"};            
            let fakeRepository : IStore<User> = new FakeRepo();
            let sut = new BusinessLogic( stubTokenGenerator, fakeRepository  );

            //ACT
            let result: any = sut.registerUser("robert", "mitchum");


            //ASSERT
            expect(result.status).to.equal("200");
            expect(result.body.username).to.equal("robert");
            expect(result.body.token).to.equal("Fake-Token");  // I do not use a real token, because it not testable  
            //the real tokens are different at each run, so it cannot be predictible

        });


        it('should list all user calling /api/users/ ', (): void => {
            ///ARRANGE the System Under Test*
            let stubTokenGenerator = ()=> { return "Fake-Token"};
            let fakeRepository : IStore<User> = new FakeRepo();
            let sut = new BusinessLogic( stubTokenGenerator, fakeRepository  );

            //ACT
             sut.registerUser("robert", "mitchum");
            let result = sut.listUsers();     

            //ASSERT
            expect(result.status).to.equal("200");
            console.log(result.body);
            expect(result.body.listOfUsers[0].userName).to.equal("robert");
            

        });

    });
});

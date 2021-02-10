import { expect } from 'chai';
import BusinessLogic from '../controllers/BusinessLogic';


describe('API Controler Exercise', () => {


    describe('behavior of the BusinessLogic', () => {
        it('should say hello', (): void => {
            ///ARRANGE the System Under Test*
            var sut = new BusinessLogic()

            //ACT
            let result: string = sut.sayHello();

            //ASSERT
            expect(result).to.equal("Hello, friend2");

        });

        it('calling /api/healthcheck  should return a different timestamp', (): void => {
            ///ARRANGE the System Under Test*
            var sut = new BusinessLogic()

            //ACT
            let result: any = sut.healthcheck();
            let firstTimeStamp = result.time;
            let secondTimeStamp = sut.healthcheck().time;

            //ASSERT
            expect(result.name).to.equal("github-api");
            expect(result.version).to.equal("1.0");
            expect(firstTimeStamp < secondTimeStamp).to.be.true;
        });



        it('calling /api/users/register  should accept a new user', (): void => {
            ///ARRANGE the System Under Test*
            var stubTokenGenerator = ()=> { return "Fake-Token"};
            var sut = new BusinessLogic( stubTokenGenerator  );

            //ACT
            let result: any = sut.registerUser("robert", "mitchum");


            //ASSERT
            expect(result.status).to.equal("200");
            expect(result.body.username).to.equal("robert");
            expect(result.body.token).to.equal("Fake-Token");  // I do not use a real token, because it not testable  
            //the real tokens are different at each run, so it cannot be predictible

        });

    });
});

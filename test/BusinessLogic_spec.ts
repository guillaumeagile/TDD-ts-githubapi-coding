import {expect} from 'chai';
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


    });
});

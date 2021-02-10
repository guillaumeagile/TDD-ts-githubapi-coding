import  { IStore, User } from '../controllers/BusinessLogic';

export default class FakeRepo implements IStore<User>
{
    repo : Array<User>
    constructor() {
        this.repo = new Array();        
    }

    Write(item: User): boolean {
        this.repo.push(item);
        return true;
    }
    
    ReadAll(): User[] {
        return  this.repo;
    }
}
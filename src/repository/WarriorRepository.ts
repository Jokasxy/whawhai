import WarriorsDatabase from '../database/Warriors.json';
import Warrior from '../models/Warrior';

class WarriorRepository
{
    private static instance: WarriorRepository;
    private warriors: Array<Warrior>;

    private constructor()
    {
        this.warriors = WarriorsDatabase;
    }

    public static getInstance(): WarriorRepository
    {
        if(!this.instance)
        {
            this.instance = new WarriorRepository();
        }
        return this.instance;
    }

    public getWarriors(): Array<Warrior>
    {
        return this.warriors;
    }
}
export default WarriorRepository;
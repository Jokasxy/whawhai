import Warriors from '../database/Warriors.json';

class WarriorRepository
{
    private static instance: WarriorRepository;
    private warriors: typeof Warriors;

    private constructor()
    {
        this.warriors = Warriors
    }

    public static getInstance(): WarriorRepository
    {
        if(!this.instance)
        {
            this.instance = new WarriorRepository();
        }
        return this.instance;
    }
}
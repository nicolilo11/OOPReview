import { Mobile } from './mobile';

export class MobileLibrary
{
    private name:string;
    private location:string;
    private mobiles:Mobile [];
    private totalPrice:number;

    constructor(name: string, location: string, arrMobiles: Mobile[])
    {
        this.name = name;
        this.location = location;
        this.mobiles = arrMobiles;
        this.totalPrice = this.totalPriceCalculation();
    }

    public getName():string
    {
        return this.name
    }

    public getLocation():string
    {
        return this.location
    }

    public getMobiles():Mobile[]
    {
        return this.mobiles
    }

    public getTotalPrice():number
    {
        return this.totalPrice;
    }

    public setName(n:string):void
    {
        this.name = n;
    }

    public setLocation(l:string):void
    {
        this.location = l;
    }

    public setMobiles(m:Mobile[]):void
    {
        this.mobiles = m;
    }
    
    private totalPriceCalculation():number
    {
        let sumaPrecios:number = 0;
        for(let mobile in this.mobiles)
        {
            sumaPrecios += this.mobiles[mobile].price;
        }
        return sumaPrecios
    }

    public printLibrary():void
    {
        console.log("•" + " \t" + "This is all my mobiles:")

        for(let objetos in this.mobiles)
        {
            this.mobiles[objetos].print()
        }

        console.log("Price overall: " + this.getTotalPrice());
    }
}
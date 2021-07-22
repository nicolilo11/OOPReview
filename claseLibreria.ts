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
    }

    getName():string
    {
        return this.name
    }

    getLocation():string
    {
        return this.location
    }

    getMobiles():Mobile[]
    {
        return this.mobiles
    }

    setName(n:string)
    {
        this.name = n;
    }

    setLocation(l:string)
    {
        this.location = l;
    }

    setMobiles(m:Mobile[])
    {
        this.mobiles = m;
    }
    
    totalPriceCalculation()
    {
        let sumaPrecios:number = 0;
        for(let mobile in this.mobiles)
        {
            sumaPrecios += this.mobiles[mobile].price;
        }
        return sumaPrecios
    }
}




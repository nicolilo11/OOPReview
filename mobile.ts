export class Mobile
{
    public name:string;
    public model:string;
    public tradeMark:string;
    public sDSize:number;
    public color:string;
    public is5G:boolean;
    public cameraNumber:number;
    public price:number;

    constructor(name:string, model:string, tradeMark:string,
         sdSize:number, color:string, is5G:boolean, camaraNumber:number, price:number)
    {
        this.name = name;
        this.model = model;
        this.tradeMark = tradeMark;
        this.sDSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = camaraNumber;
        this.price = price;
    }

    public getName(): string
    {
        return this.name;
    }

    public getModel(): string
    {
        return this.model;
    }

    public getTradeMark(): string
    {
        return this.tradeMark;
    }

    public getSDSize(): number
    {
        return this.sDSize;
    }

    public getColor(): string
    {
        return this.color;
    }

    public getIs5G(): boolean
    {
        return this.is5G;
    }

    public getCameraNumber(): number
    {
        return this.cameraNumber;
    }

    public getPrice(): number
    {
        return this.price;
    }

    public setName(n:string)
    {
        this.name = n;
    }

    public setModel(s:string)
    {
        this.model = s;
    }

    public setTradeMark(tD:string)
    {
        this.tradeMark = tD;
    }

    public setSDSize(sDSize:number)
    {
        this.sDSize = sDSize;
    }

    public setColor(c:string)
    {
        this.color = c;
    }

    public setIs5G(cincoG:boolean)
    {
        this.is5G = cincoG;
    }

    public SetCameraNumber(n:number)
    {
        this.cameraNumber = n;
    }

    public setPrice(p:number)
    {
        this.price = p;
    }

    public print()
    {
        let caracteristicas = "•" + "  " + "The characteristics of the mobile " + this.name + " are:" +"\n" +
                              "\t" + "•" + "  " + "Name : " + this.name +"\n" +
                              "\t" + "•" + "  " + "Model : " + this.model +"\n" +
                              "\t" + "•" + "  " + "Trademark : " + this.tradeMark +"\n" +
                              "\t" + "•" + "  " + "SD size (GB) : " + this.sDSize +"\n" +
                              "\t" + "•" + "  " + "Color : " + this.color +"\n" +
                              "\t" + "•" + "  " + "Is 5g? : " + this.is5G +"\n" +
                              "\t" + "•" + "  " + "Number of Cameras : " + this.cameraNumber +"\n" +
                              "\t" + "•" + "  " + "Price : " + this.price;
        console.log(caracteristicas);
    }
}
let prueba:Mobile = new Mobile("arturo","b","sd",2,"ss", true, 2, 200);
prueba.print();
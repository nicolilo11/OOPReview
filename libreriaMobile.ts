import { Mobile } from "./mobile";
import { MobileLibrary } from './claseLibreria';

let mobile1:Mobile = new Mobile("Iphone 12", "12", "Iphone", 256, "Purple", true, 2, 1240);
let mobile2:Mobile = new Mobile("Samsung S20", "S20", "Samsung", 128, "Cosmic grey", true, 2, 649);
let mobile3:Mobile = new Mobile("oppo Reno", "Reno", "Oppo", 128, "Ocean Green", true, 2, 299);
let mobile4:Mobile = new Mobile("Xiaomi Redmi Note 10 Pro", "Remi Note 10 Pro", "Xiaomi", 64, "Glacier Blue", false, 3, 249);


let arrMobiles: Mobile[] = [mobile1, mobile2, mobile3, mobile4];

let libraryMobiles:MobileLibrary = new MobileLibrary ("Los ultimos moviles", "España", arrMobiles);

let nokia3210:Mobile = new Mobile("Nokia3210", "3210", "Nokia", 1 , "Negro", false, 1, 50);
let iphone3G:Mobile = new Mobile("Iphone3G", "3G", "Iphone", 2, "Blanco", false, 2, 200);
let samsungGalaxy10:Mobile = new Mobile("Samsung Galaxy 10", "S10", "Samsung", 3, "Dorado", true, 3, 400);

console.log(libraryMobiles.getName());
console.log(libraryMobiles.getLocation());
console.log(libraryMobiles.getMobiles());

libraryMobiles.setName("Los peores moviles del mercado");
libraryMobiles.setLocation("Japoon");
libraryMobiles.setMobiles([nokia3210,iphone3G,samsungGalaxy10]);

console.log(libraryMobiles.getName());
console.log(libraryMobiles.getLocation());
console.log(libraryMobiles.getMobiles());




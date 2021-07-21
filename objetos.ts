import { Mobile } from "./mobile";

let nokia3210:Mobile = new Mobile("Nokia3210", "3210", "Nokia", "Estandar", "Negro", false, 1, 50);
let iphone3G:Mobile = new Mobile("Iphone3G", "3G", "Iphone", "Estandar", "Blanco", false, 2, 200);
let samsungGalaxy10:Mobile = new Mobile("Samsung Galaxy 10", "S10", "Samsung", "Estandar", "Dorado", true, 3, 400);

console.log(nokia3210 , iphone3G, samsungGalaxy10);

nokia3210.is5G = true;
nokia3210.cameraNumber = 4;

console.log(nokia3210.name);
console.log(nokia3210.model);
console.log(nokia3210.tradeMark);
console.log(nokia3210.sDSize);
console.log(nokia3210.color);
console.log(nokia3210.is5G);
console.log(nokia3210.cameraNumber);
console.log(nokia3210.price);

console.log(iphone3G.name);
console.log(iphone3G.model);
console.log(iphone3G.tradeMark);
console.log(iphone3G.sDSize);
console.log(iphone3G.color);
console.log(iphone3G.is5G);
console.log(iphone3G.cameraNumber);
console.log(iphone3G.price);

console.log(samsungGalaxy10.name);
console.log(samsungGalaxy10.model);
console.log(samsungGalaxy10.tradeMark);
console.log(samsungGalaxy10.sDSize);
console.log(samsungGalaxy10.color);
console.log(samsungGalaxy10.is5G);
console.log(samsungGalaxy10.cameraNumber);
console.log(samsungGalaxy10.price);










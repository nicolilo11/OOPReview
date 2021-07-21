import { Mobile } from "./mobile";

let nokia3210:Mobile = new Mobile("Nokia3210", "3210", "Nokia", 1, "Negro", false, 1, 50);
let iphone3G:Mobile = new Mobile("Iphone3G", "3G", "Iphone", 2, "Blanco", false, 2, 200);
let samsungGalaxy10:Mobile = new Mobile("Samsung Galaxy 10", "S10", "Samsung", 3, "Dorado", true, 3, 400);

console.log(nokia3210.print() , iphone3G.print(), samsungGalaxy10.print());

nokia3210.setIs5G(true);
nokia3210.SetCameraNumber(4);

console.log(nokia3210.getName());
console.log(nokia3210.getModel());
console.log(nokia3210.getTradeMark());
console.log(nokia3210.getSDSize());
console.log(nokia3210.getColor());
console.log(nokia3210.getIs5G());
console.log(nokia3210.getCameraNumber());
console.log(nokia3210.getPrice());

console.log(iphone3G.getName());
console.log(iphone3G.getModel());
console.log(iphone3G.getTradeMark());
console.log(iphone3G.getSDSize());
console.log(iphone3G.getColor());
console.log(iphone3G.getIs5G());
console.log(iphone3G.getCameraNumber());
console.log(iphone3G.getPrice());

console.log(samsungGalaxy10.getName());
console.log(samsungGalaxy10.getModel());
console.log(samsungGalaxy10.getTradeMark());
console.log(samsungGalaxy10.getSDSize());
console.log(samsungGalaxy10.getColor());
console.log(samsungGalaxy10.getIs5G());
console.log(samsungGalaxy10.getCameraNumber());
console.log(samsungGalaxy10.getPrice());
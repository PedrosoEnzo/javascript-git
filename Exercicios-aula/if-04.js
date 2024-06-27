let hora = 18;
let isBomDia = hora >= 6 && hora <11
let isBoaTarde = hora > 12 && hora <=17
if(isBomDia) {
    console.log("Bom dia!");
}else if (isBoaTarde){
    console.log("Boa tarde!");
}else{
    console.log("Boa noite!");
}


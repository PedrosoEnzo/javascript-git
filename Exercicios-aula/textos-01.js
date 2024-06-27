let txt = "Estão chegando as provas";
//Define o tamanho de caracteres
console.log(txt.length);
//Retorna a primiera posição da string
console.log(txt.indexOf("as"));
//Ultima posição na string
console.log(txt.lastIndexOf("as"));
//Define só os caracteres selecionados
console.log(txt.slice(0,5));
//trocas as palavras da frase
console.log(txt.replace("provas", "avaliações"));
//Deixa em maiusculo
console.log(txt.toUpperCase());
//Deixa em minusculo
console.log(txt.toLocaleLowerCase());
//desenvolva um algoritmo que valide a idade da pessoa conforme as leis brasileiras de votação, retornando uma mensagem com as condições


//1. não possui idade para votar
//2. voto facultativo
//3. voto obrigatório

//const idade = ?;


const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
  });
 
  readline.question("Quantos anos você tem? ", (idade) =>{
 
  if (idade < 16){
    console.log("Você não tem idade para votar.")
  }
  else if (idade >= 16 && idade < 18){
    console.log("Você tem direito a voto facultativo.")
  }
  else if (idade >= 70){
    console.log("Você tem direito a voto facultativo.")
  }
  else{
    console.log("O seu voto é obrigatorio")
  }
 
  readline.close()
 
})
let nomeHeroi = "Geralt de Rívia"
let nivelXp = 11000

if(nivelXp <= 1000){
    nivel = "Ferro"
}else if(nivelXp > 1000 && nivelXp <= 2000){
    nivel = "Bronze"
}else if(nivelXp > 2000 && nivelXp <= 5000){
    nivel = "Prata"
}else if(nivelXp > 5000 && nivelXp <= 7000){
    nivel = "Ouro"
}else if(nivelXp > 7000 && nivelXp <= 8000){
    nivel = "Platina"
}else if(nivelXp > 8000 && nivelXp <= 9000){
    nivel = "Ascendente"
}else if(nivelXp > 9000 && nivelXp <= 10000){
    nivel = "Imortal"
}else{
    nivel = "Radiante"
}

console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel)
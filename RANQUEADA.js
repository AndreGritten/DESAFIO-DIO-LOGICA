function getWinBalance(wins, losses){
    return wins - losses;
}

function defineRankByWinBalance(balance){
    if (balance <= 10) return "Iron";
    else if (balance <= 20) return "Bronze";
    else if (balance <= 50) return "Silver";
    else if (balance <= 80) return "Gold";
    else if (balance <= 90) return "Diamond";
    else if (balance <= 100) return "Legendary";
    else return "Immortal";
}

let balance = getWinBalance(100, 25);
let rank = defineRankByWinBalance(balance);

console.log(`Based on your Win Balance: ${balance}, your rank is: ${rank}`);
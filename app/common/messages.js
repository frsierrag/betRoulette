const errorCodes = {
    rouletteNotOpen: "01. Roulette isn't open. Try in a roulette diferent.",
    betNumberAndColor: "02. Cann't send number and color at same time.",
    noNumberNoColor: "03. Need sending a number or color for you bet." 
};
const messagesCodes = {
    successStatus: "Success",
    rejectedStatus: "Rejected",
    wonBet: "Won bet",
    lostBet: "Lost bet",
    redColor: "red",
    blackColor: "black"
}
module.exports = { errorCodes, messagesCodes };
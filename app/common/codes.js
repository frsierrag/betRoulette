const errorCodes = {
    rouletteNotOpen: "01. Roulette isn't open. Try in a roulette diferent.",
    betNumberAndColor: "02. Cann't send number and color at same time.",
    noNumberNoColor: "03. Need sending a number or color for you bet." 
};
const messages = {
    successStatus: "Success",
    rejectedStatus: "Rejected",
    winBet: "Win bet",
    loseBet: "lose bet",
    redColor: "red",
    blackColor: "black"
}
module.exports = { errorCodes, messages };
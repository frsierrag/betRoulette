const errorCodes = {
    rouletteNotOpen: "3. Roulette isn't open. Try in a roulette different.",
    betNumberAndColor: "4. Cann't send number and color at same time.",
    noNumberNoColor: "5. Need sending a number or color for you bet." 
};
const messagesCodes = {
    successStatus: "Success",
    rejectedStatus: "Rejected",
    wonBet: "Won bet",
    lostBet: "Lost bet",
    redColor: "red",
    blackColor: "black",
    datSpace: ". "
}
module.exports = { errorCodes, messagesCodes };
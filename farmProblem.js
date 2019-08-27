//You've got chickens, cows, and pigs. Return the total number of
// legs on your farm.

function animals(chickens, cows, pigs) {
    var chickenLegs = chickens * 2;
    var cowLegs = cows * 4;
    var pigLegs = pigs * 4;

    return (chickenLegs + cowLegs + pigLegs)
}
// Testing

/**
 * @param {Array<{ toy: string, quantity: number }>} giftsToProduce
 * @returns {string[]} Array of manufactured gifts
 */
function manufactureGifts(giftsToProduce) {
    console.log(giftsToProduce)

    const result = []
    for (let i = 0; i < giftsToProduce.length; i++) {
        let toy = giftsToProduce[i].toy
        let quantity = giftsToProduce[i].quantity
        console.log(toy, quantity)

        for (let i = 0; i < quantity; i++) {
            result.push(toy)
        }
    }

    console.log("Result", result)
    
    return result
}

const giftsToProduce = [
    { toy: 'car', quantity: 2 },
    { toy: 'doll', quantity: 3 },
    { toy: 'ball', quantity: 1 },
]

manufactureGifts(giftsToProduce)
import { makePottery } from './PotteryWheel.js'
import { firePottery } from './Kiln.js'
import { toSellOrNotToSell } from './PotteryCatalog.js'
// Imports go first


// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 1, 2)
let cup = makePottery("Cup", 1, 2)
let bowl = makePottery("Bowl", 3, 4)
let vase = makePottery("Vase", 12, 7)
let cat = makePottery("Cat", 7, 5)
// console.log([mug, cup, bowl, vase, cat])

// Fire each piece of pottery in the kiln
firePottery(mug, 2100)
firePottery(cup, 2201)
firePottery(bowl, 2100)
firePottery(vase, 2100)
firePottery(cat, 2100)
// console.log([mug, cup, bowl, vase, cat])
toSellOrNotToSell(mug)
toSellOrNotToSell(cup)
toSellOrNotToSell(bowl)
toSellOrNotToSell(vase)
toSellOrNotToSell(cat)
console.log([mug, cup, bowl, vase, cat])
// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list




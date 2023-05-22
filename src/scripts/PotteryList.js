import { usePottery } from './PotteryCatalog.js'

export const PotteryList = () => {
    const potteryForSale = usePottery();
    let potteryArr = [];

    for (const pottery of potteryForSale) {
        potteryArr.push(
            `<section class="pottery" id="pottery--${pottery.id}">
                <h2 class="pottery__shape">${pottery.shape}</h2>
                <div class="pottery__properties">
                    Item weighs ${pottery.weight} grams and is ${pottery.height} cm in height
                </div>
                <div class="pottery__price">Price is $${pottery.price}</div>
            </section>`
        )
    }
    let HTMLString = potteryArr.join("\n")
    return HTMLString;
}
let inventory = [];

export const toSellOrNotToSell = (pottery) => {
    if (!pottery.cracked) {
        if (pottery.weight >= 6) {
            pottery.price = 40;
        } else {
            pottery.price = 20
        }
        inventory.push(pottery)
    }
    return pottery;
}

export const usePottery = () => {
    let potteryForSale = JSON.parse(JSON.stringify(inventory));
    return potteryForSale;
}
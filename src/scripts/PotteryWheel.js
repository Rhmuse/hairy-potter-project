let potteryKey = 1;

export const makePottery = (shape, weight, height) => {
    let pottery = {
        shape,
        weight,
        height,
        id: potteryKey,
    }
    potteryKey++;
    return pottery;
}
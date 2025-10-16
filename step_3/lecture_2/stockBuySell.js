function stockBuySell(arr, n) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let price of arr) {
        if (price < minPrice) {
            minPrice = price;
        }

        const profit = price - minPrice;

        if (profit > maxProfit) {
            maxProfit = profit;
        }
    }

    return maxProfit;
}
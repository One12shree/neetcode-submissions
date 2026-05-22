class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buyPrice = prices[0];
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < buyPrice) {
            buyPrice = prices[i];   // buy cheaper
        } else {
            profit = Math.max(profit, prices[i] - buyPrice); // sell higher
        }
    }

    return profit;
    }
}

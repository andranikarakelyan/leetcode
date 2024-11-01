function maxProfit(prices: number[]): number {
    let futureMax=0, maxProfit=0;
    for( let i=prices.length-1; i>=0; i-- ) {
        futureMax = Math.max( prices[i], futureMax );
        maxProfit = Math.max(futureMax - prices[i], maxProfit);
    }
    return maxProfit;
};
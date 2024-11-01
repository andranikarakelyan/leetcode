function minEatingSpeed(piles: number[], h: number): number {
    let lk=1, rk=Math.max(...piles), minK=rk;
    while(lk<=rk) {
        const k=Math.floor((lk+rk)/2);
        const time=piles.reduce((s,p)=>s+Math.ceil(p/k),0);
        if(time<=h) { minK=Math.min(k, minK); rk=k-1; }
        else lk=k+1;
    }
    return minK;
};
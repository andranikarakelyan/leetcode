function maxArea(height: number[]): number {
    let maxS=0;
    for(let li=0,ri=height.length-1;li!==ri;) {
        const s=(ri-li)*Math.min(height[li], height[ri]);
        if(s>maxS) maxS=s;
        if(height[li]<height[ri]) li++;
        else ri--;
    }
    return maxS;
};
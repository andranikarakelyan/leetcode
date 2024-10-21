function search(nums: number[], target: number): number {
    let li=0, ri=nums.length-1, mi;
    while(li<=ri) {
        mi=Math.floor((li+ri)/2);
        if(nums[mi]===target) return mi;
        else if(nums[mi]<target) li=mi+1;
        else ri=mi-1;
    }
    return -1;
};
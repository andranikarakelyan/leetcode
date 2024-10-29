function findMin(nums: number[]): number {
    let li=0, ri=nums.length-1;
    let min=nums[0];

    while(li<=ri) {
        console.log(li, ri);
        if(nums[li]<nums[ri]) {
            min=Math.min(min, nums[li]);
            return min;
        }

        const mi=Math.floor((li+ri)/2);
        min=Math.min(min, nums[mi]);
        if(nums[mi]>=nums[li]) li=mi+1;
        else ri=mi-1;
    }

    return min;

};
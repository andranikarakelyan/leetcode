function search(nums: number[], target: number): number {
    let li=0, ri=nums.length-1;
    while(li<=ri) {
        const mi=Math.floor((li+ri)/2);
        if(nums[mi]===target) return mi;
        if(nums[li]<=nums[mi]) {
            if(target>nums[mi] || target<nums[li]) li=mi+1;
            else ri=mi-1;
        }
        else {
            if(target<nums[mi] || target>nums[ri]) ri=mi-1;
            else li=mi+1;
        }
    }
    return -1;
};
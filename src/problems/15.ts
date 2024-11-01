function threeSum(nums: number[]): number[][] {
    const result: number[][] = [];
    nums.sort((a,b)=>a-b);
    for(let i=0; i<nums.length-2; i++) {
        if(nums[i]===nums[i-1]) continue;
        for(let j=i+1, k=nums.length-1;k>j && k<nums.length;) {
            const sum = nums[i]+nums[j]+nums[k];
            if(sum===0) {
                result.push([nums[i],nums[j++],nums[k]]);
                while(nums[j]===nums[j-1] && j<k) j++;
            }
            else if(sum<0) j++;
            else k--;
        }
    }
    return result;
};
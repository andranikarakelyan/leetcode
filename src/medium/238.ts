function productExceptSelf(nums: number[]): number[] {
    const answer=[];
    let s = 1;
    for(let i=0; i<nums.length; i++) {
        answer.push(s);
        s*=nums[i];
    }
    s=1;
    for(let i=nums.length-1; i>=0; i--) {
        answer[i]*=s;
        s*=nums[i];
    }
    return answer;
};
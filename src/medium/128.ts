function longestConsecutive(nums: number[]): number {
    const numsSet = new Set(nums);
    let maxLength = 0;

    for (let v of numsSet) {
        if (numsSet.has(v - 1)) continue;

        let length = 1;
        while (numsSet.has(++v)) {
            length++;
        }

        if (length > maxLength) maxLength = length;
    }

    return maxLength;
}
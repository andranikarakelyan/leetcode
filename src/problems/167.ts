function twoSum(numbers: number[], target: number): number[] {
    for(let li=0,ri=numbers.length-1; li<numbers.length && ri>=0 && li!==ri;) {
        const sum = numbers[li]+numbers[ri];
        if(sum===target) return [li+1, ri+1];
        else if(sum>target) ri--;
        else li++;
    }
};
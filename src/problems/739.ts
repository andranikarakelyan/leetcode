function dailyTemperatures(ts: number[]): number[] {
    const stack: number[] = [];
    const answer = new Array(ts.length).fill(0);
    for(let i=0; i<ts.length; i++) {
        while(stack.length && ts[stack[stack.length-1]]<ts[i] ) {
            const pi=stack.pop();
            answer[pi]=i-pi;
        }
        stack.push(i);
    }
    return answer;
}
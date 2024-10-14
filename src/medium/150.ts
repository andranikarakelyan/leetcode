function evalRPN(tokens: string[]): number {
    const stack: number[] = [];
    for(const token of tokens) {
        let n = parseInt(token);
        if(isNaN(n)) {
            const op2=stack.shift(), op1=stack.shift();
            switch(token) {
                case '+': n = op1+op2; break;
                case '-': n = op1-op2; break;
                case '*': n = op1*op2; break;
                case '/': n = Math.trunc(op1/op2); break;
            }
        }
        stack.unshift(n);
    }
    return stack[0];
}
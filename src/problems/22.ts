function generateParenthesis(n: number): string[] {
    const result: string[]=[];
    rec('', n, n);
    return result;

    function rec(str: string, open: number, close: number)  {
        if((open||close) === 0) {
            result.push(str);
            return;
        }

        if(close>open) {
            rec(str+')',open, close-1);
        }

        if(open>0) {
            rec(str+'(', open-1, close);
        }
    }
}
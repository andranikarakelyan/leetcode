function isValid(s: string): boolean {
    const stack: string[] = [];
    const dict = {')': '(', '}': '{', ']': '['};

    for(const c of s) {
        if ( dict[c] ) {
            if ( stack[stack.length - 1] !== dict[c] ) return false;
            stack.pop();
        }
        else stack.push(c);
    }

    return stack.length === 0;
}
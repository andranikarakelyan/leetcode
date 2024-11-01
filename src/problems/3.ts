function lengthOfLongestSubstring(s: string): number {
    let max = 0, substr: string[] = [];

    for ( const c of s ) {
        const fi = substr.indexOf(c);
        if ( fi !== -1 ) substr.splice(0, fi + 1);
        substr.push(c);
        if ( substr.length > max ) max = substr.length;
    }

    return max;
};
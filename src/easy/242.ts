function isAnagram(s: string, t: string): boolean {

    if(s.length !== t.length) return false;

    const [m1, m2] = [s,t]
        .map( str => str.split('')
            .reduce((acc,char)=>({
                ...acc,
                [char]: acc[char] ? ++acc[char] : 1,
            }), {})
        );

    for(const k in m1) {
        if(m1[k] !== m2[k]) return false;
    }

    return true;
};
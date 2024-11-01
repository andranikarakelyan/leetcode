function groupAnagrams(strs: string[]): string[][] {;
    const m: Map<string, string[]> = new Map();
    
    for(const str of strs) {
        const k = str.split("").sort().join("");
        
        let item = m.get(k);
        if(!item) m.set(k, item = []);

        item.push(str);
    }

    return Array.from(m.values());
};
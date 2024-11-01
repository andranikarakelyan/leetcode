function topKFrequent(nums: number[], k: number): number[] {
    const cm: {[k: number]: number} = {};

    for(const n of nums) {
        cm[n] = ( cm[n] || 0 ) + 1;
    }

    return Object.entries(cm)
        .sort( ( [,v1], [,v2] ) => v2 - v1 )
        .slice(0,k).map(([k])=>Number(k));

};
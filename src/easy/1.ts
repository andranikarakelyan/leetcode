function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();
    for ( const [i1, n] of nums.entries() ) {
        const i2 = map.get( target - n );
        if ( i2 !== undefined ) {
            return [i1,i2];
        }
        map.set( n, i1 );
    }
    throw new Error( 'Solution not found' );
};
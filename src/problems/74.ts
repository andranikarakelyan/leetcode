function searchMatrix(matrix: number[][], target: number): boolean {
    let li=0, ri=matrix.length*matrix[0].length-1;
    while(li<=ri) {
        const mi=Math.floor((li+ri)/2);
        const x=mi%matrix[0].length, y=Math.floor(mi/matrix[0].length);
        if(matrix[y][x]===target) return true;
        else if(matrix[y][x]<target) li=mi+1;
        else ri=mi-1;  
    }
    return false;
};
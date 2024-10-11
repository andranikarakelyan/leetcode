function isValidSudoku(board: string[][]): boolean {
    const boxSize=Math.ceil(Math.sqrt(board.length));
    const checked=new Set();

    for( let i=0; i<board.length; i++ ) {
        for(let j=0; j<board[i].length; j++) {
            const c=board[i][j];
            if(c===".") continue;
            
            const bi=Math.floor(i/boxSize), bj=Math.floor(j/boxSize);
            const
                rk=`r${i}∋${c}`,
                ck=`c${j}∋${c}`,
                bk=`b${bi}:${bj}∋${c}`;

            if(checked.has(rk) || checked.has(ck) || checked.has(bk)) return false;
            checked.add(rk).add(ck).add(bk);
        }
    }

    return true;
}
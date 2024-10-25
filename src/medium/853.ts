function carFleet(target: number, position: number[], speed: number[]): number {
    const fleetsStack:number[] = [];
    const sp = position
        .map((p, i)=>({p, t: (target-p)/speed[i]}))
        .sort((a,b)=>b.p-a.p);

    for(let i=0; i<sp.length; i++) {
      if(sp[i].t>fleetsStack[0] || fleetsStack.length===0) fleetsStack.unshift(sp[i].t);
    }
    
    return fleetsStack.length;
};
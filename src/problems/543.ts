class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


function diameterOfBinaryTree(root: TreeNode | null): number {    
    if(!root) return 0;
    
    let maxD=0;
    rec(root);
    return maxD;

    function rec(node: TreeNode | null): number {
        if(!node) return 0;
        const lh=rec(node.left), rh=rec(node.right);
        maxD=Math.max(lh+rh, maxD);
        return Math.max(lh, rh)+1;
    }
};
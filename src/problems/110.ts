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

function isBalanced(root: TreeNode | null): boolean {
    let isHB=true;
    getHeight(root);
    return isHB;

    function getHeight(node: TreeNode | null): number {
        if(!node || !isHB) return 0;    
        const lh=getHeight(node.left), rh=getHeight(node.right);
        isHB=isHB && Math.abs(lh-rh)<=1;
        return Math.max(lh, rh)+1;
    }
};
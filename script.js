class BinaryTreeNode {
    value = null;
    left = null;
    right = null;


    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    setLeft(node) {
        this.left = node;
    }

    setRight(node) {
        this.right = node;
    }

    getHeight() {
        const leftHeight = this.left?.getHeight() || 0;  // If left not available then it returns 0 otherwise it return undefined
        const rightHeight = this.right?.getHeight() || 0; // If right not available then it returns 0 otherwise ot return undefined

        return Math.max(leftHeight, rightHeight) + 1;
    }

}



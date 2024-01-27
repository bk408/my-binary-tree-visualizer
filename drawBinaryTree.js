import { BinaryTreeNode } from "./BinaryTreeNode.js"
import { getRequiredHeightAndWidth } from "./treeutils.js";


const canvas = document.querySelector("canvas");

function drawBinaryTree(root, canvasElement) {
    
    const maxWidth = window.innerWidth;  // taking max width of window
    const maxHeight = window.innerHeight; // taking max height of window

    // Initialize the canvas dimensions
    canvasElement.width = maxWidth;
    canvasElement.height = maxHeight;

    // calculate required width & height to draw the tree structure
   const { requiredCanvasHeight, requiredCanvasWidth } =
     getRequiredHeightAndWidth(root);


    // calculate center Points
    
    const windowWidthCenter = maxWidth / 2;
    const requiredWidthCenter = requiredCanvasWidth / 2;

    const xStart = windowWidthCenter - requiredWidthCenter;
    const xEnd = windowWidthCenter + requiredWidthCenter;

    const horizontalConfig = { xStart, xEnd }
    
    // Draw
}


const root = new BinaryTreeNode(1);  // creating first node

const node2 = new BinaryTreeNode(2);
root.setLeft(node2);

const node3 = new BinaryTreeNode(3);
root.setRight(node3);

console.log(root);


drawBinaryTree(root, canvas)
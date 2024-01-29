import { BinaryTreeNode } from "./BinaryTreeNode.js";
import {
  DEFAULT_CONFIG,
  connectEdges,
  drawNode,
  getRequiredHeightAndWidth,
} from "./treeutils.js";

const canvas = document.querySelector("canvas");

function drawBinaryTree(root, canvasElement) {
  const maxWidth = window.innerWidth; // taking max width of window
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

  const horizontalConfig = { xStart, xEnd };

  // Draw

  recursivelyDrawNotes(root, canvasElement, 0.5, horizontalConfig);
}

function recursivelyDrawNotes(
  root,
  canvasElement,
  currentLine,
  horizontalConfig
) {
  const { xStart, xEnd } = horizontalConfig;

  const xPos = (xStart + xEnd) / 2; // Find x-position for circle
  const yPos = currentLine * DEFAULT_CONFIG.nodeHeightSpacing; // Find y-position for circle

  drawNode(root.value, canvasElement, xPos, yPos); // draw the circle

  if (root.left !== null) {
    // recursively Left node created
    const leftNodeHorizontalConfig = { xStart, xEnd: xPos };
    recursivelyDrawNotes(
      root.left,
      canvasElement,
      currentLine + 1,
      leftNodeHorizontalConfig
    );

    connectEdges(
      canvasElement,
      {
        xStart: xPos,
        xEnd: (xStart + xPos) / 2,
      },
      {
        yStart: yPos + DEFAULT_CONFIG.radius,
        yEnd:
          (currentLine + 1) * DEFAULT_CONFIG.nodeHeightSpacing -
          DEFAULT_CONFIG.radius,
      }
    );
  }

  if (root.right !== null) {
    // recursively right node created
    const rightNodeHorizontalConfig = { xStart: xPos, xEnd };
    recursivelyDrawNotes(
      root.right,
      canvasElement,
      currentLine + 1,
      rightNodeHorizontalConfig
    );

    connectEdges(
      canvasElement,
      {
        xStart: xPos,
        xEnd: (xPos + xEnd) / 2,
      },
      {
        yStart: yPos + DEFAULT_CONFIG.radius,
        yEnd:
          (currentLine + 1) * DEFAULT_CONFIG.nodeHeightSpacing -
          DEFAULT_CONFIG.radius,
      }
    );
  }
}

const root = new BinaryTreeNode(1); // creating first node

const node2 = new BinaryTreeNode(2);
root.setLeft(node2);

const node3 = new BinaryTreeNode(3);
root.setRight(node3);

const node4 = new BinaryTreeNode(4);
node3.setLeft(node4);

const node7 = new BinaryTreeNode(7);
node3.setRight(node7);

const node5 = new BinaryTreeNode(5);
node2.setLeft(node5);

const node6 = new BinaryTreeNode(6);
node2.setRight(node6);

console.log(root);

drawBinaryTree(root, canvas);

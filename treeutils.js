import { BinaryTreeNode } from "./BinaryTreeNode.js";

export const DEFAULT_CONFIG = {
  radius: 20,
  nodeWidthSpacing: 25, // width spacing
  nodeHeightSpacing: 100, // line height
  nodeFontSize: 10, // font size
};

export function getRequiredHeightAndWidth(root) {
  const heightOfTree = root.getHeight(); // calculate the height of canvas
  const maxLeafNodes = Math.pow(2, heightOfTree); // calculate the width of canvas

  const requiredCanvasHeight = heightOfTree * DEFAULT_CONFIG.nodeHeightSpacing; // calculate the height of canvas
  const requiredCanvasWidth = maxLeafNodes * DEFAULT_CONFIG.nodeWidthSpacing; // calculate the width of canvas

  return {
    requiredCanvasHeight,
    requiredCanvasWidth,
  };
}

export function drawNode(value, canvasElement, x, y) {
  const context = canvasElement.getContext("2d"); // tool to draw

  // draw circle

  context.beginPath();
  context.arc(x, y, DEFAULT_CONFIG.radius, 0, 2 * Math.PI, false);
  context.fillStyle = "lightsalmon";
  context.fill();

  // draw circle border

  context.beginPath();
  context.arc(x, y, DEFAULT_CONFIG.radius, 0, 2 * Math.PI, false);
  context.strokeStyle = "brown";
  context.stroke();

  // write value

  context.font = `${DEFAULT_CONFIG.nodeFontSize}pt serif`;
  context.fillStyle = "brown";
  context.textAlign = "center";
  context.fillText(value, x, y + DEFAULT_CONFIG.nodeFontSize / 2);
}

// Connecting edges of nodes
export function connectEdges(canvasElement, xCoordinates, yCoordinates) {
  const { xStart, xEnd } = xCoordinates;
  const { yStart, yEnd } = yCoordinates;

  const xHalf = (xStart + xEnd) / 2;
  const yHalf = (yStart + yEnd) / 2;

  const start = { x: xStart, y: yStart };
  const cPoint1 = { x: xHalf, y: yHalf };
  const cPoint2 = { x: xEnd, y: yHalf };
  const end = { x: xEnd, y: yEnd };

  // draw curve

  const context = canvasElement.getContext("2d");
  context.beginPath();
  context.strokeStyle = "brown";
  context.moveTo(start.x, start.y);

  context.bezierCurveTo(
    cPoint1.x,
    cPoint1.y,
    cPoint2.x,
    cPoint2.y,
    end.x,
    end.y
  );
  // context.lineTo(end.x, end.y);

  context.stroke();
}

export function treeConstructor(input) {
  input = parseInput(input);

  const queue = [];

  let idx = 0;

  const root = new BinaryTreeNode(input[idx]);
  idx++;

  queue.push(root);

  while (queue.length > 0 && idx < input.length) {
    const node = queue.shift();

    // Left child
    if (idx < input.length) {
      if (input[idx] !== null) {
        const leftNode = new BinaryTreeNode(input[idx]);
        node.setLeft(leftNode);
        queue.push(leftNode);
      }
      idx++;
    }

    // Right Child

    if (idx < input.length) {
      if (input[idx] !== null) {
        const rightNode = new BinaryTreeNode(input[idx]);
        node.setRight(rightNode);
        queue.push(rightNode);
      }
      idx++;
    }
  }

  return root;
}

function parseInput(input) {
  let parseInput = "";

  for (let i = 0; i < input.length; i++) {
    const ch = input.charAt(i);
    if (ch !== "") parseInput += ch;
  }

  return parseInput.split(",").map((elem) => {
    if (elem === "null") return null;
    else return elem;
  });
}

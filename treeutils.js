export const DEFAULT_CONFIG = {
    radius: 20,
    nodeWidthSpacing: 25,  // width spacing
    nodeHeightSpacing: 100,  // line height
    nodeFontSize: 10   // font size
}

export function getRequiredHeightAndWidth(root) {
  const heightOfTree = root.getHeight(); // calculate the height of canvas
  const maxLeafNodes = Math.pow(2, heightOfTree); // calculate the width of canvas

  const requiredCanvasHeight = heightOfTree * DEFAULT_CONFIG.nodeHeightSpacing; // calculate the height of canvas
    const requiredCanvasWidth = maxLeafNodes * DEFAULT_CONFIG.nodeWidthSpacing; // calculate the width of canvas
    
    return {
        requiredCanvasHeight,
        requiredCanvasWidth
    }
}
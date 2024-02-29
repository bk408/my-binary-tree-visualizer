![tree-visulizier](https://github.com/bk408/my-binary-tree-visualizer/assets/116827830/f0de63dc-f70b-4e1e-864e-09f012eee812)


# Summary:

The "My Binary Tree Visualizer" project is an interactive application designed to visualize binary trees, inspired by the functionality of LeetCode's tree visualizer. Users input tree data, and the application dynamically generates a visual representation of the binary tree. The visualization utilizes a canvas along with Bezier curves to accurately render the tree structure. Behind the scenes, the application employs algorithms to calculate precise coordinates for placing circles (nodes) and connecting them with lines (edges), ensuring an accurate and visually appealing representation of the binary tree. This project combines elements of user interface design, graphical rendering, and algorithmic computation to provide an intuitive tool for understanding and visualizing binary tree structures. 🚀🚀


# Process

- Understand the concept
- create binary node tree properties in BinaryTreeNode.js
- Set default_config in treeUtils.js
- Create drawBinaryTree.js

- Initialize canvas via query selector
- creation function drawBinaryTree & pass root canvasElement as an argument
- Find maxWidth & maxHeight for window
- Initialize the canvas dimensions
- Calculate the required width & height to draw the tree structure

- create getRequiredHeightAndWidth function in treeUtils.js
- calculate the height of the canvas
- calculate the width of the canvas

- calculate center points

- Create recursivelyDrawNotes function in drawBinaryTree.js
- Find the x & y - position for the circle

- Create drawNode function in treeUtils.js
- Create drawCircle, draw border & write value in circle

- recursively Left node created in drawBinaryTree.js
- recursively Right node created in drawBinaryTree.js

- connectEdges function created in treeUtils.js
- coordinates create for curve
- Create draw curve

- Understand the algorithm behind the bezier curve, convex hull
- https://javascript.info/bezier-curve

- Calculate coordinates for bezier curve
- Node connect using Bezier curve

-  Textarea, Apply & Clear button created for further process
- Apply CSS on Textarea, and apply and clear buttons

- Functionality for Apply & Clear buttons and textarea created in drawBinaryTree.js

- Hardcoded data removed from drawBinaryTree.js
- treeConstructor function created in treeutils.js
- parseInput function created for parsing the data

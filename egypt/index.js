// create canvas element
const canvas = document.createElement('canvas');
canvas.width = 58 * 8;
canvas.height = 58 * 8;

// get canvas context
const ctx = canvas.getContext('2d');

// define colors
const bgColor = '#F9E4B7'; // sand color
const pyramidColor = '#FFE5B4'; // light orange color
const treeColor = '#01640C'; // dark green color
const camelColor = '#C19A6B'; // light brown color

// draw background
ctx.fillStyle = bgColor;
ctx.fillRect(0, 0, canvas.width, canvas.height);

// set tile size
const tileSize = 8;

// draw pyramid
ctx.fillStyle = pyramidColor;
ctx.fillRect(5 * tileSize, 5 * tileSize, 8 * tileSize, 8 * tileSize);
ctx.fillRect(4 * tileSize, 9 * tileSize, 10 * tileSize, 8 * tileSize);
ctx.fillRect(3 * tileSize, 13 * tileSize, 12 * tileSize, 8 * tileSize);

// draw palm trees
ctx.fillStyle = treeColor;
ctx.fillRect(1 * tileSize, 2 * tileSize, 4 * tileSize, 6 * tileSize);
ctx.fillRect(3 * tileSize, 1 * tileSize, 4 * tileSize, 8 * tileSize);
ctx.fillRect(6 * tileSize, 2 * tileSize, 4 * tileSize, 6 * tileSize);
ctx.fillRect(8 * tileSize, 1 * tileSize, 4 * tileSize, 8 * tileSize);

// draw camels
ctx.fillStyle = camelColor;
ctx.fillRect(2 * tileSize, 7 * tileSize, 7 * tileSize, 2 * tileSize);
ctx.fillRect(4 * tileSize, 6 * tileSize, 9 * tileSize, 4 * tileSize);
ctx.fillRect(2 * tileSize, 9 * tileSize, 7 * tileSize, 2 * tileSize);
ctx.fillRect(7 * tileSize, 8 * tileSize, 7 * tileSize, 2 * tileSize);
ctx.fillRect(9 * tileSize, 7 * tileSize, 7 * tileSize, 6 * tileSize);

// append canvas to body
document.body.appendChild(canvas);

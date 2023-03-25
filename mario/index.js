// create canvas element
const canvas = document.createElement('canvas');
canvas.width = 58 * 8;
canvas.height = 58 * 8;

// get canvas context
const ctx = canvas.getContext('2d');

// define colors
const bgColor = '#5c94fc'; // blue color
const shirtColor = '#ffab48'; // orange color
const hatColor = '#d82028'; // red color
const skinColor = '#f8b878'; // light brown color
const pantsColor = '#3c3c3c'; // dark gray color

// draw background
ctx.fillStyle = bgColor;
ctx.fillRect(0, 0, canvas.width, canvas.height);

// set tile size
const tileSize = 8;

// draw shirt
ctx.fillStyle = shirtColor;
ctx.fillRect(9 * tileSize, 10 * tileSize, 8 * tileSize, 4 * tileSize);
ctx.fillRect(7 * tileSize, 14 * tileSize, 12 * tileSize, 2 * tileSize);
ctx.fillRect(6 * tileSize, 16 * tileSize, 14 * tileSize, 2 * tileSize);
ctx.fillRect(5 * tileSize, 18 * tileSize, 16 * tileSize, 2 * tileSize);

// draw hat
ctx.fillStyle = hatColor;
ctx.fillRect(9 * tileSize, 7 * tileSize, 8 * tileSize, 3 * tileSize);
ctx.fillRect(8 * tileSize, 8 * tileSize, tileSize, tileSize);
ctx.fillRect(17 * tileSize, 8 * tileSize, tileSize, tileSize);

// draw face
ctx.fillStyle = skinColor;
ctx.fillRect(9 * tileSize, 14 * tileSize, 6 * tileSize, 2 * tileSize);
ctx.fillRect(15 * tileSize, 14 * tileSize, 2 * tileSize, tileSize);
ctx.fillRect(9 * tileSize, 16 * tileSize, 8 * tileSize, 2 * tileSize);
ctx.fillRect(8 * tileSize, 18 * tileSize, 10 * tileSize, 2 * tileSize);

// draw pants
ctx.fillStyle = pantsColor;
ctx.fillRect(9 * tileSize, 22 * tileSize, 4 * tileSize, 4 * tileSize);
ctx.fillRect(15 * tileSize, 22 * tileSize, 4 * tileSize, 4 * tileSize);
ctx.fillRect(7 * tileSize, 26 * tileSize, 12 * tileSize, 4 * tileSize);
ctx.fillRect(6 * tileSize, 30 * tileSize, 14 * tileSize, 2 * tileSize);
ctx.fillRect(5 * tileSize, 32 * tileSize, 16 * tileSize, 2 * tileSize);
ctx.fillRect(4 * tileSize, 34 * tileSize, 3 * tileSize, 2 * tileSize);
ctx.fillRect(11 * tileSize, 34 * tileSize, 6 * tileSize, 2 * tileSize);
ctx.fillRect(19 * tileSize, 34 * tileSize, 3 * tileSize, 2 * tileSize);
ctx.fillRect(9 * tileSize, 36 * tileSize, 2 * tileSize, 2 * tileSize);
ctx.fillRect(16 * tileSize, 36 * tileSize, 2 * tileSize, 2 * tileSize);

// append canvas to body
document.body.appendChild(canvas);

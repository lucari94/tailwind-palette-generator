var ColorScheme = require('color-scheme');
var argv = require('yargs').argv;
const parsers = require('./parsers');


let color = parsers.colorToPalette(argv.color);
console.log(color);


var scheme = new ColorScheme;
scheme.from_hue(hue)
      .scheme('triade') 
      .variation('soft');

var colors = scheme.colors();
console.log(colors);
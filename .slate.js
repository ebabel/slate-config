// fullscreen
var fullscreen = slate.operation("move", {
  "x" : "screenOriginX",
  "y" : "screenOriginY",
  "width" : "screenSizeX",
  "height" : "screenSizeY"
});

slate.bind("1:alt,ctrl", function(win) {
  win.doOperation(fullscreen);
});


// throwing
var pushRight = slate.operation("throw", {
  "screen" : "right", "width" : "screenSizeX", "height" : "screenSizeY"
});
var pushLeft = slate.operation("throw", {
  "screen" : "left", "width" : "screenSizeX", "height" : "screenSizeY"
});

slate.bind("0:alt,ctrl", function(win) {
  win.doOperation(pushRight);
});
slate.bind("9:alt,ctrl", function(win) {
  win.doOperation(pushLeft);
});

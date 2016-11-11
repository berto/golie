function Painter() {

  this.imports = [
    'elementStorage',
    'instanceStorage'
  ];

  let colorScheme = [];

  function clearBackgrounds($cell) {
    $cell.css('background', 'inherit');
  }

  function addBackground($cell, color) {
    $cell.css('background', color);
  }

  function grabRandomColor() {
    let length = colorScheme.length;
    let random = Math.floor(Math.random * length);
    return colorScheme[random];
  }

  function process$Cell() {}

  this.paint = function() {
    let instances = this.instanceStorage.getStorage();
    instances.forEach((instance) => {
      let matrix = instance.lifeMatrix;
      let color = instance.color;
      matrix.forEach((col, x) => {
        col.forEach((cell, y) => {
          let $cell = this.elementStorage.getElements()[x][y];
          if (cell === 1) {
            addBackground($cell, color);
          } else {
            clearBackgrounds($cell);
          }
        });
      });
    });
  }

  this.changeColors = function(colorArray) {
    colorScheme = colorArray;
  }





}

function GridMaker() {

  this.imports = [
    'elementStorage',
    'environmentInfo'
  ];

  var dimension = 4;

  this.initialize = function(size) {
    dimension = size;
    this.elementStorage.loadDimension(dimension)
    this.environmentInfo.setDimension(dimension);
  }

  var $body = $('body');

  this.get$Columns = () => $columns;

  function styleBody() {
    $body.css({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    })
  }

  function make$Grid() {
    $grid = $(`<div class="grid"></div>`);
    apply$GridStyles();
  }

  this.insert$Cells = function() {
    for (var i = 0; i < dimension; i++) {
      let $column = makeColumn();
      for (var j = 0; j < dimension; j++) {
        let $cell = $(`<div class="cell"></div>`);
        apply$CellStyles($cell);
        $column.append($cell);
        this.elementStorage.pushToColumn(i, $cell);
      }
      $body.append($column);
    }
  }

  function cellStyles() {
    var length = $body.width() / dimension;
    return {
      width: length,
      height: length,
      border: '0px solid black'
    }
  }

  function colStyles() {
    var width = $body.width() / dimension;
    return {
      width: width,
      height: '100%',
      display: 'flex',
      flexFlow: 'column nowrap',
    }
  }

  function apply$CellStyles($cell) {
    $cell.css(cellStyles());
  }

  function apply$ColStyles($col) {
    $col.css(colStyles());
  }

  function makeColumn() {
    let $column = $(`<div class="column"></div>`);
    apply$ColStyles($column);
    return $column;
  }

  this.storeCell = function($cell) {
    this.elementStorage.pushToColumn($cell);
  }

  this.renderGrid = function() {
    styleBody();
    this.insert$Cells();
  }
}

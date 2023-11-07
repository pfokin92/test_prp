function highlightChange() {
  let source = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  if(source.getName()==='pivot'){
    let lastRow = source.getLastRow();
    let lastCol = source.getLastColumn();
    let data = source.getRange(3,3,lastRow-3,lastCol-2).getValues();
    for(let row =0; row < data.length; row++ ){
      for(let col= 1; col< data[row].length; col++){
        let lastVal = data[row][col-1];
        let currVal = data[row][col]
        source.getRange(row+3,col+3,1,1).setBackground(currVal>lastVal? GREEN:currVal<lastVal?RED:NET);

      }
    }
  } else {
    SpreadsheetApp.getUi().alert('App works on sheet "pivot" only');
  }
}

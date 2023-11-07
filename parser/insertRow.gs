
function insertRow(data){
  const book = SpreadsheetApp.getActiveSpreadsheet();
  const sheetName = 'www.google.com';
  const sheet = book.getSheetByName(sheetName) || book.insertSheet(sheetName);
  const lastRow = sheet.getLastRow();
  const newRow = lastRow+1;
  let now = new Date();
  if(lastRow===0){
    for(let col=0; col<LIST_NAMES_COLUMNS.length; col++){
      sheet.getRange(1,col+1,1,1).setValue(LIST_NAMES_COLUMNS[col]);
    }
    insertRow(data);
  }
  else{
    sheet.getRange(newRow,COL_ID).setValue(lastRow);
    sheet.getRange(newRow,COL_DT).setValue(now);
    sheet.getRange(newRow,COL_REPORT).setValue(data.count===sheet.getRange(lastRow,COL_NUM,1,1).getValue()?0:1);
    sheet.getRange(newRow,COL_RAT).setValue(data.score);
    sheet.getRange(newRow,COL_NUM).setValue(data.count);
    sheet.getRange(newRow,COL_NUM_ONE).setValue(data.numStars.one);
    sheet.getRange(newRow,COL_NUM_TWO).setValue(data.numStars.two);
    sheet.getRange(newRow,COL_NUM_THREE).setValue(data.numStars.three);
    sheet.getRange(newRow,COL_NUM_FOUR).setValue(data.numStars.four);
    sheet.getRange(newRow,COL_NUM_FIVE).setValue(data.numStars.five);
    sheet.getRange(newRow,COL_NUM_DAY).setValue(now.getDate());
    sheet.getRange(newRow,COL_NUM_MONTH).setValue(now.getMonth()+1);
    sheet.getRange(newRow,COL_NUM_YEAR).setValue(now.getFullYear());
    sheet.getRange(newRow,COL_NUM_WEEK).setValue(now.getDay());
  }
}

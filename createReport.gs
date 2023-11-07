function createReport() {
  let source = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('weeks');

  let folder = DriveApp.getFolderById('1WTDzUkzfJuFpNd6x0oqe1MNsfsmUEGBY');
  let templateID = DriveApp.getFileById('1FzfMBWI3-_a-jsCz06fcJTSeIyrhNIhPPeCnDn_aDLI').makeCopy('Отчет по неделям', folder).getId();
  
  let newFile = DocumentApp.openById(templateID);

  // let newFile = DocumentApp.openById('1svLTQ3AeFr2FLPIF2aLsAN2A5_p33gBSYf-Nlsavv10');

  let body = newFile.getBody();

  let table = body.getTables()[0]

  let numRow = table.getNumRows();

  let style = {};
  style[DocumentApp.Attribute.BOLD]=true;
  style[DocumentApp.Attribute.ITALIC]=true;

  
  for(let i = 1; i<numRow; i++){
    let currRow = table.getRow(i);
    let numCol = currRow.getNumCells();
    for(let j=1;j< numCol; j++){
      let cellDoc = currRow.getCell(j);
      let cellText = cellDoc.getText();
      let cellSheet = source.getRange(cellText);
      let backColor = cellSheet.getBackground();
      let insertValue = cellSheet.getValue();

      if ((cellText.includes('E')||cellText.includes('H')||cellText.includes('K')||cellText.includes('N')) && i>1){
        cellDoc.replaceText(cellText,`${(insertValue*100).toFixed(2)}%`);
      }
      else {
        cellDoc.replaceText(cellText, insertValue);
      }
      cellDoc.setBackgroundColor(backColor);
      if(i===1){
        cellDoc.setAttributes(style);
      }
    }
  }
  newFile.saveAndClose();


  let now = new Date();

  let ui = SpreadsheetApp.getUi();


  let pdf = DriveApp.getFileById(templateID).getBlob().getAs('application/pdf');
  pdf.setName(`Report ${now.getDate()}_${now.getMonth()+1}`);
  folder.createFile(pdf);
  DriveApp.getFolderById(templateID).setTrashed(true)
  ui.alert('Your report.', `${folder.getUrl()}`, ui.ButtonSet.OK_CANCEL)
}

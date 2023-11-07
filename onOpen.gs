function onOpen() {
  SpreadsheetApp.getUi().createMenu('Macros')
  .addItem('Get new review data','runCode')
  .addItem('Create new report','createReport')
  .addItem('Highlight Change in pivot taable','highlightChange')
  .addToUi();
}

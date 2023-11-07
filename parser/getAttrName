function getAttrName(html, attr, i) {
  let idxStart = html.indexOf(attr +'=' , i);
  if (idxStart == -1) return "Can't to find attr " + attr + ' !';
  idxStart = html.indexOf('"' , idxStart) + 1;
  let idxEnd = html.indexOf('"' , idxStart);
  return html.slice(idxStart,idxEnd).trim();
}

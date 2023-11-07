function getBlock(html, tag, idxStart) {  // <tag .... > Block </tag>

  let openTag = '<' + tag;
  let lenOpenTag = openTag.length;
  let closeTag = '</' + tag + '>';
  let lenCloseTag = closeTag.length;
  let countCloseTags = 0;
  let iMax = html.length;
  let idxEnd = 0;
  // where we are?
  if (html.slice(idxStart, idxStart + lenOpenTag) != openTag) {
    idxStart = html.lastIndexOf(openTag, idxStart);
    if (idxStart == -1) return ["Can't to find openTag " + openTag + ' !', -1];
  };
  // change start - will start after openTag!
  idxStart = html.indexOf('>', idxStart) + 1;
  let i = idxStart;
  
  while (i <= iMax) {
    i++;
    if (i === iMax) {
      return ['Could not find closing tag for ' + tag, -1];
    };
    let carrentValue = html[i];
    if (html[i] === '<'){
      let closingTag = html.slice(i, i + lenCloseTag);
      let openingTag = html.slice(i, i + lenOpenTag);
      if (html.slice(i, i + lenCloseTag) === closeTag) {
        if (countCloseTags === 0) {
          idxEnd = i - 1;
          break;
        } else {
          countCloseTags -= 1;
        };
      } else if (html.slice(i, i + lenOpenTag) === openTag) {
        countCloseTags += 1;
      };
    };
  };
  return [html.slice(idxStart,idxEnd + 1).trim(), idxEnd];
}

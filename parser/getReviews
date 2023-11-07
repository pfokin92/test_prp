function getReviews(company) {
  let url = `https://www.trustpilot.com/review/${company}`;

  let response = UrlFetchApp.fetch(url);
  let html = response.getContentText();

  let blockHeaders = getBlock(html, 'div', html.indexOf('class="styles_header__yrrqf"'))[0];

  //Получаем количество оценок
  let numberOfRatingsText = getBlock(blockHeaders, 'p',blockHeaders.indexOf('typography_body-l__KUYFJ typography_appearance-default__AAY17'))[0];
  let numberOfRatings = Number(numberOfRatingsText.slice(0, numberOfRatingsText.indexOf('<')).replace(',',''));

  let blockHeaderStar = getBlock(blockHeaders, 'h2',0)[0];

  // Получаем среднюю оценку 
  let meanScore = Number(getBlock(blockHeaderStar, 'span',blockHeaderStar.indexOf('typography_heading-m__T_L_X typography_appearance-default__AAY17'))[0]);

  let blokReviewsDetails =getBlock(html, 'div', html.indexOf('class="styles_container__z2XKR"'))[0];


  let stars = {
    five: 0,
    four: 0,
    three: 0,
    two: 0,
    one: 0
  };

  let index = 1;
  let numberOfStars = 0;
  while(index<blokReviewsDetails.length-'</label>'.length){

    index = blokReviewsDetails.indexOf('label', index);

    let numberOfStarsText = getAttrName(blokReviewsDetails, 'title', index);
    let test = getAttrName(blokReviewsDetails, 'data-star-rating', index);

    index = blokReviewsDetails.indexOf('</label>', index);

    numberOfStars = Number(numberOfStarsText.replace(',','').slice(0, numberOfStarsText.indexOf(' ')));
    stars[test] = numberOfStars

  }
  
  return {
    score: meanScore, 
    count: numberOfRatings,
    numStars: stars
  };

  
}

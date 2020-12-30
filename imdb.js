const puppeteer = require('puppeteer');
 
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.imdb.com/title/tt6723592/?ref_=adv_li_tt', {waitUntil: 'networkidle2'});

  data = await page.evaluate(() => {
      title = document.querySelector('div[class="title_wrapper"] >h1').innerText
      rating = document.querySelector('span[itemprop="ratingValue"]').innerText
      ratingCount = document.querySelector('span[itemprop="ratingCount"]').innerText

      return {
          title,
          rating,
          ratingCount
      }

  })
  
  console.log(data);
  debugger;
 
  await browser.close();
})();
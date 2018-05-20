const puppeteer = require('puppeteer');

let scrape = async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('http://books.toscrape.com/');
    await page.waitFor(1000);

    const result = await page.evaluate(() => {
        let data = [];
        let elements = document.querySelectorAll('article.product_pod');

        for (var element of elements) {
            let title = element.childNodes[5].innerText; // Select the title
            let price = element.childNodes[7].children[0].innerText; // Select the price

            data.push({title, price});
        }

        return data;
    });

    browser.close();
    return result;
}

scrape().then((value) => {
    console.log(value); // success whatever
})
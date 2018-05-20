const puppeteer = require('puppeteer');

// getting data to access the page that the cliente want
const [appRun, scriptExecuted, urlGoTo] = process.argv;

async function takePic(page, fotoName, pathFoto) {
    console.log('pathFoto');
    console.log(pathFoto);
  if (pathFoto) {
    pathFoto = `print/${fotoName}`;
  }

  await page.setViewport({width: 1000, height: 500});
  await page.screenshot({path: pathFoto});
}

async function setDataForm(urlGoTo) {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto(urlGoTo);
    await takePic(page, 'urlGoTo');

    await browser.close();
}

setDataForm(urlGoTo);

console.log('script finished!...');
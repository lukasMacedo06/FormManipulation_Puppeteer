const puppeteer = require('puppeteer');
const dataClient = require('./client');
const dataForm = require('./formToComplete');

// campo para remover o foco, após digitar/selecionar algum campo
const CLICK_OFF = '#div_form1 > table > tbody > tr:nth-child(1) > td:nth-child(1) > div > label';
const TYPEBLE_FIELD = ['text', 'select'];

// getting data to access the page that the cliente want
const [appRun, scriptExecuted, urlGoTo] = process.argv;

async function run(urlGoTo) {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto(urlGoTo);

    await fillForm(page);

    // browser.close();
    return true;
}

async function fillForm(page) {

    for (let field of dataForm) {
        if (field.dependant) {
            await page.waitFor(2*1000);
        }

        await page.click(field.input);

        if (TYPEBLE_FIELD.includes(field.type)) {
            await page.keyboard.type(dataClient[field.input_data_client]);
        }

        await page.click(CLICK_OFF);
    }

}

run(urlGoTo);
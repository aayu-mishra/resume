const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('file:///C:/Users/akank/OneDrive/Desktop/Project/node_projects/resume.html', {waitUntil: 'networkidle2'});

    await page.pdf({
        path: 'C:/Users/akank/OneDrive/Desktop/Project/node_projects/resume.pdf',
        format: 'A4',
        printBackground: true
    });

    await browser.close();
    console.log("✅ PDF successfully created with full CSS support!");
})();

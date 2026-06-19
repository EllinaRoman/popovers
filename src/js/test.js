const puppeteer = require("puppeteer");
const path = require("path");

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto('file://' + path.resolve(__dirname, '../../dist/index.html'));
  await page.waitForSelector(".tooltip");

  await page.click("button");
  const isVisible = await page.$eval(
    ".tooltip",
    (el) => !el.classList.contains("hidden"),
  );
  console.log("Popover виден после клика:", isVisible);

  await page.click("button");
  const isHidden = await page.$eval(".tooltip", (el) =>
    el.classList.contains("hidden"),
  );
  console.log("Popover скрыт после второго клика:", isHidden);

  await browser.close();
})();

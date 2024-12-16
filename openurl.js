const puppeteer = require("puppeteer");

const openurl = async () => {
  try {
    // Launch a new Chrome browser instance
    const browser = await puppeteer.launch({
      headless: false, //  open the browser window
    });

    const page = await browser.newPage();

    // Navigate to YouTube
    await page.goto("https://www.youtube.com", {
      waitUntil: "domcontentloaded",
    });

    const currentUrl = page.url();

    console.log("Saved URL:", currentUrl);
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

openurl();

"use strict";

// Require Node.js Dependencies
const { join } = require("path");

// Require Third-party Dependencies
const puppeteer = require("puppeteer");

// CONSTANTS
const kBadgeViewPath = join(__dirname, "badge.html");

async function main() {
    const browser = await puppeteer.launch()
    try {
        const page = await browser.newPage()
        await page.goto(`file:${kBadgeViewPath}`);
        await page.screenshot({
            path: "badge.png",
            omitBackground: true,
            clip: {
                width: 750,
                height: 390,
                x: 0,
                y: 0
            }
        })
    }
    finally {
        await browser.close()
    }
}
main().catch(console.error);

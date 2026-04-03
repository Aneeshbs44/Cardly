from playwright.async_api import async_playwright

async def scrape_flipkart(product: str):

    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        search_url = f"https://www.flipkart.com/search?q={product}"

        await page.goto(search_url)

        await page.wait_for_timeout(3000)

        title = await page.locator("._4rR01T").first.text_content()
        price = await page.locator("._30jeq3").first.text_content()

        await browser.close()

        price = price.replace("₹", "").replace(",", "")

        return {
            "platform": "Flipkart",
            "title": title,
            "price": int(price)
        }
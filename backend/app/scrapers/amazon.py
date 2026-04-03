from playwright.async_api import async_playwright

async def scrape_amazon(product: str):

    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        search_url = f"https://www.amazon.in/s?k={product}"

        await page.goto(search_url)

        await page.wait_for_timeout(3000)

        title = await page.locator("span.a-size-medium").first.text_content()
        price = await page.locator("span.a-price-whole").first.text_content()

        await browser.close()

        price = price.replace(",", "")

        return {
            "platform": "Amazon",
            "title": title,
            "price": int(price)
        }
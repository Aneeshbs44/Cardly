from playwright.async_api import async_playwright

async def scrape_myntra(product: str):

    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        search_url = f"https://www.myntra.com/{product}"

        await page.goto(search_url)

        await page.wait_for_timeout(3000)

        title = await page.locator(".product-product").first.text_content()
        price = await page.locator(".product-discountedPrice").first.text_content()

        await browser.close()

        price = price.replace("Rs. ", "").replace(",", "")

        return {
            "platform": "Myntra",
            "title": title,
            "price": int(price)
        }
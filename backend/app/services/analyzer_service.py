import asyncio

from app.scrapers.amazon import scrape_amazon
from app.scrapers.flipkart import scrape_flipkart
from app.scrapers.myntra import scrape_myntra
from app.services.card_service import apply_card_discount


async def analyze_product(data):

    scraper_results = await asyncio.gather(
        scrape_amazon(data.product),
        scrape_flipkart(data.product),
        scrape_myntra(data.product),
        return_exceptions=True,
    )

    results = [result for result in scraper_results if isinstance(result, dict)]

    if not results:
        raise ValueError("Could not fetch prices from any platform")

    final_results = []

    for result in results:
        final_price = apply_card_discount(
            result["price"], data.cardType
        )

        result["final_price"] = final_price
        final_results.append(result)

    best = min(final_results, key=lambda x: x["final_price"])

    return {
        "best": best,
        "all": final_results
    }
def apply_card_discount(price, card):

    card = card.lower()

    if "hdfc" in card:
        return price - 3000

    if "icici" in card:
        return price - 2000

    if "axis" in card:
        return price - 1500

    return price
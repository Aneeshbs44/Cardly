from pydantic import BaseModel

class AnalyzeResponse(BaseModel):
    platform: str
    price: float
    final_price: float
from pydantic import BaseModel

class AnalyzeRequest(BaseModel):
    cardType: str
    product: str
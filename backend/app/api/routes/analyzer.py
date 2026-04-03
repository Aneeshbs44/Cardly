from fastapi import APIRouter, HTTPException

from app.models.request import AnalyzeRequest
from app.services.analyzer_service import analyze_product

router = APIRouter(prefix="/api", tags=["analyzer"])


@router.post("/analyze")
async def analyze(data: AnalyzeRequest):
    try:
        return await analyze_product(data)
    except ValueError as exc:
        raise HTTPException(status_code=502, detail=str(exc)) from exc
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers.user import router as user_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)

app.include_router(user_router)


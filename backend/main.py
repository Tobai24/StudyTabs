from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database import engine
from .router import login
import model

model.Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = ["http://localhost:5173/", "study-tabs.vercel.app"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(login.router)
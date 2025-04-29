import logging
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware  # To fix all CORs frontend errors
from ariadne.asgi import GraphQL
from app.graphql.schema import schema
from app.db.models import Base
from app.db.database import engine

Base.metadata.create_all(bind=engine)
logging.basicConfig(level=logging.DEBUG)
app = FastAPI()

origins = [
    "http://localhost:5173",  # Frontend dev server
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,            # Allow frontend
    allow_credentials=True,
    allow_methods=["*"],              # Allow all HTTP methods (POST, GET, etc.)
    allow_headers=["*"],              # Allow all headers (Content-Type, Authorization, etc.)
)

@app.on_event("startup")
async def startup_event():
    logging.debug("Starting up the FastAPI application...")

app.mount("/graphql", GraphQL(schema, debug=True))

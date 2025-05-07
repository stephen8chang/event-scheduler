from ariadne import QueryType, MutationType
from app.db.models import Event
from app.db.database import SessionLocal
from datetime import datetime

query = QueryType()
mutation = MutationType()

@query.field("events")
def resolve_events(_, info):
    db = SessionLocal()
    return db.query(Event).all()

@mutation.field("addEvent")
def resolve_add_event(_, info, input):
    db = SessionLocal()

    if input.get("start_time"):
        input["start_time"] = datetime.fromisoformat(input["start_time"].replace("Z", "+00:00"))

    event = Event(**input)
    db.add(event)
    db.commit()
    db.refresh(event)
    return event

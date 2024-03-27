from fastapi import APIRouter, HTTPException
from app.config.db import collection
from app.models.user import UserRegistration
from app.schemas.user import UserRegistrationSchema

router = APIRouter()

@router.post("/register")
async def register_user(user: UserRegistration):
    existing_user = collection.find_one({"username": user.username})
    if existing_user:
        raise HTTPException(status_code=400, detail="Username already exists.")

    existing_email = collection.find_one({"email": user.email})
    if existing_email:
        raise HTTPException(status_code=400, detail="Email already exists.")

    if user.password != user.confirmPassword:
        raise HTTPException(status_code=400, detail="Passwords do not match.")

    user_dict = user.dict()
    del user_dict['confirmPassword'] 
    collection.insert_one(user_dict)

    return {"message": "User registered successfully"}


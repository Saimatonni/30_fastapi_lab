from pydantic import BaseModel

class UserRegistration(BaseModel):
    username: str
    email: str
    password: str
    confirmPassword: str
    phoneNumber: str

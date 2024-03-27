from pydantic import BaseModel

class UserRegistrationSchema(BaseModel):
    username: str
    email: str
    password: str
    confirmPassword: str
    phoneNumber: str

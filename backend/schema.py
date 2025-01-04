from pydantic import BaseModel, EmailStr
from datetime import datetime

class UserLogin(BaseModel):
    email: EmailStr
    password: str
    
    
class Signup(BaseModel):
    email: EmailStr
    id: int
    created_at: datetime
    
    model_config = {'from_attributes': True}
    

    
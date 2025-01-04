from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional

class UserLogin(BaseModel):
    email: EmailStr
    password: str
    
    
class Signup(BaseModel):
    email: EmailStr
    id: int
    created_at: datetime
    
    model_config = {'from_attributes': True}
    
class Token(BaseModel):
    access_token: str
    token_type: str
    
class TokenData(BaseModel):
    id: Optional[str] =  None
    

    
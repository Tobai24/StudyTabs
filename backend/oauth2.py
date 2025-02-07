from jose import JWTError, jwt
from datetime import datetime, timedelta, timezone
from fastapi import Depends, status, HTTPException
from sqlalchemy.orm import Session
from fastapi.security import OAuth2PasswordBearer
from . import schema, database, model
from .config import settings


oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/signin")
# Secret Key 
# Secret Key 
SECRET_KEY = settings.secret_key
#Algorithm 
ALGORITHM = settings.algorithm
#Expiration time
ACCESS_TOKEN_EXPIRE_MINUTES = settings.access_token_expire_minutes

def create_access_token(data:dict):
    to_encode = data.copy()
    
    expire = datetime.now(timezone.utc) + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

def verify_access_token(token:str, credential_exception):
    
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        id: str = payload.get("user_id")
        if id == None:
            raise credential_exception
        token_data = schema.TokenData(id=id)
    except JWTError:
        raise credential_exception
    return token_data

def get_current_user(token: str = Depends(oauth2_scheme),  db: Session = Depends(database.get_db)):
    credential_exception = HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Could not verify credentials", headers={"WWW.Authenticate": "Bearer"})
    token = verify_access_token(token, credential_exception)
    
    user = db.query(model.User).filter(model.User.id == token.id).first()
    
    return user

    
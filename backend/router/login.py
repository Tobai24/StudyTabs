from fastapi import  Response, status, HTTPException, Depends, APIRouter
from .. import model, schema, utils
from sqlalchemy.orm import Session
from ..database import get_db

router = APIRouter(
    prefix="/",
    tags=['Users']
)

@router.post("/signup", status_code=status.HTTP_201_CREATED, response_model=schema.Signup)
def create_user(user:schema.UserLogin , db: Session = Depends(get_db)):
    hashed_password = utils.hash(user.password)
    user.password=hashed_password
    new_user = model.User(**user.model_dump())
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return schema.Signup.model_validate(new_user)

@router.get("/signin")
def details(details: schema.UserLogin, db: Session = Depends(get_db)):
    user = db.query(model.User).filter(model.User.email == details.email).first()
    
    if user is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, 
                            detail=f"Invalid Credentials")
    
    # Verify the password
    if not utils.verify(details.password, user.password):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND , 
                            detail="Invalid Credentials")
    
    return schema.UserLogin.model_validate(user)
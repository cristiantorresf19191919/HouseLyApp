from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    MONGO_URI: str
    MONGO_DB: str
    SECRET_KEY: str

    class Config:
        env_file = ".env"
        extra = "allow"


settings = Settings()

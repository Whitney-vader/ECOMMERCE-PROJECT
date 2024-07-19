import os
from decouple import config

BASE_DIR = os.path.dirname(os.path.realpath(__file__))

class Config:
    SECRET_KEY = config('SECRET_KEY', default='secret_key_here')
    SQLALCHEMY_TRACK_MODIFICATIONS = config('SQLALCHEMY_TRACK_MODIFICATIONS', cast=bool, default=False)

class DevConfig(Config):
    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(BASE_DIR, 'dev.db')
    DEBUG = True
    SQLALCHEMY_ECHO = True

class NewConfig(Config):
    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(BASE_DIR, 'new.db')
    DEBUG = True
    SQLALCHEMY_ECHO = True

class TestConfig(Config):
    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(BASE_DIR, 'test.db')
    SQLALCHEMY_ECHO = False
    TESTING = True

class ProdConfig(Config):
    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(BASE_DIR, 'prod.db')
    SQLALCHEMY_ECHO = False
    DEBUG = False
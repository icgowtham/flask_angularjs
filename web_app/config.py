"""Config class for the flask application."""


class Config(object):
    DEBUG = False
    TESTING = False
    ADMIN_EMAIL = "ic.gowtham@gmail.com"


class ProductionConfig(Config):
    pass


class DevelopmentConfig(Config):
    DEBUG = True


class TestingConfig(Config):
    TESTING = True
    DEBUG = True

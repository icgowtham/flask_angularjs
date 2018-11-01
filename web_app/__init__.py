"""Flask application."""
from flask import Flask

web_app = Flask(__name__,
                static_folder='static',
                template_folder='templates')
# web_app.config.from_object('config.DevelopmentConfig')

from web_app import views

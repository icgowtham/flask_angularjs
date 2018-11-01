"""Module to handle the URL views."""

from flask import render_template

from web_app import web_app


@web_app.route("/")
def main():
    """Route for the index."""
    return render_template('index.html')

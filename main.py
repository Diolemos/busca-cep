from static.keys import connection_str
from flask import Flask, render_template, request
from pymongo import MongoClient


app = Flask(__name__)

mongo_uri = connection_str
client = MongoClient(mongo_uri)
db = client.get_database("ulims")
searches_collection = db.searches


@app.route("/")
def home():
    return render_template("home.html")

@app.route("/teste")
def respostas():
    return render_template("teste.html")


@app.route("/cep", methods=["GET", "POST"])
def cep():
    search_history = searches_collection.find()
    if request.method == "POST":
        cep_value = request.form.get("cep")
        save_search(cep_value)
    return render_template("cep.html", search_history=search_history)


def save_search(cep):
    searches_collection.insert_one({"cep": cep})
if __name__ == "__main__":
    app.run(debug=True)
    

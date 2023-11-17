from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("home.html")

@app.route("/teste")
def respostas():
    return render_template("teste.html")


@app.route("/cep")
def cep():
    return render_template("cep.html")

if __name__ == "__main__":
    app.run(debug=True)
    

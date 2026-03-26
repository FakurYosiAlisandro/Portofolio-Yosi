from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    # Merender file index.html dari folder templates
    return render_template('index.html')

if __name__ == '__main__':
    # Menjalankan server Flask dalam mode debug
    app.run(debug=True)
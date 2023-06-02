from flask import Flask, request,jsonify
from pymongo import MongoClient
from flask_cors import CORS
import pandas as pd
import json
from bson import json_util
from datetime import datetime

app = Flask(__name__)
CORS(app)

# Connect to MongoDB
client = MongoClient('mongodb://localhost:27017')
db = client['rcts']
collection = db['data']


@app.route('/api/submit-form', methods=['POST'])
def submit_form():
    form_data = request.json
    collection.insert_one(form_data)
    return 'Form data submitted successfully!', 200


@app.route('/upload', methods=['POST'])
def upload():
    file = request.files['file']

    # Read the Excel file using pandas
    df = pd.read_excel(file)

    # Convert the data to JSON
    json_data = df.to_json(orient='records')

    # Convert JSON to a list of dictionaries
    data = json.loads(json_data)
    print(data)

    # Insert the JSON data into MongoDB
    collection.insert_many(data)
    return {'message': 'Data uploaded successfully'} ,200


@app.route('/data', methods=['GET'])
def get_data():
    documents = collection.find({},{'_id':0})
    df = pd.DataFrame(documents)
    
    # Count values in each column
    column_counts = {}
    for column in df.columns:
        value_counts = df[column].value_counts().to_dict()
        cleaned_value_counts = {}
        for key, value in value_counts.items():
            cleaned_key = str(key) if not isinstance(key, datetime) else key.strftime('%Y-%m-%d %H:%M:%S')
            cleaned_value_counts[cleaned_key] = value
        
        column_counts[column] = cleaned_value_counts
    result = {}
    for key, value in column_counts.items():
        if isinstance(value, dict):
            filtered_values = {k: v for k, v in value.items() if v >0 }
            if filtered_values:
                result[key] = filtered_values
        elif value > 1:
            result[key] = value
    # print(documents)
    
    return jsonify(result)


if __name__ == '__main__':
    app.run(debug=True)

from flask import Flask,jsonify
from flask_cors import CORS # Fix Cross Origin Resource Sharing issue
import tradingeconomics as te

# Function to read the API key from the file
def read_api_key(filepath):
    with open(filepath,'rb') as f:
        return f.readline().strip().decode('utf-8')

# File path to the API key
filepath='./tradecon/te_api.pem'

# Define flask name
app=Flask(__name__)
# Enable CORS for all app routes
CORS(app)

# Define route for the app
@app.route('/data')

# Define function of display 
def home():
    # Login to the API
    te.login(read_api_key(filepath))
    # collect the information from API
    raw_data=te.getForecastData(country=['mexico','thailand','sweden','new zealand'],indicator=['gdp','population'])
    # Filter irrelevant data
    data=[item for item in raw_data if item['Category']!= 'Free accounts have access to the following countries: Mexico, New Zealand, Sweden, Thailand. For more, contact us at support@tradingeconomics.com.']
    return jsonify(data)
    #return jsonify(extracted_data)

# Check the script is running directly and not as an imported from module or script
# Use __name__ to name this script when imported in another script
if __name__ == '__main__':
    # Run the app in debug mode
    app.run(debug=True)
import csv
import json
import subprocess
import os

# Configuration
SHEET_ID = "1iDEfyHWJLh7GBZbDeQAxezibKyG0YWyAxtZM6DEjQog"
CSV_URL = f"https://docs.google.com/spreadsheets/d/{SHEET_ID}/export?format=csv"
DATA_FILE = "data/donations.json"
TARGET_ROW = 14 # Row 15 (0-indexed)
TARGET_COL = 1  # Column B (0-indexed)

def update_donations():
    # 1. Fetch CSV using curl
    print("Fetching data from Google Sheet...")
    try:
        csv_content = subprocess.check_output(['curl', '-L', CSV_URL]).decode('utf-8')
        lines = csv_content.splitlines()
        reader = csv.reader(lines)
        data = list(reader)
    except Exception as e:
        print(f"Error fetching data: {e}")
        return

    # 2. Extract value from B15
    try:
        new_amount = float(data[TARGET_ROW][TARGET_COL])
    except (IndexError, ValueError) as e:
        print(f"Error extracting value: {e}")
        # Print a bit of data to debug
        print(f"Data snippet: {data[TARGET_ROW] if len(data) > TARGET_ROW else 'Row not found'}")
        return

    # 3. Read current json
    with open(DATA_FILE, 'r') as f:
        json_data = json.load(f)

    # 4. Update if changed
    if json_data.get('direct') != new_amount:
        print(f"Updating direct donations from {json_data.get('direct')} to {new_amount}")
        json_data['direct'] = new_amount
        json_data['updated'] = os.popen('date +%Y-%m-%d').read().strip()

        # 5. Save json
        with open(DATA_FILE, 'w') as f:
            json.dump(json_data, f, indent=2)
        print("Data updated successfully.")
    else:
        print("No changes detected.")

if __name__ == "__main__":
    update_donations()

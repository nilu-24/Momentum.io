import requests
API_KEY = "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"

API_URL = "https://api-inference.huggingface.co/models/unitary/toxic-bert"
headers = {"Authorization": f"Bearer {API_KEY}"}

def query(payload):
	response = requests.post(API_URL, headers=headers, json=payload)
	return response.json()
#input text	
text = "This is a great initiative!"

output = query({
	"inputs": text,
})

print(output)

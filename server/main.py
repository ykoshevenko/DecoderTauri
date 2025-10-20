from fastapi import FastAPI
from bukvi import Post

app = FastAPI()

text = ''

@app.post('/api/post')
def postNumber(num: str):
    text = num
from fastapi import FastAPI
from bukvi import Post

app = FastAPI()

@app.post('/api/post')
def postNumber(num: str):
    return
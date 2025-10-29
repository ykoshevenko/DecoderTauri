from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from app.haffman.index_haff import *
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Порт вашего клиента
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],  # Явно разрешите OPTIONS
    allow_headers=["*"],
)

text_storage = {}
last_text_id = None

class TextInterface(BaseModel):
    text: str

@app.post('/api/post')
async def postString(req: TextInterface):
    import uuid
    text_id = str(uuid.uuid4())[:8]
    text_storage[text_id] = req.text
    global last_text_id
    last_text_id = text_id
    return {"id": text_id, "status": "saved"}

@app.get('/api/get')
async def getString(text_id: str = None):
    if text_id is None:
        if last_text_id is None:
            raise HTTPException(status_code=400, detail='text not found')
        text_id = last_text_id
    
    if text_id not in text_storage:
        raise HTTPException(status_code=404, detail=f'Text not found. Available IDs: {list(text_storage.keys())}')
    
    text = text_storage[text_id]

    if not text:
        return {"error": "text is empty"}
    
    freq = StringOnObj.onObj(text)
    builder = newTrees(freq)

    root = builder.build_tree()

    if root is None:
        return {'error': 'error building tree'}
    
    builder.generate_codes(root)

    return {
        'original_text': text,
        'huffman_codes': dict(builder.codes),
        'encoded_length': sum(len(builder.codes.get(char, "")) * count for char, count in freq.items()) 
    }


import '../style/index.css'
import { useState } from 'react'
import postText from '../script/post'
import getString from '../script/get'

interface Post {
    text: string
}

export default function InputWord() {
    const [text, setText] = useState<string>('')
    const [result, setResult] = useState<any>(null)

    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault()

        if (!text.trim()) {
            alert('Please enter some text')
            return
        }

        try {
            const formate_str:Post = {"text": text}
            const text_id:any = await postText(formate_str)
            const res = await getString(text_id)
            setResult(res)
        } catch(err) {
            throw err
        }
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <h1 className="title">TauriDecoder</h1>
            <h2>Works on the principle of the Huffman algorithm</h2>
            <textarea
                className='input'
                value={text}
                onChange={(e) => setText(e.target.value)}
            ></textarea>

            <br/>
            <button type='submit' className='resButton'>Get result</button>

            {result && (
                <div className="result">
                    <h3>Original Text: {result.original_text}</h3>
                    <h4>Huffman Codes:</h4>
                    <pre>{JSON.stringify(result.huffman_codes, null, 2)}</pre>
                </div>
            )}
        </form>
    )
}
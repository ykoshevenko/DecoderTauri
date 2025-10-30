import '../style/index.css'
import { useState } from 'react'
import postText from '../script/post'
import getString from '../script/get'

interface Post {
    text: string
}

interface Result {
    original_text: string,
    huffman_codes: Record<string, string>
    encoded_text: string
    encoded_length: number
}

export default function InputWord() {
    const [text, setText] = useState<string>('')
    const [result, setResult] = useState<Result | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!text.trim()) {
            alert('Please enter some text')
            return
        }

        setLoading(true)
        try {
            const formate_str: Post = {"text": text}
            const text_id: any = await postText(formate_str)
            const res = await getString(text_id)
            setResult(res as any)
        } catch(err) {
            console.error('Error:', err)
            alert('Error processing text')
        } finally {
            setLoading(false)
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
                placeholder="Enter text to encode..."
            ></textarea>

            <br/>
            <button type='submit' className='resButton' disabled={loading}>
                {loading ? 'Processing...' : 'Get result'}
            </button>

            {/* Показываем результаты только когда они есть */}
            {result && (
                <>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th className='colum1'>Symbol</th>
                                <th className='colum1'>Code</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(result.huffman_codes).map(([character, code]) => (
                                <tr key={character}>
                                    <td className='colum1'>{character === ' ' ? 'Space' : character}</td>
                                    <td className='colum1'>{code as string}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <h1>Final message</h1>
                    <code className='encoded_text'>{result.encoded_text}</code>
                    <h1>Final message weight: {result.encoded_length} Byte</h1>
                    
                </>
            )}

            {/* Сообщение когда нет результатов */}
            {!result && !loading && (
                <p>Enter text and click "Get result" to see encoding</p>
            )}
        </form>
    )
}